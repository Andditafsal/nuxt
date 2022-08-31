import {
    apiGetLmsId,
    apiGetAllSettings,
    apiGetSettingByKey,
    apiUpdateAllSettings,
    apiUpdateSettingByKey
} from "@/store/api/sass.api"

export default {
    namespaced: true,
    state: {
        data: null,
        message: '',
        status: false,
        setting: null,
        lmsId: null,
    },

    mutations: {
        SET_RESPONSE(state, { message, status }){
            state.message = message
            state.status = status
        },
        SET_DATA(state, data){
            state.data = data
        },
        SET_LMSID(state, lmsId){
            state.lmsId = lmsId
        },
        setSetting(state, setting) {
            state.setting = setting;
        },
    },

    getters: {
        domain: (state) => state.domain,
    },

    actions: {

        async lmsId ({commit}, {version}) {
            try {
                const response = await apiGetLmsId(version)

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }

                commit('SET_RESPONSE', resPayload);
                commit('SET_LMSID', response.data.data);
                
                localStorage.setItem('lmsId', response.data.data)

            } catch (error) {
                console.error("Failed to get sass lms id:", error);
                const resPayload = {
                    message: error,
                    status: false
                }

                commit('SET_RESPONSE', resPayload);
            }
        },
        async allSettings ({commit}, {version}) {
            try {
                const response = await apiGetAllSettings(version)

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }

                commit('SET_RESPONSE', resPayload);

                commit('SET_DATA', response.data.data)

            } catch (error) {
                console.error("Failed to get all sass settings:", error);
                const resPayload = {
                    message: error,
                    status: false
                }

                commit('SET_RESPONSE', resPayload);
            }
        },
        async settingByKey ({commit}, {version, key}) {
            try {
                const response = await apiGetSettingByKey(version, key)

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }

                commit('SET_RESPONSE', resPayload);

                commit('SET_DATA', response.data.data)

            } catch (error) {
                console.error("Failed to get sass setting by key:", error);
                const resPayload = {
                    message: error,
                    status: false
                }

                commit('SET_RESPONSE', resPayload);
            }
        },
        async editAllSettings ({commit}, {version, params}) {
            try {
                const response = await apiUpdateAllSettings(version, params)

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }

                commit('SET_RESPONSE', resPayload);

                commit('SET_DATA', response.data.data)

            } catch (error) {
                console.error("Failed to edit all sass settings:", error);
                const resPayload = {
                    message: error,
                    status: false
                }

                commit('SET_RESPONSE', resPayload);
            }
        },
        async editSettingByKey ({commit}, {version, key, params}) {
            try {
                const response = await apiUpdateSettingByKey(key, params, version)

                const resPayload = {
                    message: response.data.message,
                    status: response.data.status
                }

                commit('SET_RESPONSE', resPayload);

                commit('SET_DATA', response.data.data)

            } catch (error) {
                console.error("Failed to edit sass setting by key:", error);
                const resPayload = {
                    message: error,
                    status: false
                }

                commit('SET_RESPONSE', resPayload);
            }
        },
    }
}