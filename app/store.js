import { generateBreadcrumbs } from './store-mixins.js'

export default new Vuex.Store({
    name: 'store',
    state: {
        breadcrumbs: [],
        currentPath: null,
        editor: [],
        entities: [],
        errorMessage: null,
        isLoading: true
    },
    mutations: {
        breadcrumbs(state, value) {
            state.breadcrumbs = generateBreadcrumbs(value)
        },
        currentPath(state, value) {
            state.currentPath = value
        },
        editorRemove(state, value) {
            state.editor = state.editor.filter(el => el != value)
        },
        editorAdd(state, value) {
            state.editor.push(value)
        },
        entities(state, value) {
            state.entities = value
        },
        errorMessage(state, value) {
            state.errorMessage = value
        },
        isLoading(state, value) {
            state.isLoading = value
        },
    }
})

