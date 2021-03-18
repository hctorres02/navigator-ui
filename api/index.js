import { fixPath, toast } from '../mixins/index.js'

const http = axios.create({
    baseURL: API_URL
})

export const httpGet = async function (path) {
    try {
        path = fixPath(path)
        let { data } = await http.get(path)

        return data
    } catch (e) {
        toast({
            message: e.message,
            type: 'is-danger'
        })
    }
}