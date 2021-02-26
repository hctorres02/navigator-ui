import Navbar from './components/navbar.js'
import Sidebar from './components/sidebar/sidebar.js'
import Searchbar from './components/searchbar.js'
import Datatable from './components/datatable/datatable.js'

import router from './router.js'
import store from './store/store.js'
import mixins from './mixins.js'

const components = {
    Navbar,
    Sidebar,
    Searchbar,
    Datatable
}

const methods = {
    ...Vuex.mapActions([
        'setState', 'setMessage'
    ])
}

const computed = {
    ...Vuex.mapGetters([
        'stateErrors', 'stateIsSidebarOpen'
    ])
}

new Vue({
    name: 'Navigator',
    el: '#app',
    router,
    store,
    components,
    computed,
    methods,
    mixins,
    mounted() {
        let previousUri = window.location.hash.replace('#/', '')
        let path = this.fixPath(previousUri || appConfig.home_dir)

        this.setState(path)
    },
    watch: {
        $route(to) {
            let path = this.fixPath(to.path)

            if (path) {
                this.setState(path)
            }
        }
    },
    template: `
    <div class="px-4">
        <header class="container mb-6">
            <navbar></navbar>
        </header>
        <aside
            class="is-overlay is-fullheight has-scroll has-background-primary"
            :class="{ 'is-hidden': !stateIsSidebarOpen }">
            <sidebar></sidebar>
        </aside>
        <main class="container">
            <searchbar></searchbar>

            <div
                v-for="message in stateErrors"
                :key="message.path"
                class="message">
                <div class="message-body">
                    <p>{{ message.status }} - {{ message.statusText }}</p>
                    <p></p>
                </div>
            </div>

            <datatable></datatable>
        </main>
    </div>
    `
})
