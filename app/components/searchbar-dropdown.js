import Dropdown from './dropdown.js'
import mixins from '../mixins.js'

const components = {
    Dropdown
}

const computed = {
    ...Vuex.mapGetters([
        'isWritable'
    ])
}

const SearchbarDropdown = {
    name: 'SearchbarDropdown',
    components,
    computed,
    mixins,
    template: `
    <dropdown
        id="search"
        :isButton="true">
        <a class="dropdown-item pr-3">
            <span>Upload file</span>
            <span class="icon">
                <i class="fa fa-upload"></i>
            </span>
        </a>
        <a class="dropdown-item pr-3" @click="">
            <span>Create file</span>
            <span class="icon">
                <i class="fa fa-file"></i>
            </span>
        </a>
        <a class="dropdown-item pr-3">
            <span>Create folder</span>
            <span class="icon">
                <i class="fa fa-folder"></i>
            </span>
        </a>
    </dropdown>
    `
}

export default SearchbarDropdown