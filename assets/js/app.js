import router from './router.js'
import BreadcrumbItem from './components/BreadcrumbItem.js'
import EditorBlock from './components/EditorBlock.js'
import FileItem from './components/FileItem.js'
import Icon from './components/Icon.js'

new Vue({
    el: '#app',
    router,
    components: {
        BreadcrumbItem,
        EditorBlock,
        FileItem,
        Icon,
    },
    data: {
        apiUrl: CONFIGS.apiUrl,
        isLoading: true,
        currentPath: null,
        lastPath: null,
        entities: [],
        editor: [],
        breadcrumbs: []
    },
    methods: {
        changePath(value) {
            this.currentPath = value
        },
        fetchData(params, callback) {
            this.isLoading = true
            axios.get(this.apiUrl, { params: params })
                .then(callback)
                .finally(() => this.isLoading = false)
        },
        browserEntities() {
            this.fetchData({
                mode: 'browser',
                path: this.currentPath
            }, this.fillStage)
        },
        viewFile(path) {
            let isOpen = !!this.editor.find(el => el.path == path)

            if (isOpen) {
                return
            }

            this.fetchData({
                mode: 'viewer',
                path: path
            }, this.fillEditor)
        },
        fillStage({ data }) {
            if (this.currentPath != data.path) {
                this.$router.push(data.path)
            }

            this.entities = data.entities
            this.directory_separator = data.directory_separator
            this.$refs.stage.scrollTop = 0

            this.changePath(data.path)

            document.title = `Navigator :: ${data.path}`

        },
        fillEditor({ data }) {
            this.editor.push(data)
        },
        saveEditor(index) {
            // TODO
            this.closeEditor(index)
        },
        closeEditor(index) {
            this.editor.splice(index, 1)
        },
        fillBreadcrumbs() {
            let DL = ':'
            let UDS = '/'
            let DS = this.directory_separator || '\\'
            let EMPTY = ''
            let items = this.currentPath.replaceAll(DS, UDS).split(UDS)

            this.breadcrumbs = items
                .filter(item => DS == item && EMPTY == item ? EMPTY : item)
                .map((item, index) => {
                    let path = items.slice(0, index + 1).join(DS)
                    return {
                        label: item == EMPTY ? DS : item,
                        path: item == DS ? DS : path.endsWith(DL) ? `${path}${DS}` : path
                    }
                })
        },
        toggle(target) {
            document.getElementById(target).classList.toggle('is-hidden')
        }
    },
    watch: {
        currentPath(newPath, oldPath) {
            this.fillBreadcrumbs()

            if (newPath && oldPath == '') {
                return
            }

            this.browserEntities()
        },
        $route(to, from) {
            this.changePath(to.params.path)
        }
    },
    mounted() {
        this.changePath(window.location.hash.replace('#/', ''))
    }
})