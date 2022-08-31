import { apiGetBlogList, apiGetBlogDetail } from "../api/blog.api";

export default {
    namespaced: true,
    state () {
        return {
            blogs: [],
            blog: null,
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
        SET_BLOGS(state, { blogs }) {
            state.blogs = blogs;
        },
        SET_BLOG(state, { blog }) {
            state.blog = blog;
        }
    },
    actions: {
        async fetchBlogList ({ commit }, { page }) {
            try {
                const response = await apiGetBlogList(page != undefined ? page : 1);

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }
        
                commit('SET_RESPONSE', resPayload);

                const data = response.data;

                const payload = {
                    blogs: data.data
                }

                commit('SET_BLOGS', payload);

                const pagePayload = {
                    pagination: {
                        currentPage: data.page.current_page,
                        lastPage: data.page.last_page,
                        perPage: data.data_count.per_page,
                        totalRows: data.data_count.total_data,
                    }
                };

                commit('SET_PAGINATION', pagePayload);
            } catch (error) {
                const resPayload = {
                    message: error,
                    status: false
                }
        
                commit('SET_RESPONSE', resPayload);
                console.error('Failed to fetch blogs list', error);
            }
        },
        async getBlogById ({ commit }, { id }) {
            try {
                const response = await apiGetBlogDetail(id);

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }
        
                commit('SET_RESPONSE', resPayload)

                const payload = {
                    blog: response.data.data
                }

                commit('SET_BLOG', payload);
            } catch (error) {
                console.error('failed fetch blog details', error);
            }
        },
    }
}