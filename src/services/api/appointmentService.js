import baseApiService from "./baseApiService";

class AppointmentService {

    constructor() {
    }
    async getAppointments() {
        try {
            const response = await baseApiService.get("/appointments");
            return response;
        } catch (error) {
            throw new Error(`Failed to get appointments: ${error.message}`);
        }
    }

    async createAppointment(data) {
        try {
            const response = await baseApiService.post("/appointments", data);
            return response;
        } catch (error) {
            throw new Error(`Failed to create appointment: ${error.message}`);
        }
    }
}

export default AppointmentService;