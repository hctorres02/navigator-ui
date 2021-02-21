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
                .finally(this.commitIsLoading)
        },
        httpDelete(item) {
            let url = this.prepareRequest(item.path)

            return httpBase.delete(url)
                .finally(this.commitIsLoading)
        },
        browserEntities(to) {
            let routePath = this.fixPath(this.$route.path)
            let currentPath = this.$store.state.currentPath

            if (routePath && routePath == currentPath) {
                return
            }

            this.httpGet(to)
                .then(entity => {

                    if (!entity) {
                        throw new Error(`Can't not load '${to}'`)
                    }

                    if (entity.dirname && !entity.isDir) {
                        if (!this.fileIsOpen(entity.path)) {
                            this.commitOpenFile(entity)
                        }

                        this.browserEntities(entity.dirname)
                        return;
                    }

                    let received = this.fixPath(entity.path)

                    if (received != routePath) {
                        this.$router.push(`/${received}`)
                    }

                    this.commitCurrentPath(received)
                    this.commitEntities(entity.data)

                    document.getElementById('stage').scrollTo(0, 0)

                })
                .catch(this.commitError)
        }
    }
}

export default httpClient