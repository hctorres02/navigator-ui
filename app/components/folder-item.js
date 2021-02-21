import Icon from './icon.js'

import mixins from '../mixins.js'

export default {
    name: 'FolderItem',
    components: { Icon },
    props: {
        'item': { type: Object, required: true },
    },
    mixins: [mixins],
    computed: {
        icon() {
            return this.item.name == '..' ? 'fa-arrow-up' : this.item.isReadable ? 'fa-folder-o' : 'fa-ban'
        },
        path() {
            return `/${this.fixPath(this.item.path)}`
        },
        blocked() {
            return { 'has-text-danger': !this.item.isReadable }
        }
    },
    template: `
    <router-link :to="path" class="panel-block" :class="blocked">
        <icon :custom="icon" type="panel-icon"></icon>
        <span>{{ item.name }}</span>
    </router-link>`
}