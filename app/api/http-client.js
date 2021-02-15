const httpClient = axios.create({})

export const httpGet = {
    name: 'HttpGet',
    methods: {
        httpGet(mode, path) {
            return httpClient.get('/', {
                params: {
                    mode,
                    path
                }
            })
        }
    }
}

export const httpPost = {
    name: 'HttpPost',
    methods: {
        httpPost(mode, path, data) {
            return httpClient.post('/', {
                data,
                params: {
                    mode,
                    path
                }
            })
        }
    }
}