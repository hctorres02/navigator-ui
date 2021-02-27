import { httpGet } from '../../api/http-client.js'

const actions = {
    setData: async ({ commit, dispatch }, uri) => {
        try {
            let response = await httpGet(uri)
            let { data, path, isWritable } = response.data

            commit('SET_DATA', { data, path, isWritable })
        }
        catch (e) {
            let message = {
                path: uri,
                body: e.response.statusText
            }

            dispatch('message/setError', message, { root: true })
        }
    },
}

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
}

const mutations = {
    SET_DATA: (state, current) => {
        Object.assign(state, current)
    },
}

const datatable = {
    namespaced: true,
    state: () => ({
        data: [],
        path: null,
        isWritable: null,
    }),
    actions,
    getters,
    mutations
}

export default datatable