import { toast } from '../../mixins/index.js'
import { NButton } from '../index.js'

const components = {
    NButton
}

const template = `
    <div class="field has-addons">
        <div class="control is-expanded">
            <span class="select is-fullwidth">
                <select v-model="selected">
                    <option disabled selected :value="null">Actions</option>
                    <optgroup
                        v-for="group in actions"
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
                @click="handleClick" />
        </div>
    </div>
`

const data = function () {
    return {
        selected: null,
        actions: [
            {
                label: 'Clipboard',
                options: ['Copy', 'Cut', 'Paste']
            },
            {
                label: 'Organize',
                options: ['Rename', 'Delete']
            },
            {
                label: 'Transfer',
                options: ['Download (zipped)']
            }
        ]
    }
}

const computed = {
    ...Vuex.mapState([
        'clipboard'
    ])
}

const methods = {
    handleClick() {
        if (!this.clipboard.length) {
            toast({
                message: 'Select any entity!',
                type: 'is-warning'
            })
            return
        }

        if (!this.selected) {
            toast({
                message: 'Select an action!',
                type: 'is-warning'
            })
            return
        }

        toast({
            message: `${this.clipboard.length} entities prepared to <b>${this.selected}</b>`
        })

        this.selectedAction = null
    },
}

export default {
    name: 'browser-actions',
    components,
    template,
    data,
    computed,
    methods
}