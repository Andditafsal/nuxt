import axios from "axios"
import appToken from "./app-token"

const BASE_AUTH_URL = process.env.baseAuthURL

const getDetailUser = () => {
    const authClient = axios.create({
        baseAuthURL: BASE_AUTH_URL,
        timeout: 5000,
    })

    const getAuthToken = () => localStorage.getItem('access_token')

    const authInterceptor = (config) => {
        config.headers['X-App-Authorization'] = localStorage.getItem('lmsId')
        config.headers['D-App-Authorization'] = appToken.generateDAppToken()
        if (getAuthToken() != null && getAuthToken() != undefined && getAuthToken() != "") {
            config.headers['Authorization'] = `${getAuthToken()}`
        }
        return config
    }

    authClient.interceptors.request.use(authInterceptor)

    return authClient.get(BASE_AUTH_URL + 'user/detail')
}

export { getDetailUser }