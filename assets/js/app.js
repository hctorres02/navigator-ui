import router from './router.js'

import { FixPath } from './mixins.js'

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
        errorMessage: null,
        errors: {
            path_not_found: 'path not found',
            request_failed: 'failed to request server API'
        },
        hasError: false,
        isLoading: true
    },
    mixins: [FixPath],
    methods: {
        changePath(value) {
            this.currentPath = this.fixPath(value)
        },
        async fetchData(params) {
            this.isLoading = true
            this.errorMessage = null

            return await axios
                .get(this.apiUrl, { params })
                .then(({ data }) => data)
                .catch(() => this.errorMessage = this.errors.request_failed)
                .finally(() => this.isLoading = false)
        },
        browserEntities() {
            this.fetchData({
                mode: 'browser',
                path: this.currentPath
            }).then(({ path, entities }) => {
                this.changePath(path)
                this.fillBreadcrumbs()

                if (!path) {
                    this.errorMessage = this.errors.path_not_found
                    return
                }

                if (this.currentPath != this.fixPath(this.$route.path)) {
                    router.push(this.currentPath)
                }

                this.entities = entities
                this.$refs.stage.scrollTop = 0

                document.title = `Navigator :: ${path}`
            })
        },
        viewFile(path) {
            let isOpen = !!this.editor.find(el => el.path == path)

            if (isOpen) {
                return
            }

            this.fetchData({
                mode: 'viewer',
                path
            }).then(data => this.editor.push(data))
        },
        saveEditor(index) {
            // TODO
            this.closeEditor(index)
        },
        closeEditor(index) {
            this.editor.splice(index, 1)
        },
        fillBreadcrumbs() {
            if (!this.currentPath) {
                return
            }

            let SLASH = '/'
            let COLON = ':'
            let EMPTY = ''

            this.breadcrumbs = this.currentPath
                .split(SLASH)
                .filter(item => item != EMPTY)
                .map((item, index, items) => {
                    let path = items.slice(0, index + 1).join(SLASH) || SLASH
                    return {
                        label: item == EMPTY ? SLASH : item,
                        path: path.endsWith(COLON) ? path + SLASH : path
                    }
                })
        },
        toggle(target) {
            document.getElementById(target).classList.toggle('is-hidden')
        }
    },
    watch: {
        $route(to) {
            this.changePath(to.path)
            this.browserEntities()
        }
    },
    mounted() {
        let initialPath = window.location.hash.replace('#', '')

        console.log(router)

        this.changePath(initialPath)
        this.browserEntities()
    }
})