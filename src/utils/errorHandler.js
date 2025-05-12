class ApiError extends Error {
    constructor(message, status, data) {
        super(message);
        this.status = status;
        this.data = data;
    }
}

export function handleError(error) {
    if (error.response) {
        throw new ApiError(
            error.response.data.message || "Internal Server error",
            error.response.status,
            error.response.data
        );
    } else if (error.request) {
        throw new ApiError("No response received from server", null, null);
    } else {
        throw new ApiError(error.message || "Something went wrong", null, null);
    }
}
