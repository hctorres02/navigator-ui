export const errors = {
    name: 'errors',
    data() {
        return {
            errors: {
                cant_open_file: 'can\'t open file',
                path_not_found: 'path not found',
                request_failed: 'failed to request server API'
            }
        }
    }
}

export const fixPath = {
    name: 'fixPath',
    methods: {
        fixPath(value, keepCollon = true) {
            if (!value) {
                return null
            }

            let COLLON = ':'
            let EMPTY = ''
            let SLASH = '/'

            if (value.startsWith(SLASH)) {
                value = value.substring(1)
            }

            if (!keepCollon) {
                value = value.replace(COLLON, EMPTY)
            }

            return value.replace(/\\+/g, SLASH).replace(/\/+$/, EMPTY)
        }
    }
}

export const prepareRequest = {
    name: 'prepareRequest',
    mixins: [fixPath],
    methods: {
        prepareRequest(mode, path) {
            this.$store.commit('isLoading', true)
            this.$store.commit('error', [])

            path = this.fixPath(path, false)

            return `${mode}/${path}`;
        }
    }
}

export const toggle = {
    name: 'toggle',
    methods: {
        toggle(target) {
            document.getElementById(target).classList.toggle('is-hidden')
        }
    }
}