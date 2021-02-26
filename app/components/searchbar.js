import SearchbarDropdown from './searchbar-dropdown.js'

export default {
    name: 'Searchbar',
    components: { SearchbarDropdown },
    computed: {
        ...Vuex.mapGetters([
            'statePath', 'stateIsWritable'
        ])
    },
    template: `
    <section class="mb-3">
        <div class="field is-grouped">
            <div class="control is-expanded">
                <input type="text" class="input" :value="statePath">
            </div>
            <div class="control">
                <button class="button">
                    <span class="icon">
                        <i class="fa fa-search"></i>
                    </span>
                </button>
            </div>
            <div class="control" :v-if="stateIsWritable">
                <searchbar-dropdown />
            </div>
        </div>
    </section>
    `
}