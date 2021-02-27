const actions = {
    setError: ({ commit }, { path, body }) => {
        commit('SET_MESSAGE', {
            type: 'is-danger',
            path,
            body
        })
    },
    setSuccess: ({ commit }, { path, body }) => {
        commit('SET_MESSAGE', {
            type: 'is-success',
            path,
            body
        })
    },
    clearMessage: ({ commit }) => {
        commit('SET_MESSAGE', {
            type: null,
            path: null,
            body: null
        })
    }
}

const getters = {
    message: state => {
        let { type, path, body } = state
        return { type, path, body }
    }
}

const mutations = {
    SET_MESSAGE: (state, message) => {
        Object.assign(state, message)
    }
}

const message = {
    namespaced: true,
    state: () => ({
        type: null,
        path: null,
        body: null
    }),
    actions,
    getters,
    mutations
}

export default message