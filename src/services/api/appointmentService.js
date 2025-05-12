import baseApiService from "./baseApiService";

class AppointmentService {
    async getAllAppointments() {
        try {
            const response = await baseApiService.get("/appointments/all");
            return response;
        } catch (error) {
            throw new Error(`Failed to fetch appointments: ${error.message}`);
        }
    }

    async getAppointmentsByUserId(userId) {
        if (!userId || isNaN(userId)) {
            throw new Error("Invalid user ID provided.");
        }

        try {
            const response = await baseApiService.get(`/appointments/user?userId=${userId}`);

            if (!response || !response) {
                throw new Error("Invalid response from the server.");
            }

            return response;
        } catch (error) {
            console.error(`Error fetching appointments for user ID ${userId}:`, error);
            throw error;
        }
    }
    async getAppointmentById(id) {
        try {
            const response = await baseApiService.get(`/appointments/${id}`);
            return response;
        } catch (error) {
            throw new Error(`Failed to fetch appointment with ID ${id}: ${error.message}`);
        }
    }

    async addAppointment(appointmentRequest) {
        try {
            const response = await baseApiService.post("/appointments", appointmentRequest);
            return response;
        } catch (error) {
            throw new Error(`Failed to add appointment: ${error.message}`);
        }
    }

    async updateAppointment(id, appointment) {
        try {
            const response = await baseApiService.put(`/appointments/${id}`, appointment);
            return response;
        } catch (error) {
            throw new Error(`Failed to update appointment with ID ${id}: ${error.message}`);
        }
    }

    async deleteAppointmentById(id) {
        try {
            const response = await baseApiService.delete(`/appointments/${id}`);
            return response;
        } catch (error) {
            throw new Error(`Failed to delete appointment with ID ${id}: ${error.message}`);
        }
    }
}

export default AppointmentService;