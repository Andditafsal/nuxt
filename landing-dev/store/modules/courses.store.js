import { apiGetSilabusByProgramId } from '../api/courses.api';

export default {
    namespaced: true,
    state: {
        silabus: [],
        message: '',
        status: false
    },

    mutations: {
        SET_RESPONSE(state, {message, status}){
            state.message = message;
            state.status = status;
        },
        SET_SILABUS(state, {silabus}){
            state.silabus = silabus
        },
    },

    actions: {
        async getSilabusByProgramId({commit}, programId) {
            try {
                const response = await apiGetSilabusByProgramId(programId)

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }

                commit('SET_RESPONSE', resPayload)

                const payload = {
                    silabus: response.data.data,
                }

                commit('SET_SILABUS', payload)
            } catch (error) {
                const resPayload = {
                    message: error,
                    status: false
                }

                commit('SET_RESPONSE', resPayload)
                console.log('Failed post module: ', error)
            }
        },
    }
}