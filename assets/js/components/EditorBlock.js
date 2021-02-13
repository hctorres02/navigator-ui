import Icon from './Icon.js'

export default {
    name: 'EditorBlock',
    components: { Icon },
    props: {
        'item': { type: Object, required: true },
    },
    computed: {
        editorId() {
            return `editor-content-${this.item.index}`
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
                            <a class="button" @click="$emit('save-editor', item.index)" v-if="item.isWritable">
                                <icon custom="fa-save"></icon>
                            </a>
                            <a class="button" @click="$emit('toggle', editorId)">
                                <icon custom="fa-minus"></icon>
                            </a>
                            <a class="button" @click="$emit('close-editor', item.index)">
                                <icon custom="fa-times"></icon>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-content" :id="editorId">
                    <div class="field">
                    <textarea class="textarea is-fullwidth is-small has-scroll" rows="10" v-model="item.contents" placeholder="file empty"></textarea>
                    </div>
                    <div class="field is-grouped is-grouped-right">
                        <div class="control">
                        </div>
                        <div class="control">
                        </div>
                    </div>
                </div>
            </div>
        </div>`
}