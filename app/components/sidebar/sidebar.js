import SidebarItem from './sidebar-item.js'

const components = {
    SidebarItem
}

const methods = {
    ...Vuex.mapActions([
        'closeSidebar'
    ])
}

const computed = {
    ...Vuex.mapGetters([
        'stateEditor'
    ])
}

export default {
    name: 'Sidebar',
    components,
    computed,
    methods,
    watch: {
        stateEditor() {
            if (this.stateEditor.length == 0) {
                this.closeSidebar()
            }
        }
    },
    template: `
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
            v-for="entity in stateEditor"
            :key="entity.id"
            :entity="entity">
        </sidebar-item>
    </div>
    `
}