const mixins = {
    name: 'mixins',
    methods: {
        toggle(target) {
            document.getElementById(target).classList.toggle('is-hidden')
        },
        prepareRequest(path) {
            this.commitIsLoading()
            this.commitError(null)
            this.commitSuccess(null)

            path = this.fixPath(path, false)

            return `/${path}`;
        },
        fixPath(value, keepCollon = true) {
            if (!value) {
                return null
            }

            let COLLON = ':'
            let EMPTY = ''
            let SLASH = '/'
            let QUESTION = '?'

            if (value.startsWith(SLASH)) {
                value = value.substring(1)
            }

            if (value.indexOf(QUESTION) > -1) {
                value = value.substring(0, value.indexOf(QUESTION))
            }

            if (!keepCollon) {
                value = value.replace(COLLON, EMPTY)
            }

            return value.replace(/\\+/g, SLASH).replace(/\/+$/, EMPTY)
        },
        fileIsOpen(path) {
            return !!this.$store.state.editor.find(el => this.fixPath(el.path) == this.fixPath(path))
        },

        // STORE
        commitCurrentPath(value) {
            this.$store.commit('currentPath', value)
        },
        commitEntities(value) {
            this.$store.commit('entities', value)
        },
        commitOpenFile(value) {
            this.$store.commit('openFile', value)
        },
        commitCloseFile(value) {
            this.$store.commit('closeFile', value)
        },
        commitError(value) {
            this.$store.commit('errorMessage', value)
        },
        commitSuccess(value) {
            this.$store.commit('successMessage', value)
        },
        commitIsLoading() {
            this.$store.commit('isLoading', !this.$store.state.isLoading)
        }
    }
}

export default mixins