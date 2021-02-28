import mixins from '../mixins.js'
import SearchbarDropdown from './searchbar-dropdown.js'

const components = {
    SearchbarDropdown
}

const computed = {
    ...Vuex.mapGetters({
        path: 'datatable/path',
        isWritable: 'datatable/isWritable',
        editorEntities: 'editor/entities'
    }),
}

const methods = {
    ...Vuex.mapActions({
        setData: 'datatable/setData',
        showEditor: 'editor/showEditor'
    }),
}

const Searchbar = {
    name: 'Searchbar',
    components,
    mixins,
    data() {
        return {
            homeDir: `/${appConfig.home_dir}`,
            searchPath: this.fixPath(this.$route.path)
        }
    },
    computed,
    methods,
    template: `
    <section class="block">
        <div class="field is-grouped">
            <div class="control">
                <router-link :to="homeDir" class="button">
                    <span class="icon">
                        <i class="fa fa-home"></i>
                    </span>
                </router-link>
            </div>
            <div class="control is-expanded">
                <input v-model="searchPath" type="text" class="input">
            </div>
            <div class="control">
                <button class="button" @click="setData(searchPath)">
                    <span class="icon">
                        <i class="fa fa-search"></i>
                    </span>
                </button>
            </div>
            <div class="control" :v-if="isWritable">
                <searchbar-dropdown />
            </div>
            <div class="control">
                <button class="button" @click="showEditor" :disabled="!editorEntities.length">
                    <span class="icon">
                        <i class="fa fa-bars"></i>
                    </span>
                </button>
            </div>
        </div>
    </section>
    `
}

export default Searchbar