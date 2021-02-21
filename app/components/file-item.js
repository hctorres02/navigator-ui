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

            if (!this.item.isReadable) {
                this.commitError('Can\'t open this file')
                return
            }

            this.httpGet(this.item.path)
                .then(this.commitOpenFile)
                .catch(this.commitError)
        }
    },
    computed: {
        blocked() {
            return { 'has-text-danger': !this.item.isReadable }
        },
        icon() {
            return this.item.isReadable ? 'fa-code' : 'fa-ban'
        }
    },
    template: `
    <a @click="openFile" class="panel-block" :class="blocked">
        <icon :custom="icon" type="panel-icon"></icon>
        <span>{{ item.name }}</span>
    </a>`
}