import router from './router.js'

import { FixPath, Errors } from './mixins.js'

import BreadcrumbItem from './components/BreadcrumbItem.js'
import EditorBlock from './components/EditorBlock.js'
import FileItem from './components/FileItem.js'
import FolderItem from './components/FolderItem.js'
import Icon from './components/Icon.js'
import MessageBox from './components/MessageBox.js'

new Vue({
    el: '#app',
    router,
    components: {
        BreadcrumbItem,
        EditorBlock,
        FileItem,
        FolderItem,
        Icon,
        MessageBox
    },
    data: {
        apiUrl: CONFIGS.apiUrl,
        breadcrumbs: [],
        currentPath: null,
        editor: [],
        entities: [],
        errors: Errors,
        errorMessage: null,
        isLoading: true
    },
    mixins: [FixPath],
    methods: {
        fetchData(params, callback) {
            this.isLoading = true
            this.errorMessage = null

            axios.get(this.apiUrl, { params })
                .then(({ data }) => callback(data))
                .catch(() => this.errorMessage = this.errors.request_failed)
                .finally(() => this.isLoading = false)
        },
        browserEntities(path) {
            let routePath = this.fixPath(this.$route.path)

            if (routePath && routePath == this.currentPath) {
                return
            }

            this.currentPath = path

            this.fetchData({
                mode: 'browser',
                path
            }, this.fillStage)
        },
        fillStage({ path, entities }) {
            if (!path) {
                this.errorMessage = this.errors.path_not_found
                return
            }

            this.currentPath = this.fixPath(path, false)
            this.entities = entities

            let routePath = this.fixPath(this.$route.path)

            if (routePath != this.currentPath) {
                this.$router.push({ path: `/${this.currentPath}` })
            }

        },
        viewFile(path) {
            let isOpen = !!this.editor.find(el => el.path == path)

            if (isOpen) {
                return
            }

            this.fetchData({
                mode: 'viewer',
                path
            }, data => this.editor.push(data))
        },
        saveEditor(index) {
            // TODO
            this.closeEditor(index)
        },
        closeEditor(index) {
            this.editor.splice(index, 1)
        },
        fillBreadcrumbs(path) {
            if (!path) {
                return
            }

            let SLASH = '/'
            let COLON = ':'
            let EMPTY = ''

            this.breadcrumbs = path.split(SLASH)
                .filter(item => item != EMPTY)
                .map((item, index, items) => {
                    let item_path = items.slice(0, index + 1).join(SLASH) || SLASH
                    return {
                        label: item == EMPTY ? SLASH : item,
                        path: item_path.endsWith(COLON) ? item_path + SLASH : item_path
                    }
                })
        },
        toggle(target) {
            document.getElementById(target).classList.toggle('is-hidden')
        }
    },
    watch: {
        currentPath(newPath) {
            this.fillBreadcrumbs(newPath)
            document.title = `Navigator :: ${newPath}`
        },
        entities() {
            document.getElementById('stage').scrollTop = 0
        },
        $route(to) {
            let toPath = this.fixPath(to.path)

            this.browserEntities(toPath)
        }
    },
    mounted() {
        let initialPath = window.location.hash.replace('#', '')
        initialPath = this.fixPath(initialPath)

        this.browserEntities(initialPath)
    }
})