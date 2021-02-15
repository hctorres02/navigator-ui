export default {
    name: 'Icon',
    props: {
        'custom': { type: String, required: true },
        'type': { type: String, required: false, default: 'icon' }
    },
    template: `
        <span :class="type">
            <i class="fa" :class="custom"></i>
        </span>`
}

