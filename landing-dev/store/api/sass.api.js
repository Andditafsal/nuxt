import axios from 'axios'
import sassClient from './sassClient'

const SASS_URL = process.env.sassURL

const apiGetLmsId = (version) => sassClient.get(SASS_URL + `${version}/cms/app/id`)

const apiGetAllSettings = (version) => sassClient.get(SASS_URL + `${version}/cms/app/settings`)

const apiGetSettingByKey = (version, key) => sassClient.get(SASS_URL + `${version}/cms/app/setting/${key}`)

const apiUpdateAllSettings = (version, params) => sassClient.put(SASS_URL + `${version}/cms/app/settings`, params)

const apiUpdateSettingByKey = (version, key, params) => sassClient.put(SASS_URL + `${version}/cms/app/setting/${key}`, params)

export {
    apiGetLmsId,
    apiGetAllSettings,
    apiGetSettingByKey,
    apiUpdateAllSettings,
    apiUpdateSettingByKey
}