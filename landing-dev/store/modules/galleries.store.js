import { apiGetGalleryList } from "../api/gallery.api";

export default {
    namespaced: true,
    state () {
        return {
            galleries: [],
            pagination: {
                currentPage: 0,
                perPage: 0,
                totalRows: 0,
            },
            message: '',
            status: false,
        };
    },
    mutations: {
        SET_RESPONSE(state, { message, status }) {
            state.message = message
            state.status = status
        },
        SET_PAGINATION(state, { pagination }){
            state.pagination = pagination;
        },
        SET_GALLERIES(state, { galleries }) {
            state.galleries = galleries;
        },
    },
    actions: {
        async fetchGalleryList ({ commit }, { page }) {
            try {
                const response = await apiGetGalleryList(page != undefined ? page : 1);

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }
        
                commit('SET_RESPONSE', resPayload);

                const data = response.data.data;

                const payload = {
                    galleries: data.data
                }

                commit('SET_GALLERIES', payload);

                const pagePayload = {
                    pagination: {
                        currentPage: data.current_page,
                        lastPage: data.last_page,
                        perPage: data.per_page,
                        totalRows: data.total,
                    }
                };

                commit('SET_PAGINATION', pagePayload);
            } catch (error) {
                const resPayload = {
                    message: error,
                    status: false
                }
        
                commit('SET_RESPONSE', resPayload);
                console.error('Failed to fetch galleries list', error);
            }
        },
    }
}