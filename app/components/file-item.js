import Icon from './icon.js'

import httpClient from '../api/http-client.js'

export default {
    name: 'FileItem',
    components: { Icon },
    props: {
        'item': { type: Object, required: true },
    },
    mixins: [httpClient],
    methods: {
        openFile() {
            if (this.fileIsOpen(this.item.path)) {
                return;
            }

            this.httpGet(this.item.path)
                .then(this.commitOpenFile)
                .catch(this.commitError)
        }
    },
    template: `
        <a class="panel-block" @click="openFile">
            <icon custom="fa-code" type="panel-icon"></icon>
            <span>{{ item.name }}</span>
        </a>`
}