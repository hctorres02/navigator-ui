import router from './router.js'
import store from './store.js'

import { entitiesClient } from './api/entities-client.js'
import { errors, fixPath } from './mixins.js'

import EditorBlock from './components/editor-block.js'
import EntitiesBlock from './components/entities-block.js'

new Vue({
    name: 'NavigatorUI',
    el: '#app',
    router,
    store,
    data: {
        lastPath: null
    },
    components: {
        EditorBlock,
        EntitiesBlock
    },
    mixins: [entitiesClient, fixPath],
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                let toPath = this.fixPath(to.path)
                this.browserEntities(toPath)
            }
        }
    },
    mounted() {
        let initialPath = window.location.hash.replace('#', '')
        initialPath = this.fixPath(initialPath)

        this.browserEntities(initialPath)
    },
})