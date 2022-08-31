import axios from "axios"
import appToken from "./app-token"

const BASE_URL = process.env.baseURL

const apiGetMentors = () => {
    const httpClient = axios.create({
        baseURL: BASE_URL,
        timeout: 5000,
    })

    const getAuthToken = () => localStorage.getItem('access_token')

    const authInterceptor = (config) => {
        if (getAuthToken()) config.headers['Authorization'] = `Bearer ${getAuthToken()}`
        config.headers['D-App-Authorization'] = appToken.generateDAppToken()
        config.headers['lmsId'] = localStorage.getItem('lmsId')
        return config
    }

    httpClient.interceptors.request.use(authInterceptor)

    return httpClient.get(BASE_URL + `active/mentors`)
}

export {
    apiGetMentors,
}