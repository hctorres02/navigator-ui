import Dropdown from '../dropdown.js'

const DatatableRowDropdown = {
    name: 'DatatableRowDropdown',
    components: { Dropdown },
    props: {
        id: { type: String, required: true },
        isReadable: { type: Boolean, required: true },
        isDownloadable: { type: Boolean, required: true }
    },
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

export default DatatableRowDropdown