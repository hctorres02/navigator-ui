import Icon from './icon.js'

import httpClient from '../api/http-client.js'

export default {
    name: 'EditorItem',
    components: { Icon },
    props: {
        'item': { type: Object, required: true },
    },
    computed: {
        editorId() {
            return `editor-content-${this.item.path}`
        }
    },
    mixins: [httpClient],
    methods: {
        closeFile() {
            this.commitCloseFile(this.item)
        },
        downloadFile() {
            let url = new URL(appConfig.api_url)
            url.pathname += this.fixPath(this.item.path, false)
            url.searchParams.set('download', true)

            window.open(url, '_self')
        },
        saveFile() {
            this.httpPut(this.item)
                .then(() => this.commitSuccess(`'${this.item.path}' was saved!`))
                .catch(this.commitError)
        }
    },
    template: `
    <div class="block">
        <div class="card">
            <div class="card-header">
                <div class="card-header-title">
                    {{ item.path }}
                </div>
                <div class="card-header-icon">
                    <div class="buttons has-addons">
                        <button class="button is-white" @click="downloadFile" v-if="item.isDownloadable">
                            <icon custom="fa-download"></icon>
                        </button>
                        <button class="button is-white" @click="saveFile" v-if="item.isWritable">
                            <icon custom="fa-save"></icon>
                        </button>
                        <button class="button is-white" @click="toggle(editorId)">
                            <icon custom="fa-minus"></icon>
                        </button>
                        <button class="button is-white" @click="closeFile">
                            <icon custom="fa-times"></icon>
                        </button>
                    </div>
                </div>
            </div>
            <div :id="editorId" class="card-content">
                <div class="field"  style="height:100% !impotant">
                    <textarea  v-model="item.data" class="textarea is-fullwidth is-small has-scroll" rows="16" placeholder="file empty"></textarea>
                </div>
            </div>
        </div>
    </div>`
}