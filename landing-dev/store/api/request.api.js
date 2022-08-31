import axios from "axios";
import appToken from "./app-token";

const BASE_URL = process.env.baseURL

const getCounterLandingPage = () => {
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
    return httpClient.get(BASE_URL + 'statistics');
}
const getStatisticProvincies = () => { 
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
    return httpClient.get(BASE_URL + 'statistic/provincies')
}
const getStatisticProvinciesScore = () => {
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
    return httpClient.get(BASE_URL + 'statistic/provincies/score')
}

const getStatisticLandingPage = () => {
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
    return httpClient.get(BASE_URL + 'statistic/landing/counter');
}

const getStatisticCounter = () => {
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
    return httpClient.get(BASE_URL + 'statistic/counter')
}
const getStatisticChart = (kind) => {
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
    return httpClient.get(BASE_URL + 'statistic/chart/' + kind)
}
const getStatisticActiveBatchs = () => {
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
    return httpClient.get(BASE_URL + `statistic/batchs/active`)
}
const getStatisticActiveBatchChart = (kind) => {
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
    return httpClient.get(BASE_URL + `statistic/batchs/active/` + kind)
}
const getStatisticStudentChart = () => {
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
    return httpClient.get(BASE_URL + 'statistic/students/chart');
}
const getStatisticRegistrarChart = () => {
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
    return httpClient.get(BASE_URL + 'statistic/registrar/chart');
}

export {
    getCounterLandingPage,
    getStatisticProvincies,
    getStatisticProvinciesScore,
    getStatisticLandingPage,
    getStatisticActiveBatchChart,
    getStatisticChart,
    getStatisticCounter,
    getStatisticRegistrarChart,
    getStatisticStudentChart,
    getStatisticActiveBatchs
}