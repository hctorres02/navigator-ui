import NRow from './row.js'

const components = {
    NRow
}

const template = `
    <table class="table is-hoverable is-fullwidth">
        <thead v-if="hasData">
            <tr>
                <th class="is-1">
                    <input
                        type="checkbox"
                        :checked="allChecked"
                        @change="handleChange" />
                </th>
                <th>
                    Filename
                </th>
                <th class="is-2 has-text-right">
                    Size
                </th>
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
                v-on="$listeners" />
        </tbody>
    </table>
`

const props = {
    entities: Array,
    allChecked: Boolean
}

const computed = {
    ...Vuex.mapGetters([
        'hasData'
    ])
}

const methods = {
    handleChange({ type, target }) {
        let payload = this.entities.map(e => {
            return {
                ...e,
                isSelected: target.checked
            }
        })

        this.$emit(type, payload)
    },
}

export default {
    name: 'n-table',
    components,
    template,
    props,
    computed,
    methods
}