export default new Vuex.Store({
    name: 'store',
    state: {
        currentPath: null,
        editor: [],
        entities: [],
        errorMessage: null,
        successMessage: null,
        isLoading: true
    },
    mutations: {
        entities(state, value) {
            state.entities = value
        },
        currentPath(state, value) {
            state.currentPath = value
        },
        closeFile(state, value) {
            state.editor = state.editor.filter(el => el != value)
        },
        openFile(state, value) {
            state.editor.push(value)
        },
        errorMessage(state, value) {
            state.errorMessage = value
        },
        successMessage(state, value) {
            state.successMessage = value
        },
        isLoading(state, value) {
            state.isLoading = value
        }
    }
})