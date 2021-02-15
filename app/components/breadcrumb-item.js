import { fixPath } from '../mixins.js'

export default {
    name: 'BreadcrumbItem',
    props: {
        'item': { type: Object, required: true }
    },
    computed: {
        isActive() {
            return {
                'is-active': this.item.isActive
            }
        },
        path() {
            return `/${this.fixPath(this.item.path, false)}`
        }
    },
    mixins: [fixPath],
    template: `
        <li :class="isActive">
            <router-link :to="path">
                <span>{{ item.label }}</span>
            </router-link>
        </li>`
}