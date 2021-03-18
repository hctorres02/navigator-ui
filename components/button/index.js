import { NIcon } from '../index.js'

const template = `
    <component class="button" :is="tag" :class="custom" v-on="$listeners">
        <n-icon v-if="icon" :icon="icon" />
        <span v-if="$slots.default">
            <slot />
        </span>
    </component>
`

const props = {
    tag: {
        type: String,
        default: 'button'
    },
    custom: String,
    icon: String
}

const components = {
    NIcon
}

export default {
    name: 'n-button',
    template,
    props,
    components
}