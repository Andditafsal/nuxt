import { generateAppToken } from "../api/auth.api";

export default {
    namespaced: true,
    state: {
        message: '',
        appToken: null,
        status: false,
    },

    mutations: {
        SET_RESPONSE(state, { message, status }) {
            state.message = message
            state.status = status
        },
        SET_APP_TOKEN(state, token) {
            state.appToken = token
        },
    },

    actions: {

        async getAppToken({ commit }) { // Use
            try {
                const response = await generateAppToken();

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }

                commit('SET_RESPONSE', resPayload)

                const appToken = response.data.data

                commit('SET_APP_TOKEN', appToken)

            } catch (error) {
                const resPayload = {
                    message: error,
                    status: false
                }

                commit('SET_RESPONSE', resPayload)
                console.error('Failed to get app token', error);
            }
        },

    }
}