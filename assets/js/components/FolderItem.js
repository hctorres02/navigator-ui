import { FixPath } from '../mixins.js'

import Icon from './Icon.js'

export default {
    name: 'FolderItem',
    components: { Icon },
    props: {
        'item': { type: Object, required: true },
    },
    mixins: [FixPath],
    computed: {
        icon() {
            return this.item.name == '..' ? 'fa-arrow-up' : 'fa-folder-o'
        },
        path() {
            return `/${this.fixPath(this.item.path, false)}`
        }
    },
    template: `
        <router-link :to="path" class="panel-block">
            <icon :custom="icon" type="panel-icon"></icon>
            <span>{{ item.name }}</span>
        </router-link>`
}