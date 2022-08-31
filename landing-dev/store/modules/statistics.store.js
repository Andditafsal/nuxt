import { 
    getStatisticProvincies, 
    getStatisticCounter, 
    getStatisticChart, 
    getStatisticActiveBatchs, 
    getStatisticActiveBatchChart,
    getStatisticLandingPage,
    getStatisticStudentChart,
    getStatisticRegistrarChart,
} from "../api/request.api";

export default {
    namespaced: true,
    state: {
        statistics: [],
        message: '',
        success: false
    },

    mutations: {
        SET_PROVINCIES_RES(state, statistics) {
            state.statistics = statistics
        },
        SET_RES(state, res) {
            state.message = res.message,
            state.status = res.status
        }
    },
    getters: {
        getRequestStatisticProvincies(state) {
            return state.statistics
        }
    },
    actions: {
        async fetchRequestStatisticProvincies({commit}) {
            try {
                const response = await getStatisticProvincies()

                const data = response.data.data

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }

                commit('SET_RES', resPayload)
                commit('SET_PROVINCIES_RES', data)   
            } catch (error) {
                console.error("FAILED TO REQUEST DATA", error);
            }
        },
        async fetchRequestStatisticCounter({commit}) {
            try {
                const response = await getStatisticCounter()
                
                const data = response.data.data

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }

                commit('SET_RES', resPayload)
                commit('SET_PROVINCIES_RES', data)
            }
            catch (error) {
                console.error("FAILED TO REQUEST DATA", error);
            }
        },
        async fetchRequestStatisticChart({commit}, kind) {
            try {
                const response = await getStatisticChart(kind)
                
                const data = response.data.data

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }

                commit('SET_RES', resPayload)
                commit('SET_PROVINCIES_RES', data)
            }
            catch (error) {
                console.error("FAILED TO REQUEST DATA", error);
            }
        },
        async fetchStatisticActiveBatchs({commit}, kind) {
            try {
                const response = await getStatisticActiveBatchs(kind)
                
                const data = response.data.data

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }

                commit('SET_RES', resPayload)
                commit('SET_PROVINCIES_RES', data)
            }
            catch (error) {
                console.error("FAILED TO REQUEST DATA", error);
            }
        },
        async fetchStatisticActiveBatchChart({commit}, kind) {
            try {
                const response = await getStatisticActiveBatchChart(kind)
                
                const data = response.data.data

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }

                commit('SET_RES', resPayload)
                commit('SET_PROVINCIES_RES', data)
            }
            catch (error) {
                console.error("FAILED TO REQUEST DATA", error);
            }
        },
        async fetchStatisticsLandingPage({ commit }) {
            try {
                const response = await getStatisticLandingPage();

                const data = response.data.data;

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }

                commit('SET_RES', resPayload)
                commit('SET_PROVINCIES_RES', data)
            } catch (error) {
                console.error("FAILED TO REQUEST DATA", error);
            }
        },
        async fetchStatisticStudentChart({ commit }) {
            try {
                const response = await getStatisticStudentChart();

                const data = response.data.data;

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }

                commit('SET_RES', resPayload)
                commit('SET_PROVINCIES_RES', data)
            } catch (error) {
                console.error("FAILED TO REQUEST DATA", error);
            }
        },
        async fetchStatisticRegistrarChart({ commit }) {
            try {
                const response = await getStatisticRegistrarChart();

                const data = response.data.data;

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }

                commit('SET_RES', resPayload)
                commit('SET_PROVINCIES_RES', data)
            } catch (error) {
                console.error("FAILED TO REQUEST DATA", error);
            }
        }
    }
}