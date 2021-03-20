import { httpGet } from '../api/index.js'
import { toast } from '../mixins/index.js'

export default {
    async fetchData({ commit }, path) {
        let response = await httpGet(path)

        response.data = response.data.map(e => {
            return {
                ...e,
                isSelected: false
            }
        })

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
    saveFile({ commit, dispatch }, { path, data }) {
        toast({
            message: `<b>${path}</b> as saved!`,
            type: 'is-success'
        })
    },
    toggleSelected({ commit, state }, payload) {
        let data = state.data.map((sd) =>
            payload.find(p => p.id == sd.id) ?? sd)

        commit('UPDATE_ENTITIES', data)
    }
}