import DatatableRow from './datatable-row.js'

export default {
    name: 'Datatable',
    components: { DatatableRow },
    computed: {
        ...Vuex.mapGetters([
            'stateData'
        ])
    },
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
            <datatable-row
                v-for="entity in stateData"
                :key="entity.id"
                :entity="entity"
            ></datatable-row>
        </tbody>
    </table>
    `
}