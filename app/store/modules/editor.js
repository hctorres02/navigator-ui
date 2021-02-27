import { httpGet } from '../../api/http-client.js'
import { fixPath } from '../../mixins.js'

const actions = {
    closeFile: ({ commit }, id) => {
        commit('CLOSE_FILE', id)
    },
    openFile: async ({ commit, state, dispatch }, { id, path }) => {
        let fixedPath = fixPath(path)

        try {
            let isOpen = !!state.entities.find(e => e.id == id)

            if (!isOpen) {
                let response = await httpGet(fixedPath)
                let entity = response.data

                commit('OPEN_FILE', entity)
            }

            dispatch('showEditor')
        } catch (e) {
            let message = {
                path: fixedPath,
                body: e.response.statusText
            }

            dispatch('message/setError', message, { root: true })
        }
    },
    hideEditor: ({ commit }) => {
        commit('SET_VISIBILITY', false)
    },
    showEditor: ({ commit }) => {
        commit('SET_VISIBILITY', true)
    },
}

const getters = {
    isVisible: state => {
        return state.isVisible
    },
    entities: state => {
        return state.entities
    },
}

const mutations = {
    CLOSE_FILE: (state, id) => {
        state.entities = state.entities
            .filter(entity => entity.id != id)
    },
    OPEN_FILE: (state, data) => {
        state.entities.push(data)
    },
    SET_VISIBILITY: (state, visibility) => {
        state.isVisible = visibility
    },
}

const editor = {
    namespaced: true,
    state: () => ({
        isVisible: false,
        entities: [],
    }),
    actions,
    getters,
    mutations
}

export default editor