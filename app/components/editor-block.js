import EditorItem from './editor-item.js'

export default {
    name: 'EditorBlock',
    components: { EditorItem },
    template: `
        <div>
            <editor-item
                v-for="(item, index) in $store.state.editor"
                :key="'editor:' + item.path"
                :item="item"
            ></editor-item>
        </div>`
}