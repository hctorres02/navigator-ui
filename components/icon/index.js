const template = `
    <span class="icon" :class="styles">
        <i class="fa" :class="faIcon"></i>
    </span>
`

const props = {
    icon: String,
    styles: String
}

const computed = {
    faIcon() {
        return `fa-${this.icon}`
    }
}

export default {
    name: 'n-icon',
    template,
    props,
    computed
}