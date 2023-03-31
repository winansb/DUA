import axios from 'axios';
import { API_ROUTES } from '../apiRoutes';

export const screenController = {
    createScreen: async () => {
        try {
            const response = await axios.post(API_ROUTES.CREATE_SCREEN);
            return response.data;
        } catch (error) {
            console.error('screenController - createScreen : Error creating screen:', error);
            throw error;
        }
    },

    finishScreen: async (uid) => {
        try {
            const response = await axios.put(API_ROUTES.FINISH_SCREEN(uid));
            return response.data;
        } catch (error) {
            console.error(`screenController - finishScreen :Error finishing screen ${uid}:`, error);
            throw error;
        }
    },

    getScreen: async (uid) => {
        try {
            const response = await axios.get(API_ROUTES.GET_SCREEN(uid));
            return response.data;
        } catch (error) {
            console.error(`screenController - getScreen :Error getting screen ${uid}:`, error);
            throw error;
        }
    },
}
