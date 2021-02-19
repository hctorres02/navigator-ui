import mixins from '../mixins.js'

const httpBase = axios.create({
    baseURL: appConfig.api_url
})

const httpClient = {
    name: 'httpCient',
    mixins: [mixins],
    methods: {
        httpGet(path, isDownload = false) {
            let url = this.prepareRequest(path)
            let params = isDownload ? { download: true } : null

            return httpBase.get(url, { params })
                .then(({ data }) => data)
                .finally(this.commitIsLoading)
        },
        httpPost(item) {
            let url = this.prepareRequest(item.path)

            return httpBase.post(url, item)
                .then(({ data }) => data)
                .finally(this.commitIsLoading)
        },
        httpPut(item) {
            let url = this.prepareRequest(item.path)

            return httpBase.put(url, item)
                .then(({ data }) => data)
                .finally(this.commitIsLoading)
        },
        httpDelete(item) {
            let url = this.prepareRequest(item.path)

            return httpBase.delete(url)
                .then(({ data }) => data)
                .finally(this.commitIsLoading)
        },
    }
}

export default httpClient