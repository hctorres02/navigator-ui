import mixins from '../../mixins.js'
import DataRowDd from './data-row-dd.js'

const components = {
    DataRowDd
}

const computed = {
    fixedPath() {
        let fixed = this.fixPath(this.entity.path)
        return `/${fixed}`
    }
}

const methods = {
    ...Vuex.mapActions({
        editorOpenFile: 'editor/openFile'
    })
}

const props = {
    entity: { type: Object, required: true }
}

const DataRow = {
    name: 'DataRow',
    components,
    computed,
    methods,
    mixins,
    props,
    template: `
    <tr>
        <td class="is-1 has-text-centered">
            <input type="checkbox" class="checkbox">
        </td>
        <td class="is-6">
            <router-link v-if="entity.isDir" :to="fixedPath">
                {{ entity.name }}
            </router-link>
            <a v-else @click="editorOpenFile(entity)">
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
            <data-row-dd :entity="entity" />
        </td>
    </tr>
    `
}

export default DataRow