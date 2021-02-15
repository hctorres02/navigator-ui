import { toggle } from '../mixins.js'

import BreadcrumbBlock from './breadcrumb-block.js'
import FileItem from './file-item.js'
import FolderItem from './folder-item.js'
import Icon from './icon.js'
import MessageBox from './message-box.js'

export default {
    name: 'EntitiesBlock',
    components: {
        BreadcrumbBlock,
        FileItem,
        FolderItem,
        Icon,
        MessageBox
    },
    mixins: [toggle],
    template: `
        <div class="card has-custom-height">
            <div class="card-header">
                <div class="card-header-title">
                    <breadcrumb-block></breadcrumb-block>
                </div>
                <div class="card-header-icon">
                    <button class="button" @click="toggle('stage')">
                        <icon v-if="$store.state.isLoading" custom="fa-spinner fa-spin"></icon>
                        <icon v-else custom="fa-chevron-up"></icon>
                    </button>
                </div>
            </div>
            <message-box v-if="$store.state.errorMessage" :body="$store.state.errorMessage" type="is-danger"></message-box>
            <div v-else id="stage" class="panel has-scroll">
                <folder-item v-for="(item, index) in $store.state.entities.dir" :key="'folder_' + item.path + '_' + index" :item="item" ></folder-item>
                <file-item v-for="item in $store.state.entities.file" :key="'file_' + item.path" :item="item" ></file-item>
            </div>
        </div>`
}