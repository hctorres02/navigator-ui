import EditorItem from './editor-item.js'

export default {
    name: 'EditorBlock',
    components: { EditorItem },
    template: `
    <main v-if="!!$store.state.editor.length" class="is-flex-grow-1 p-4">
        <editor-item
            v-for="(item, index) in $store.state.editor"
            :key="'editor:' + item.path"
            :item="item"
        ></editor-item>
    </main>`
}