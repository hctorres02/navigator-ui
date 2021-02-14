const FixPath = {
    name: 'Mixin',
    methods: {
        fixPath(value) {
            let SLASH = '/'

            if (value.startsWith(SLASH)) {
                value = value.substring(1)
            }

            return value ? value.replace(/\\/g, SLASH) : null
        }
    }
}

export { FixPath }