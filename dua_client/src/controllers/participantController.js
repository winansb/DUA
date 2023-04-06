import axios from 'axios';
import { API_ROUTES } from '../apiRoutes';

export const participantController = {
    createParticipant: async (participantData) => {
        try {
            const response = await axios.post(API_ROUTES.CREATE_PARTICIPANT, participantData);
            return response.data;
        } catch (error) {
            console.error('participantController - createParticipant: Error creating Participant', error);
        }
    },

    updateDetourComplete: async (uid) => {
        try {
            const response = await axios.put(API_ROUTES.UPDATE_DETOUR_COMPLETE(uid));
            return response.data;
        } catch (error) {
            console.error('participantController - updateDetourComplete: Error updating participants detour complete record', error);
        }
    },

    updateBreakdownComplete: async (uid) => {
        try {
            const response = await axios.put(API_ROUTES.UPDATE_BREAKDOWN_COMPLETE(uid));
            return response.data;
        } catch (error) {
            console.error('participantController - updateBreakdownComplete : Error updating participants breakdown complete record', error);
        }
    },

    updateTestInProgress: async (uid) => {
        try {
            const response = await axios.put(API_ROUTES.UPDATE_TEST_IN_PROGRESS(uid));
            return response.data;
        } catch (error) {
            console.error('participantController - updateTestInProgress: Error updating participants test in progress record', error);
        }
    },

    getParticipant: async (uid) => {
        try {
            const response = await axios.get(API_ROUTES.GET_PARTICIPANT(uid));
            return response.data;
        } catch (error) {
            console.error('participantController - getParticipant: Error getting participant', error);
        }
    },
    getAllParticipants: async () => {
        try {
            const response = await axios.get(API_ROUTES.GET_ALL_PARTICIPANTS);
            return response.data;
        } catch (error) {
            console.error('participantController - getAllParticipants: Error getting all participants', error);
        }
    }
};