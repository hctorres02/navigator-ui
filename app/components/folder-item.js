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
            return this.item.name == '..' ? 'fa-arrow-up' : 'fa-folder-o'
        },
        path() {
            return `/${this.fixPath(this.item.path)}`
        }
    },
    template: `
        <router-link :to="path" class="panel-block">
            <icon :custom="icon" type="panel-icon"></icon>
            <span>{{ item.name }}</span>
        </router-link>`
}