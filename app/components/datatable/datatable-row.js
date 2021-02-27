import mixins from '../../mixins.js'
import DatatableRowDropdown from './datatable-row-dropdown.js'

const components = {
    DatatableRowDropdown
}

const props = {
    entity: { type: Object, required: true }
}
const methods = {
    ...Vuex.mapActions('editor', ['openFile'])
}

const DatatableRow = {
    name: 'DatatableRow',
    components,
    methods,
    mixins,
    props,
    computed: {
        fixedPath() {
            let fixed = this.fixPath(this.entity.path)
            return this.entity.isDir
                ? `/${fixed}`
                : fixed
        }
    },
    template: `
    <tr>
        <td class="is-1 has-text-centered">
            <input type="checkbox" class="checkbox">
        </td>
        <td class="is-6">
            <router-link
                v-if="entity.isDir"
                :to="fixedPath">
                {{ entity.name }}
            </router-link>
            <a v-else @click="openFile(entity)">
                {{ entity.name }}
            </a>
        </td>
        <td>
            {{ entity.isDir ? 'diretório' : 'arquivo' }}
        </td>
        <td class="is-hidden-touch">
            {{ (Math.random() * 100000).toFixed() }}
        </td>
        <td class="is-1 has-text-centered">
            <datatable-row-dropdown
                :id="entity.id"
                :isReadable="entity.isReadable"
                :isDownloadable="entity.isDownloadable" />
        </td>
    </tr>
    `
}

export default DatatableRow