import Navbar from './components/navbar.js'
import Sidebar from './components/sidebar/sidebar.js'
import Searchbar from './components/searchbar.js'
import MessageBox from './components/message-box.js'
import Datatable from './components/datatable/datatable.js'

import router from './router.js'
import store from './store/store.js'
import mixins from './mixins.js'

const components = {
    Navbar,
    Sidebar,
    Searchbar,
    MessageBox,
    Datatable
}

const methods = {
    ...Vuex.mapActions({
        setData: 'datatable/setData',
        setError: 'message/setError'
    })
}

const computed = {
    ...Vuex.mapGetters('editor', ['isVisible'])
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
        let routePath = this.fixPath(this.$route.path)

        if (routePath != path) {
            this.$router.push(`/${path}`)
        }

        this.setData(path)
    },
    watch: {
        $route(to) {
            let path = this.fixPath(to.path)

            if (path) {
                this.setData(path)
            }
        }
    },
    template: `
    <div class="px-4">
        <header class="container block">
            <navbar></navbar>
        </header>
        <aside
            class="is-overlay is-fullheight has-scroll has-background-primary"
            :class="{ 'is-hidden': !isVisible }">
            <sidebar></sidebar>
        </aside>
        <main class="container">
            <searchbar></searchbar>
            <message-box></message-box>
            <datatable></datatable>
        </main>
    </div>
    `
})
