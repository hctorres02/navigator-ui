import { fixPath } from '../../mixins/index.js'

const template = `
    <tr>
        <td class="is-1">
            <input
                type="checkbox"
                :checked="entity.isSelected"
                @change="handleChange" />
        </td>
        <td>
            <a
                v-if="entity.isReadable"
                :href="fixedPath"
                @click.prevent="handleClick">
                {{ entity.name }}
            </a>
            <span v-else>
                {{ entity.name }}
            </span>
        </td>
        <td class="is-2 has-text-right">
            {{ entity.size }}
        </td>
    </tr>
`

const props = {
    entity: Object
}

const data = function () {
    return {
        fixedPath: fixPath(this.entity.path)
    }
}

const methods = {
    handleChange({ type, target }) {
        let payload = [{
            ...this.entity,
            isSelected: target.checked
        }]

        this.$emit(type, payload)
    },
    handleClick({ type }) {
        this.$emit(type, this.entity.path)
    },
}

export default {
    name: 'n-row',
    template,
    props,
    data,
    methods
}