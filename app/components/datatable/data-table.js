import DataRow from './data-row.js'

const components = {
    DataRow
}

const computed = {
    ...Vuex.mapGetters({
        entities: 'datatable/data'
    })
}

const DataTable = {
    name: 'DataTable',
    components,
    computed,
    template: `
    <table class="table is-fullwidth is-hoverable mb-6">
        <thead>
            <tr>
                <th class="is-1 has-text-centered">
                    <input type="checkbox" class="checkbox">
                </th>
                <th class="is-6">
                    Name
                </th>
                <th class="is-2">
                    Type
                </th>
                <th class="is-2 is-hidden-touch">
                    Size
                </th>
                <th class="1">
                    &nbsp;
                </th>
            </tr>
        </thead>
        <tbody>
            <data-row
                v-for="entity in entities"
                :key="entity.id"
                :entity="entity"
            ></data-row>
        </tbody>
    </table>
    `
}

export default DataTable