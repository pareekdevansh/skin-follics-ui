import axiosInstance from "./axiosInstance";
import { handleError as handleApiError } from "../../utils/errorHandler";

const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api";

const baseApiService = {

    get: async (url, params = {}, headers = {}) => {
        try {
            const response = await axiosInstance.get(`${BASE_URL}${url}`, {
                params,
                headers
            });
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },

    post: async (url, data = {}, headers = {}) => {
        try {
            const response = await axiosInstance.post(`${BASE_URL}${url}`, data, { headers });
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },

    put: async (url, data = {}, headers = {}) => {
        try {
            const response = await axiosInstance.put(`${BASE_URL}${url}`, data, { headers });
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },

    patch: async (url, data = {}, headers = {}) => {
        try {
            const response = await axiosInstance.patch(`${BASE_URL}${url}`, data, { headers });
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },

    delete: async (url, params = {}, headers = {}) => {
        try {
            const response = await axiosInstance.delete(`${BASE_URL}${url}`, {
                params,
                headers
            });
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },
};

export default baseApiService;
