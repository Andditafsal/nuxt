import { apiGetPrograms, apiGetProgramAws } from '../api/programs.api';

export default {
    namespaced: true,
    state: {
        programs: [],
        message: '',
        status: false,
    },

    mutations: {
        SET_RESPONSE(state, {message, status}){
            state.message = message;
            state.status = status;
        },
        SET_PROGRAMS(state, {programs}){
            state.programs = programs
        },
    },

    actions: {
        async getPrograms({commit}) {
            try {
                const response = await apiGetPrograms();

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }

                commit('SET_RESPONSE', resPayload);

                const payload = {
                    programs: response.data.data
                }

                commit('SET_PROGRAMS', payload);
            } catch (error) {
                const resPayload = {
                    message: error,
                    status: false
                }

                commit('SET_RESPONSE', resPayload);
                console.log('Failed get programs: ', error);
            }
        },
        async getProgramAws({commit}) {
            try {
                const response = await apiGetProgramAws();

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }

                commit('SET_RESPONSE', resPayload);

                const payload = {
                    programs: response.data.data
                }

                commit('SET_PROGRAMS', payload);
            } catch (error) {
                console.log('Failed get programs: ', error);
            }
        },
    }
}