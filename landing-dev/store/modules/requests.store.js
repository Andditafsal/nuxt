import { getCounterLandingPage } from "../api/request.api";

export default {
    namespaced: true,
    state: {
        message: '',
        status: false,
        data_count: {}
    },
    mutations: {
        SET_COUNTER(state, count) {
            state.data_count = count
        },
        SET_RES(state, data) {
            state.message = data.message,
            state.status = data.status
        }
    },
    getters: {
        getRequestStudents(state) {
            return state.users
        }
    },
    actions: {
        async fetchCounterLandingPage({commit}) {
            try {
                const response = await getCounterLandingPage()
                const data = response.data

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }

                commit('SET_RES', resPayload)

                commit('SET_COUNTER', data.data)   
            } catch (error) {
                const resPayload = {
                    message: error,
                    status: false
                }
                commit('SET_RES', resPayload)
                console.error("FAILED TO REQUEST USER DATA", error);
            }
        },
    }
}