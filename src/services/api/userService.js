import baseApiService from "./baseApiService";

class UserService {

  async getUserById(id) {
    if (!id || isNaN(id)) {
      throw new Error("Invalid user ID.");
    }

    try {
      const response = await baseApiService.get(`/users/${id}`);
      return response;
    } catch (error) {
      throw new Error(`Failed to fetch user with ID ${id}: ${error.message}`);
    }
  }

  async getAllUsers() {
    try {
      const response = await baseApiService.get("/users/");
      return response;
    } catch (error) {
      throw new Error(`Failed to fetch users: ${error.message}`);
    }
  }
}

export default new UserService();
