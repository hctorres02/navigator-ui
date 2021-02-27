const getters = {
    data: state => {
        return state.data
    },
    path: state => {
        return state.path
    },
    isWritable: state => {
        return state.isWritable
    },
    isLoading: state => {
        return state.isLoading
    },
    isSidebarOpen: state => {
        return state.isSidebarOpen
    },
    editor: state => {
        return state.editor
    },
    message: state => {
        return state.message
    },
}

export default getters