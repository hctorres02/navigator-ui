import {
    httpGet,
    httpPost,
    httpPut,
    httpDelete
} from '../api/http-client.js'

const actions = {
    setData: async ({ commit, dispatch }, uri) => {
        try {
            let response = await httpGet(uri)
            let { data, path, isWritable } = response.data

            commit('SET_DATA', { data, path, isWritable })
        }
        catch (e) {
            dispatch('setError', { uri, ...e.response })
        }
    },
    setError: ({ commit }, { path, status, statusText }) => {
        let message = { isError: true, path, status, statusText }
        commit('SET_MESSAGE', message)
    },
    setSuccess: ({ commit }, { path, information }) => {
        let message = { isError: false, path, information }
        commit('SET_MESSAGE', message)
    },
    closeFile: ({ commit }, id) => {
        commit('CLOSE_FILE', id)
    },
    openFile: async ({ commit, state, dispatch }, { id, path }) => {
        let isOpen = !!state.editor.find(e => e.id == id)

        if (isOpen) {
            dispatch('openSidebar')
            return
        }

        try {
            let entity = (await httpGet(path)).data

            commit('OPEN_FILE', entity)
            dispatch('openSidebar')

        } catch (e) {
            dispatch('setError', e.response)
        }
    },
    closeSidebar: ({ commit }) => {
        commit('SET_SIDEBAR_VISIBLE', false)
    },
    openSidebar: ({ commit }) => {
        commit('SET_SIDEBAR_VISIBLE', true)
    },
}

export default actions