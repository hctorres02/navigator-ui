export default {
    name: 'MessageBox',
    props: {
        type: { type: String, default: '' }
    },
    template: `
    <div class="panel-block" :class="type">
        <slot></slot>
    </div>`
}