import axios from 'axios';
import { API_ROUTES } from '../apiRoutes';

export const tapController = {
    createTap: async (tapData) => {
        try {
            const response = await axios.post(API_ROUTES.CREATE_TAP, tapData);
            return response.data;
        } catch (error) {
            console.error('tapController - createTap: Error creating tap:', error);
            throw error;
        }
    },

    getTap: async (uid) => {
        try {
            const response = await axios.get(API_ROUTES.GET_TAP(uid));
            return response.data;
        } catch (error) {
            console.error(`tapController - getTap: Error getting tap ${uid}:`, error);
            throw error;
        }
    },
}