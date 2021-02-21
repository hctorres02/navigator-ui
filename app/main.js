import router from './router.js'
import store from './store.js'

import EditorBlock from './components/editor-block.js'
import SidebarBlock from './components/sidebar-block.js'

import httpClient from './api/http-client.js'

new Vue({
    name: 'NavigatorUI',
    el: '#app',
    router,
    store,
    mixins: [httpClient],
    components: { EditorBlock, SidebarBlock },
    created() {
        let initialPath = window.location.hash.replace('#/', '')

        if (!initialPath) {
            initialPath = appConfig.home_dir
        }

        this.browserEntities(initialPath)
    },
    watch: {
        $route(to) {
            this.browserEntities(to.path)
        }
    },
    template: `
    <div class="">
        <nav class="navbar is-dark is-fixed-top">
            <div class="navbar-brand">
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="stage-container">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                </a>
            </div>
        </nav>
        <div class="is-flex is-flex-direction-row is-align-items-start has-custom-height has-scroll">
            <sidebar-block></sidebar-block>
            <editor-block></editor-block>
        </div>
    </div>
    `
})