import { httpGet, httpStatus } from '../../api/http-client.js'
import { fixPath } from '../../mixins.js'

const actions = {
    closeFile({ commit }, id) {
        commit('CLOSE_FILE', id)
    },
    async openFile({ commit, state, dispatch }, entity) {
        let fixedPath = fixPath(entity.path)

        try {
            let isOpen = !!state.entities
                .find(e => e.id == entity.id)

            if (!isOpen) {
                if (!entity.data) {
                    let response = await httpGet(fixedPath)
                    entity.data = response.data.data
                }

                commit('OPEN_FILE', entity)
            }

            dispatch('showEditor')
        } catch (e) {
            let message = {
                path: fixedPath,
                body: httpStatus[e.response.status]
            }

            dispatch('message/setError', message, { root: true })
        }
    },
    hideEditor({ commit }) {
        commit('SET_VISIBILITY', false)
    },
    showEditor({ commit }) {
        commit('SET_VISIBILITY', true)
    },
}

const getters = {
    isVisible(state) {
        return state.isVisible
    },
    entities(state) {
        return state.entities
    },
}

const mutations = {
    CLOSE_FILE(state, id) {
        state.entities = state.entities
            .filter(entity => entity.id != id)
    },
    OPEN_FILE(state, entity) {
        state.entities.push(entity)
    },
    SET_VISIBILITY(state, visibility) {
        state.isVisible = visibility
    },
}

const editor = {
    namespaced: true,
    state() {
        return {
            isVisible: false,
            entities: [],
        }
    },
    actions,
    getters,
    mutations
}

export default editor