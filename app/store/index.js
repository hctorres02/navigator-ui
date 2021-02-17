import mutations from './mutations.js'

export default new Vuex.Store({
    name: 'store',
    state: {
        breadcrumbs: [],
        currentPath: null,
        editor: [],
        entities: [],
        error: [],
        isLoading: true
    },
    mutations
})