import NRow from './row.js'

const components = {
    NRow
}

const template = `
    <table class="table is-hoverable is-fullwidth">
        <thead v-if="hasData">
            <tr>
                <th colspan="2">Filename</th>
                <th class="is-2 has-text-right">Size</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="!hasData">
                <td class="has-text-centered has-background-light">
                    No data
                </td>
            </tr>
            <n-row
                v-else
                v-for="entity in entities"
                :entity="entity"
                :key="entity.id"
                v-on="$listeners"
            />
        </tbody>
    </table>
`

const props = {
    entities: Array
}

const computed = {
    hasData() {
        return this.entities.length > 0
    }

}

export default {
    name: 'n-table',
    components,
    template,
    props,
    computed
}