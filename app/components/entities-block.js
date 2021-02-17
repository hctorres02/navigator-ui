import BreadcrumbBlock from './breadcrumb-block.js'
import FileItem from './file-item.js'
import FolderItem from './folder-item.js'
import Icon from './icon.js'

import { httpGet } from '../api/http-client.js'
import { commitError, commitCurrentPath, commitBreadcrumbs, commitEntities } from '../store/mixins.js'
import { toggle } from '../mixins.js'

export default {
    name: 'EntitiesBlock',
    components: { BreadcrumbBlock, FileItem, FolderItem, Icon },
    mixins: [commitError, commitCurrentPath, commitBreadcrumbs, commitEntities, httpGet, toggle],
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

            this.httpGet('browser', next)
                .then(({ path, entities }) => {
                    let received = this.fixPath(path)

                    if (received != routePath) {
                        this.$router.push({ path: `/${received}` })
                    }

                    this.commitCurrentPath(received)
                    this.commitBreadcrumbs(received)
                    this.commitEntities(entities)
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
                            <button class="button is-ghost" @click="toggle('stage'); compact('stage-container');">
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