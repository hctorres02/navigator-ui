const mutations = {
    FETCH_DATA(state, payload) {
        let { data, path, dirname, isWritable } = payload

        Object.assign(state, { data, path, dirname, isWritable })
    },
    TOGGLE_SELECT(state, payload) {
        console.log(payload)
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
        state.clipboard = state.clipboard.filter(e => e.path != path)
    }
}

export default mutations