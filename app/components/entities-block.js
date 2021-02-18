import FileItem from './file-item.js'
import FolderItem from './folder-item.js'
import Icon from './icon.js'

import httpClient from '../api/http-client.js'

export default {
    name: 'EntitiesBlock',
    components: { FileItem, FolderItem, Icon },
    mixins: [httpClient],
    created() {
        let initialPath = window.location.hash.replace('#/', '')

        if (!initialPath) {
            initialPath = appConfig.home_dir
        }

        this.browserEntities(initialPath)
    },
    watch: {
        $route(to) {
            this.browserEntities(to.path)
        }
    },
    methods: {
        browserEntities(next) {
            let routePath = this.fixPath(this.$route.path)
            let currentPath = this.$store.state.currentPath

            if (routePath && routePath == currentPath) {
                return
            }

            this.httpGet(next)
                .then(data => {
                    if (!data.isDir) {
                        this.commitOpenFile(data)
                        this.browserEntities(data.dirname)
                        return;
                    }

                    let received = this.fixPath(data.path)

                    if (received != routePath) {
                        this.$router.push({ path: `/${received}` })
                    }

                    this.commitCurrentPath(received)
                    this.commitEntities(data.data)
                })
                .catch(this.commitError)
        },
        compact(element) {
            document.getElementById(element).classList.toggle('has-custom-height')
        }
    },
    template: `
        <div id="stage-container" class="card has-custom-height">
            <header class="card-header">
                <div class="card-header-title">
                    {{ $store.state.currentPath }}
               </div>
                <div class="card-header-icon">
                    <div class="field has-addons">
                        <div class="control">
                            <button class="button is-white" @click="toggle('stage'); compact('stage-container');">
                                <icon custom="fa-chevron-up"></icon>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div id="stage" class="panel has-scroll">
                <folder-item v-for="(item, index) in $store.state.entities.dir" :key="'folder_' + item.path + '_' + index" :item="item" ></folder-item>
                <file-item v-for="item in $store.state.entities.file" :key="'file_' + item.path" :item="item" ></file-item>
            </div>
        </div>`
}