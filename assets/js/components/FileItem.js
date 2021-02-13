import Icon from './Icon.js'

export default {
    name: 'FileItem',
    components: { Icon },
    props: {
        'item': { type: Object, required: true },
    },
    template: `
        <a class="panel-block" @click="$emit('view-file', item.path)">
            <icon custom="fa-code" type="panel-icon"></icon>
            <span>{{ item.name }}</span>
        </a>`
}