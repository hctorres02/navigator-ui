import { generateBreadcrumbs } from './mixins.js'

export default {
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
    error(state, value) {
        state.error = value
    },
    isLoading(state, value) {
        state.isLoading = value
    },
}