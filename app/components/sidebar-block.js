import FileItem from './file-item.js'
import FolderItem from './folder-item.js'
import Icon from './icon.js'

import mixins from '../mixins.js'

export default {
    name: 'SidebarBlock',
    components: { FileItem, FolderItem, Icon },
    mixins: [mixins],
    methods: {
        compact(element) {
            document.getElementById(element).classList.toggle('has-custom-height')
        }
    },
    computed: {
        directories() {
            return this.$store.state.entities.filter(el => el.isDir)
        },
        files() {
            return this.$store.state.entities.filter(el => !el.isDir)
        }
    },
    template: `
    <aside id="stage-container" class="is-flex-grow-0 navbar-menu has-custom-height">
        <div id="stage" class="panel has-scroll has-custom-height has-background-white">
            <folder-item
                v-for="item in directories"
                :key="'dir_' + item.name"
                :item="item"
            ></folder-item>
            <file-item
                v-for="item in files"
                :key="'file_' + item.name"
                :item="item"
            ></file-item>
        </div>
    </aside>
    `
}