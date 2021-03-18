import { NIcon } from '../index.js'

const components = {
    NIcon
}

const template = `
    <li :class="{'is-active': tab.active}">
        <a :href="tab.target" @click.prevent="handleClick">
            <n-icon :icon="tab.icon" />
            <span>{{ tab.label }}</span>
        </a>
    </li>
`

const props = {
    tab: Object
}

const methods = {
    handleClick() {
        this.$emit('click', this.tab)
    }
}

export default {
    name: 'n-tab',
    components,
    template,
    props,
    methods
}