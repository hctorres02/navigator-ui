import Dropdown from '../dropdown.js'

const components = {
    Dropdown
}

const computed = {
    id() {
        return this.entity.id
    },
    isDownloadable() {
        return this.entity.isDownloadable
    },
    isReadable() {
        return this.entity.isReadable
    },
}

const props = {
    entity: { type: Object, required: true },
}

const DataRowDD = {
    name: 'DataRowDD',
    components,
    computed,
    props,
    template: `
    <dropdown :id="id" direction="is-up">
        <a class="dropdown-item pr-3">
            <span>Delete</span>
            <span class="icon">
                <i class="fa fa-trash"></i>
            </span>
        </a>
        <a class="dropdown-item pr-3" v-if="isDownloadable">
            <span>Download</span>
            <span class="icon">
                <i class="fa fa-download"></i>
            </span>
        </a>
    </dropdown>
    `
}

export default DataRowDD