import { FixPath } from '../mixins.js'

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
        },
        path() {
            return `/${this.fixPath(this.item.path, false)}`
        }
    },
    mixins: [FixPath],
    template: `
        <li :class="isActive">
            <router-link :to="path">
                <span>{{ item.label }}</span>
            </router-link>
        </li>`
}