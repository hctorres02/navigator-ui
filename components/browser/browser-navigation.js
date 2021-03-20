import { NButton } from '../index.js'

const components = {
    NButton
}

const template = `
    <div class="field has-addons">
        <div class="control is-expanded">
            <input
                type="text"
                class="input"
                :value="path"
                readonly
            />
        </div>
        <div class="control">
            <n-button
                icon="refresh"
                custom="is-outlined"
                @click="handleClick(path)"
            />
        </div>
        <div class="control">
            <n-button
                icon="level-up"
                custom="is-outlined"
                :disabled="!hasLevelUp"
                @click="handleClick(dirname)"
            />
        </div>
    </div>
`

const props = {
    path: String,
    dirname: String
}

const computed = {
    hasLevelUp() {
        return this.path != this.dirname
    }
}

const methods = {
    handleClick(value) {
        this.$emit('click', value)
    }
}

export default {
    name: 'browser-navigation',
    components,
    template,
    props,
    computed,
    methods
}