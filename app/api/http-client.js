import { fixPath } from '../mixins.js'

const httpBase = axios.create({
    baseURL: appConfig.api_url
})

export const httpStatus = {
    201: 'objeto criado',
    204: 'no content',
    400: 'sintaxe inválida',
    401: 'não autorizado',
    403: 'acesso proibido',
    404: 'não encontrado',
    405: 'método não aceito',
    409: 'já existe',
    500: 'erro ao processar requisição, tente novamente',
    999: 'erro inexperado'
}

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