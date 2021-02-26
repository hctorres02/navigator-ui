const getters = {
    stateData: state => state.data,
    statePath: state => state.path,
    stateIsWritable: state => state.isWritable,
    stateIsLoading: state => state.isLoading,
    stateIsSidebarOpen: state => state.isSidebarOpen,
    stateErrors: state => state.messages.filter(msg => msg.isError),
    stateSuccess: state => state.messages.filter(msg => !msg.isError),
    stateEditor: state => state.editor
}

export default getters