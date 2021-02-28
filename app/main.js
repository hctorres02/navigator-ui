import Navbar from './components/navbar.js'
import Sidebar from './components/sidebar/sidebar.js'
import Searchbar from './components/searchbar.js'
import MessageBox from './components/message-box.js'
import DataTable from './components/datatable/data-table.js'

import router from './router.js'
import store from './store/store.js'
import mixins from './mixins.js'

const components = {
    Navbar,
    Sidebar,
    Searchbar,
    MessageBox,
    DataTable
}

const computed = {
    ...Vuex.mapGetters({
        datatablePath: 'datatable/path',
        editorIsVisible: 'editor/isVisible'
    })
}

const methods = {
    ...Vuex.mapActions({
        datatableSetData: 'datatable/setData',
        messageSetError: 'message/setError'
    })
}

const watch = {
    $route(to) {
        let path = this.fixPath(to.path)

        if (path) {
            this.datatableSetData(path)
        }
    }
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
    watch,
    mounted() {
        let previousUri = window.location.hash.replace('#/', '')
        let path = this.fixPath(previousUri || appConfig.home_dir)
        let routePath = this.fixPath(this.$route.path)

        if (routePath != path) {
            this.$router.push(`/${path}`)
        }

        this.datatableSetData(path)
    },
    template: `
    <div class="is-mobile">
        <header class="has-background-primary">
            <navbar></navbar>
        </header>
        <sidebar v-if="editorIsVisible"></sidebar>
        <main v-else class="has-custom-fullheight-2 has-scroll px-3">
            <searchbar></searchbar>
            <message-box></message-box>
            <data-table></data-table>
        </main>
    </div>
    `
})
