import { NButton } from '../index.js'

const components = {
    NButton
}

const template = `
    <div class="column is-12">
        <div class="field has-addons mb-0">
            <div class="control is-expanded">
                <input type="text" class="input" placeholder="Filename" :value="entity.path">
            </div>
            <div class="control">
                <n-button custom="is-outlined" icon="save" @click="saveFile(entity)" />
            </div>
            <div class="control">
                <n-button custom="is-outlined" icon="minus" @click="collapse(entity.id)" />
            </div>
            <div class="control">
                <n-button custom="is-outlined" icon="close" @click="closeFile(entity.id)" />
            </div>
        </div>
        <div class="field mt-3" :id="entity.id">
            <div class="control">
                <textarea class="textarea" rows="12" v-model="entity.data"></textarea>
            </div>
        </div>
    </div>
`

const props = {
    entity: Object
}

const methods = {
    ...Vuex.mapActions([
        'closeFile', 'saveFile'
    ]),
    collapse(id) {
        document.getElementById(id).classList.toggle('is-hidden')
    },
}

export default {
    name: 'editor-item',
    components,
    template,
    props,
    methods
}