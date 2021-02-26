const mutations = {
    SET_STATE: (state, current) => {
        Object.assign(state, current)
    },
    SET_MESSAGE: (state, message) => {
        state.messages.push(message)
    },
    CLOSE_FILE: (state, id) => {
        state.editor = state.editor.filter(entity => entity.id != id)
    },
    OPEN_FILE: (state, data) => {
        state.editor.push(data)
    },
    SET_SIDEBAR_VISIBLE: (state, visibility) => {
        state.isSidebarOpen = visibility
    },
}

export default mutations