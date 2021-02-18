import router from './router.js'
import store from './store.js'

import EditorBlock from './components/editor-block.js'
import EntitiesBlock from './components/entities-block.js'

new Vue({
    name: 'NavigatorUI',
    el: '#app',
    router,
    store,
    components: { EditorBlock, EntitiesBlock },
    template: `
        <div class="p-4">
            <div class="columns is-multiline">
                <aside class="column">
                    <entities-block></entities-block>
                </aside>
                <main class="column is-7" v-if="!!$store.state.editor.length">
                    <editor-block></editor-block>
                </main>
            </div>
        </div>`
})