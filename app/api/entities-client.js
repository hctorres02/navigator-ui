import { httpGet } from './http-client.js'
import { errors, fixPath } from '../mixins.js'

export const entitiesClient = {
    name: 'entitiesClient',
    mixins: [errors, fixPath, httpGet],
    methods: {
        browserEntities(next) {
            this.$store.commit('isLoading', true)
            this.$store.commit('errorMessage', null)

            let routePath = this.fixPath(this.$route.path)
            let currentPath = this.$store.state.currentPath

            if (routePath && routePath == currentPath) {
                return
            }

            this.httpGet('browser', next)
                .then(({ data }) => {
                    if (!data.path) {
                        this.$store.commit('errorMessage', this.errors.path_not_found)
                        this.$store.commit('breadcrumbs', next)
                        return
                    }

                    let received = this.fixPath(data.path, false)

                    if (received != routePath) {
                        this.$router.push({ path: `/${received}` })
                    }

                    this.$store.commit('currentPath', received)
                    this.$store.commit('breadcrumbs', received)
                    this.$store.commit('entities', data.entities)

                })
                .catch(() => this.$store.commit('errorMessage', this.errors.path_not_found))
                .finally(() => this.$store.commit('isLoading', false))
        }
    }
}