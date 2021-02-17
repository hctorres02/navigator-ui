import Icon from './icon.js'

import { httpGet } from '../api/http-client.js'
import { errors } from '../mixins.js'

export default {
    name: 'FileItem',
    components: { Icon },
    props: {
        'item': { type: Object, required: true },
    },
    mixins: [errors, httpGet],
    methods: {
        openFile() {
            let isOpen = !!this.$store.state.editor.find(el => el.path == this.item.path)

            if (isOpen) {
                return
            }

            this.httpGet('viewer', this.item.path)
                .then(data => this.$store.commit('editorAdd', data))
                .catch(error => this.$store.commit('error', error.response.data))
        }
    },
    template: `
        <a class="panel-block" @click="openFile">
            <icon custom="fa-code" type="panel-icon"></icon>
            <span>{{ item.name }}</span>
        </a>`
}