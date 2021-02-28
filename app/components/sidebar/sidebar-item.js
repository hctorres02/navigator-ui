import mixins from '../../mixins.js'

const props = {
    entity: { type: Object, required: true }
}

const methods = {
    ...Vuex.mapActions({
        editorCloseFile: 'editor/closeFile'
    })
}

export default {
    name: 'SidebarItem',
    methods,
    mixins,
    props,
    data() {
        return {
            editorId: `editor_${this.entity.id}`
        }
    },
    template: `
    <div class="box p-3">
        <div class="field is-grouped">
            <div class="control is-expanded">
                <input class="input" type="text" :value="entity.path" disabled>
            </div>
            <div class="control">
                <button class="button">
                    <span class="icon"><i class="fa fa-save"></i></span>
                </button>
            </div>
            <div class="control">
                <button @click="toggle(editorId, 'is-hidden')" class="button">
                    <span class="icon"><i class="fa fa-window-minimize"></i></span>
                </button>
            </div>
            <div class="control">
                <button class="button" @click="editorCloseFile(entity.id)">
                    <span class="icon"><i class="fa fa-close"></i></span>
                </button>
            </div>
        </div>
        <div :id="editorId" class="field">
            <div class="control">
                <textarea
                    class="textarea"
                    rows="12"
                    placeholder="Textarea"
                    v-model="entity.data"></textarea>
            </div>
        </div>
    </div>
    `
}