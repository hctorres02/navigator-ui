import Icon from './icon.js'

import { editorClient } from '../api/editor-client.js'

export default {
    name: 'FileItem',
    components: { Icon },
    props: {
        'item': { type: Object, required: true },
    },
    mixins: [editorClient],
    methods: {
        open() {
            let isOpen = !!this.$store.state.editor.find(el => el == this.item)

            if (isOpen) {
                return
            }

            this.openFile(this.item.path)
        }
    },
    template: `
        <a class="panel-block" @click="open()">
            <icon custom="fa-code" type="panel-icon"></icon>
            <span>{{ item.name }}</span>
        </a>`
}