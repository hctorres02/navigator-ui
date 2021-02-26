import { fixPath } from '../mixins.js'

const httpBase = axios.create({
    baseURL: appConfig.api_url
})

export const httpGet = (path) => {
    path = fixPath(path)
    return httpBase.get(path)
}

export const httpPost = (path, entity, params) => {
    path = fixPath(path)
    return httpBase.post(path, entity, { params: { params } })
}

export const httpPut = (path, entity) => {
    path = fixPath(path)
    return httpBase.put(path, entity)
}

export const httpDelete = (path) => {
    path = fixPath(path)
    return httpBase.delete(path)
}