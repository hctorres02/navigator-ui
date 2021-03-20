export default {
    FETCH_DATA(state, { data, path, dirname, isWritable }) {
        Object.assign(state, {
            ...state,
            data,
            path,
            dirname,
            isWritable,
            clipboard: []
        })
    },
    EDITOR_ADD(state, entity) {
        state.editor.push(entity)
    },
    EDITOR_REMOVE(state, id) {
        state.editor = state.editor.filter(e => e.id != id)
    },
    CLIPBOARD_ADD(state, path) {
        state.clipboard.push(path)
    },
    CLIPBOARD_REMOVE(state, path) {
        state.clipboard = state.clipboard.filter(p => p != path)
    },
    UPDATE_ENTITIES(state, data) {
        Object.assign(state, {
            ...state,
            data
        })
    }
}