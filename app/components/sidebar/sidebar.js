import SidebarItem from './sidebar-item.js'

const components = {
    SidebarItem
}

const computed = {
    ...Vuex.mapGetters({
        editorEntities: 'editor/entities',
        editorIsVisible: 'editor/isVisible'
    })
}

const methods = {
    ...Vuex.mapActions({
        closeSidebar: 'editor/hideEditor'
    })
}

const watch = {
    editorEntities() {
        if (this.editorEntities.length == 0) {
            this.closeSidebar()
        }
    }
}

const Sidebar = {
    name: 'Sidebar',
    components,
    computed,
    methods,
    watch,
    template: `
    <aside
        :class="{ 'is-hidden': !editorIsVisible}"
        class="has-custom-fullheight-2 has-scroll has-background-primary">
        <div class="px-4 pb-4">
            <button
                @click="closeSidebar"
                class="button is-black mb-4 is-pulled-right">
                <span class="icon">
                    <i class="fa fa-close"></i>
                </span>
            </button>
            <div class="is-clearfix"></div>
            <sidebar-item
                v-for="entity in editorEntities"
                :key="entity.id"
                :entity="entity">
            </sidebar-item>
        </div>
    </aside>
    `
}

export default Sidebar