import mixins from '../mixins.js'

export default {
    name: 'BreadcrumbItem',
    props: {
        'item': { type: Object, required: true }
    },
    mixins,
    computed: {
        isActive() {
            return {
                'is-active': this.item.isActive
            }
        },
        path() {
            return `/${this.fixPath(this.item.path)}`
        }
    },
    template: `
        <li :class="isActive">
            <router-link :to="path">
                <span>{{ item.label }}</span>
            </router-link>
        </li>`
}