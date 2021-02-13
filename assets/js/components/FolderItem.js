import Icon from './Icon.js'

export default {
    name: 'FolderItem',
    components: { Icon },
    props: {
        'item': { type: Object, required: true },
    },
    computed: {
        icon() {
            return this.item.name == '..' ? 'fa-level-up' : 'fa-folder-o'
        }
    },
    template: `
        <a class="panel-block" @click="$emit(item.action, item.path)">
            <icon :custom="icon" type="panel-icon"></icon>
            <span>{{ item.name }}</span>
        </a>`
}