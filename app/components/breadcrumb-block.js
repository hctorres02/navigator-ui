import BreadcrumbItem from './breadcrumb-item.js'

export default {
    name: 'BreadcrumbBlock',
    components: { BreadcrumbItem },
    template: `
        <nav class="breadcrumb">
            <ul>
                <breadcrumb-item
                    v-for="item in this.$store.state.breadcrumbs"
                    :key="'breadcrumb_' + item.path"
                    :item="item"></breadcrumb-item>
            </ul>
        </nav>`
}