import baseApiService from "./baseApiService";

class AuthService {
    async login(credentials) {
        if (!credentials?.phoneNumber || !credentials?.password) {
            throw new Error("Phone number and password are required.");
        }

        try {
            const response = await baseApiService.post("/auth/login", credentials);

            const { token, user } = response.data;

            localStorage.setItem("token", token);

            return { user, token };
        } catch (error) {
            throw new Error(
                error.response?.data?.message || "Login failed. Please try again."
            );
        }
    }

    async register(userData) {
        if (!userData?.email || !userData?.password) {
            throw new Error("Email and password are required.");
        }

        try {
            const response = await baseApiService.post("/auth/register", userData);
            return response.data;
        } catch (error) {
            throw new Error(
                error.response?.data?.message || "Registration failed."
            );
        }
    }

    async logout() {
        try {
            await baseApiService.post("/auth/logout");

            localStorage.removeItem("token");
        } catch (error) {
            localStorage.removeItem("token");
            throw new Error("Logout failed, but token was cleared.");
        }
    }
}

export default new AuthService();