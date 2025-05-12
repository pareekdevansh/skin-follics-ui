import baseApiService from "./baseApiService";

class OAuth2ApiService {
    constructor(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }
    async exchangeAuthCodeForToken(url, data) {
        try {
            const response = await baseApiService.post(url, data);
            return response;
        } catch (error) {
            throw new Error(`Failed to exchange auth code for token: ${error.message}`);
        }
    }

    async refreshToken(refreshToken) {
        try {
            const data = {
                client_id: this.clientId,
                client_secret: this.clientSecret,
                refresh_token: refreshToken,
                grant_type: "refresh_token",
            };

            const response = await baseApiService.post(this.tokenEndpoint, data);
            return response;
        } catch (error) {
            throw new Error(`Failed to refresh token: ${error.message}`);
        }
    }
}

export default OAuth2ApiService;
