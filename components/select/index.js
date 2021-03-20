const template = `
    <span class="select is-fullwidth">
        <select
            v-model="selected"
            @change="handleChange">
            <option disabled selected :value="null">
                Actions
            </option>
            <optgroup
                v-for="group in items"
                :key="group.label"
                :label="group.label">
                <option
                    v-for="option in group.options"
                    :key="option"
                    :value="option">
                    {{ option }}
                </option>
            </optgroup>
        </select>
    </span>
`

const props = {
    items: Array
}

const data = function () {
    return {
        selected: null
    }
}

const methods = {
    handleChange({ type }) {
        this.$emit(type, this.selected)
    }
}

export default {
    name: 'n-select',
    template,
    props,
    data,
    methods
}