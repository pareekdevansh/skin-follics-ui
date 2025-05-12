import baseApiService from "./baseApiService";

class TreatmentService {
    constructor() {}

    async getTreatmentById(id) {
        try {
            const response = await baseApiService.get(`/treatments/${id}`);
            return response;
        } catch (error) {
            throw new Error(`Failed to get treatment by ID: ${error.message}`);
        }
    }

    async getAllTreatments() {
        try {
            const response = await baseApiService.get("/treatments");
            return response;
        } catch (error) {
            throw new Error(`Failed to get all treatments: ${error.message}`);
        }
    }

    async addTreatment(data) {
        try {
            const response = await baseApiService.post("/treatments", data);
            return response;
        } catch (error) {
            throw new Error(`Failed to add treatment: ${error.message}`);
        }
    }

    async updateTreatment(id, data) {
        try {
            const response = await baseApiService.put(`/treatments/${id}`, data);
            return response;
        } catch (error) {
            throw new Error(`Failed to update treatment: ${error.message}`);
        }
    }

    async deleteTreatmentById(id) {
        try {
            const response = await baseApiService.delete(`/treatments/${id}`);
            return response;
        } catch (error) {
            throw new Error(`Failed to delete treatment: ${error.message}`);
        }
    }
}

export default TreatmentService;