export default {
    name: 'MessageBox',
    props: {
        body: { type: String, required: true },
        type: { type: String, required: false, default: '' }
    },
    template: `
    <div class="message" :class="type">
        <div class="message-body">{{ body }}</div>
    </div>`
}