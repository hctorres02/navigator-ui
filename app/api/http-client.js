import { prepareRequest } from '../mixins.js'

const httpClient = axios.create({
    baseURL: appConfig.api_url
})

export const httpGet = {
    name: 'httpGet',
    mixins: [prepareRequest],
    methods: {
        httpGet(mode, path) {
            let url = this.prepareRequest(mode, path)

            return httpClient.get(url)
                .then(({ data }) => data)
                .finally(() => this.$store.commit('isLoading', false))
        }
    }
}

export const httpPost = {
    name: 'httpPost',
    mixins: [prepareRequest],
    methods: {
        httpPost(mode, path, data) {
            let url = this.prepareRequest(mode, path)

            return httpClient.post(url, data)
                .then(({ data }) => data)
                .finally(() => this.$store.commit('isLoading', false))
        }
    }
}