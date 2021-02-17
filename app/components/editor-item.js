import Icon from './icon.js'

import { httpPost } from '../api/http-client.js'
import { commitError } from '../store/mixins.js'
import { toggle } from '../mixins.js'

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
    mixins: [commitError, httpPost, toggle],
    methods: {
        closeFile() {
            this.$store.commit('editorRemove', this.item)
        },
        saveFile() {
            this.httpPost('writer', this.item.path, this.item.content)
                .then(this.closeFile)
                .catch(this.commitError)
        }
    },
    template: `
        <div class="content">
            <div class="card">
                <div class="card-header">
                    <div class="card-header-title">
                        {{ item.path }}
                    </div>
                    <div class="card-header-icon">
                        <div class="buttons has-addons">
                            <button class="button is-ghost" @click="saveFile" v-if="item.isWritable">
                                <icon custom="fa-save"></icon>
                            </button>
                            <button class="button is-ghost" @click="toggle(editorId)">
                                <icon custom="fa-minus"></icon>
                            </button>
                            <button class="button is-ghost" @click="closeFile">
                                <icon custom="fa-times"></icon>
                            </button>
                        </div>
                    </div>
                </div>
                <div :id="editorId" class="card-content">
                    <div class="field"  style="height:100% !impotant">
                       <textarea  v-model="item.contents" class="textarea is-fullwidth is-small has-scroll" rows="16" placeholder="file empty" ></textarea>
                    </div>
                </div>
            </div>
        </div>`
}