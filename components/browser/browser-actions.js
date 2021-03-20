import { NButton, NSelect } from '../index.js'

const components = {
    NButton,
    NSelect
}

const template = `
    <div class="field has-addons">
        <div class="control is-expanded">
            <n-select
                :items="items"
                @change="handleChange" />
        </div>
        <div class="control">
            <n-button
                custom="is-outlined"
                icon="arrow-right"
                @click="handleClick" />
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
    handleChange(selected) {
        this.selected = selected
    },
    handleClick({ type }) {
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
    }
}

export default {
    name: 'browser-actions',
    components,
    template,
    props,
    data,
    methods
}