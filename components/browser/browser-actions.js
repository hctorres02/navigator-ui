import { NButton } from '../index.js'

const components = {
    NButton
}

const template = `
    <div class="field has-addons">
        <div class="control is-expanded">
            <span class="select is-fullwidth">
                <select v-model="selected">
                    <option disabled selected :value="null">
                        Actions
                    </option>
                    <optgroup
                        v-for="group in items"
                        :key="group.label"
                        :label="group.label">
                        <option
                            v-for="option in group.options"
                            :key="option">
                            {{ option }}
                        </option>
                    </optgroup>
                </select>
            </span>
        </div>
        <div class="control">
            <n-button
                custom="is-outlined"
                icon="arrow-right"
                @click="handleClick"
            />
        </div>
    </div>
`

const props = {
    clipboard: Array
}

const data = function () {
    return {
        selected: null,
        items: [
            {
                label: 'Clipboard',
                options: ['Cut', 'Paste']
            },
            {
                label: 'Organize',
                options: ['Rename', 'Delete']
            },
            {
                label: 'Transfer',
                options: ['Download']
            }
        ]
    }
}

const methods = {
    handleClick() {
        let type = 'click'

        if (!this.clipboard.length) {
            this.$emit(type, {
                message: 'Select any entity!',
                type: 'is-warning'
            })
            return
        }

        if (!this.selected) {
            this.$emit(type, {
                message: 'Select an action!',
                type: 'is-warning'
            })
            return
        }

        this.$emit(type, {
            selected: this.selected,
            message: `${this.clipboard.length} entities prepared to <b>${this.selected}</b>`
        })

        this.selected = null
    },
}

export default {
    name: 'browser-actions',
    components,
    template,
    props,
    data,
    methods
}