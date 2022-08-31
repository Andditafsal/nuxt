import { getDetailUser } from '../api/users.api';

export default {
    namespaced: true,
    state: {
        detail_auth: {},
        message: '',
        status: false
    },

    mutations: {
        SET_RESPONSE(state, {message, status}){
            state.message = message;
            state.status = status;
        },
        SET_DETAIL_AUTH(state, auth_detail) {
            state.detail_auth = auth_detail
        }
    },

    actions: {

        async fetchDetailUser({ commit }) {
            try {
                const response = await getDetailUser();

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                };

                commit('SET_RESPONSE', resPayload);
                commit('SET_DETAIL_AUTH', response.data.data);
            } catch (error) {
                const resPayload = {
                    message: error,
                    status: false
                };

                commit('SET_RESPONSE', resPayload);
                console.error('Failed to fetch Detail Authenticated User: ', error)
            }
        },

    }
}