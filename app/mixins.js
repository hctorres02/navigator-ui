export const errors = {
    name: 'errors',
    data() {
        return {
            errors: {
                path_not_found: 'path not found',
                request_failed: 'failed to request server API'
            }
        }
    }
}

export const fixPath = {
    name: 'fixPath',
    methods: {
        fixPath(value, fromRoute = true) {
            if (!value) {
                return null
            }

            if (fromRoute) {
                value = value.substring(1)

                return this.fixPath(value, false)
            }

            let SLASH = '/'
            let EMPTY = ''

            return value.replace(/\\/g, SLASH).replace(/\/+$/, EMPTY)
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