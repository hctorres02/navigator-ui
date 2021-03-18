import { fixPath } from '../../mixins/index.js'

const template = `
    <tr>
        <td class="is-1">
            <input
                type="checkbox"
                :value="entity.path"
                @change="handleChange">
        </td>
        <td>
            <a
                v-if="entity.isReadable"
                :href="fixedPath"
                :data-path="entity.path"
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
        this.$emit(type, {
            path: target.value,
            checked: target.checked
        })
    },
    handleClick({ type, target }) {
        this.$emit(type, target.dataset.path)
    },
}

export default {
    name: 'n-row',
    template,
    props,
    data,
    methods
}