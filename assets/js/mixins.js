export const Errors = {
    path_not_found: 'path not found',
    request_failed: 'failed to request server API'
}

export const FixPath = {
    name: 'FixPath',
    methods: {
        fixPath(value, fromRoute = true) {
            if (!value) {
                return null
            }

            if (fromRoute) {
                value = value.substring(1)
            }

            let PATTERN = /\\/g
            let SLASH = '/'

            return value ? value.replace(PATTERN, SLASH) : null
        }
    }
}