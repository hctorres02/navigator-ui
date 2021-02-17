export const generateBreadcrumbs = (value) => {
    if (!value) {
        return
    }

    let SLASH = '/'
    let COLON = ':'
    let EMPTY = ''

    return value.split(SLASH)
        .filter(item => item != EMPTY)
        .map((item, index, items) => {
            let item_path = items.slice(0, index + 1).join(SLASH) || SLASH
            item_path.endsWith(COLON) ? item_path + SLASH : item_path

            return {
                label: item == EMPTY ? SLASH : item,
                path: item_path,
                isActive: item_path == value
            }
        })
}

export const commitError = {
    name: 'commitError',
    methods: {
        commitError(error) {
            this.$store.commit('error', error.response.data)
        }
    }
}

export const commitCurrentPath = {
    name: 'commitCurrentPath',
    methods: {
        commitCurrentPath(value) {
            this.$store.commit('currentPath', value)
        }
    }
}

export const commitBreadcrumbs = {
    name: 'commitBreadcrumbs',
    methods: {
        commitBreadcrumbs(value) {
            this.$store.commit('breadcrumbs', value)
        }
    }
}

export const commitEntities = {
    name: 'commitEntities',
    methods: {
        commitEntities(value) {
            this.$store.commit('entities', value)
        }
    }
}



