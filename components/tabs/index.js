import NTab from './tab.js'

const components = {
    NTab
}

const template = `
    <div class="tabs">
        <ul>
            <n-tab
                v-for="tab in items"
                :key="tab.label"
                :tab="tab"
                @click="handleClick" />
        </ul>
    </div>
`

const data = function () {
    return {
        items: [
            {
                label: 'Browser',
                icon: 'hdd-o',
                active: true,
                component: 'browser'
            },
            {
                label: 'Editor',
                icon: 'list-alt',
                active: false,
                component: 'editor'
            },
        ]
    }
}

const methods = {
    handleClick(tab) {
        this.items.forEach(t => t.active = t == tab)
        this.$emit('click', tab.component)
    }
}

export default {
    name: 'n-tabs',
    template,
    components,
    data,
    methods
}