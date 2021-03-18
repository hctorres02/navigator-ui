import { NButton } from '../index.js'
import EditorItem from './editor-item.js'

const components = {
    NButton,
    EditorItem
}

const template = `
    <section class="box p-3">
        <div class="columns is-multiline">
            <div class="column is-12">
                <div class="field is-grouped is-grouped-right">
                    <div class="control">
                        <n-button icon="plus" @click="createFile">
                            Add empty file
                        </n-button>
                    </div>
                </div>
            </div>
            <editor-item
                v-for="entity in editor"
                :key="entity.id"
                :entity="entity" />
        </div>
    </section>
`

const computed = {
    ...Vuex.mapState([
        'editor'
    ])
}

const methods = {
    ...Vuex.mapActions([
        'createFile'
    ])
}

export default {
    name: 'editor',
    components,
    template,
    computed,
    methods
}