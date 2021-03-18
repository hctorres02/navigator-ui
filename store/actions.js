import { httpGet } from '../api/index.js'
import { toast } from '../mixins/index.js'

export default {
    async fetchData({ commit }, path) {
        let response = await httpGet(path)

        if (response.isDir) {
            commit('FETCH_DATA', response)
            return
        }

        commit('EDITOR_ADD', response)
    },
    createFile({ commit, state }) {
        commit('EDITOR_ADD', {
            id: Math.random(),
            path: state.path,
            data: null
        })
    },
    closeFile({ commit }, id) {
        commit('EDITOR_REMOVE', id)
    },
    openFile({ getters, state, dispatch }, path) {
        let isOpen = !!getters.findBy(path, 'path', state.editor)

        if (isOpen) {
            toast({
                message: 'Already opened!'
            })
            return
        }

        dispatch('fetchData', path)
    },
    saveFile({ commit, dispatch }, payload) {
        let { path, data } = payload

        toast({
            message: `<b>${path}</b> as saved!`,
            type: 'is-success'
        })
    },
    toggleSelect({ commit }, { path, checked }) {
        let action = checked ? 'CLIPBOARD_ADD' : 'CLIPBOARD_REMOVE'
        commit(action, path)
    }
}