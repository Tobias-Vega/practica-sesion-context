import { API_URL } from "../config/config.js";
import { fetchData } from "../utility/fetchUtility.js";

export const login = async (username, password) => {
    const response = await fetchData(`${API_URL}/login`, `POST`, {username, password}
    );
    return await response.json();
};


export const logout = async () => {
    const response = await fetchData(`${API_URL}/logout`, `POST`);

    return response;
}