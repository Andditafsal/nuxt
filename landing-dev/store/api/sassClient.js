import axios from "axios"
import appToken from "./app-token"

const sassClient = axios.create({
    baseURL: process.env.sassURL,
    timeout: 5000,
})

const authInterceptor = (config) => {
    config.headers['D-App-Authorization'] = appToken.generateDAppToken()
    return config
}

sassClient.interceptors.request.use(authInterceptor)

export default sassClient