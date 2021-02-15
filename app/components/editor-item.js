import Icon from './icon.js'
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
    mixins: [toggle],
    methods: {
        closeFile() {
            this.$store.commit('closeFile', this.item)
        },
        saveFile() {
            // TODO
            this.closeFile()
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
                            <a class="button" @click="saveFile" v-if="item.isWritable">
                                <icon custom="fa-save"></icon>
                            </a>
                            <a class="button" @click="toggle(editorId)">
                                <icon custom="fa-minus"></icon>
                            </a>
                            <a class="button" @click="closeFile">
                                <icon custom="fa-times"></icon>
                            </a>
                        </div>
                    </div>
                </div>
                <div :id="editorId" class="card-content">
                    <div class="field">
                       <textarea  v-model="item.contents" class="textarea is-fullwidth is-small has-scroll" rows="10" placeholder="file empty" ></textarea>
                    </div>
                </div>
            </div>
        </div>`
}