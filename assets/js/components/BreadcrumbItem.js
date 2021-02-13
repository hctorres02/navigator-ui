export default {
    name: 'BreadcrumbItem',
    props: {
        'item': { type: Object, required: true },
        'current-path': { type: String | null, required: true }
    },
    computed: {
        isActive() {
            return {
                'is-active': this.item.path == this.currentPath
            }
        }
    },
    template: `
        <li :class="isActive">
            <router-link :to="item.path">
                <span>{{ item.label }}</span>
            </router-link>
        </li>`
}