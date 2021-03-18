const actions = {}

const getters = {}

const mutations = {}

const state = function () {
    return {
        items: [
            {
                label: 'Browser',
                icon: 'hdd-o',
                isActive: true,
                target: 'browser'
            },
            {
                label: 'Editor',
                icon: 'list-alt',
                isActive: false,
                target: 'editor'
            },
            {
                label: 'Clipboard',
                icon: 'clipboard',
                isActive: false,
                target: 'clipboard'
            }
        ]
    }
}

const tabs = new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})

export default tabs