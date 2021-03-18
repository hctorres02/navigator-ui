const actions = {}

const getters = {}

const mutations = {}

const state = function () {
    return {
        action: null,
        actions: app.browser_actions,
        selectedEntities: [],
        data: [],
        dirname: null,
        isWritable: false,
        path: null
    }
}

const browser = new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})

export default browser