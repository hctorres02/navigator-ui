import { httpGet, httpStatus } from '../../api/http-client.js'
import { fixPath } from '../../mixins.js'

export const types = {
    setData: 'setData',
    SET_DATA: 'SET_DATA'
}

const actions = {
    async setData({ commit, dispatch }, path) {
        let fixedPath = fixPath(path)

        try {
            let response = await httpGet(fixedPath)
            let entity = response.data

            if (!entity.isDir) {
                dispatch('editor/openFile', entity, { root: true })
                dispatch(types.setData, entity.dirname)
                return
            }

            commit(types.SET_DATA, entity)
        }
        catch (e) {
            console.log(e)
            let message = {
                path: fixedPath,
                body: e.response && e.response.status
                    ? httpStatus[e.response.status]
                    : httpStatus[999]
            }

            dispatch('message/setError', message, { root: true })
        }
    },
}

const getters = {
    data(state) {
        return state.data
    },
    path(state) {
        return state.path
    },
    isWritable(state) {
        return state.isWritable
    },
}

const mutations = {
    SET_DATA(state, { data, path, isWritable }) {
        Object.assign(state, { data, path, isWritable })
    },
}

const datatable = {
    namespaced: true,
    state() {
        return {
            data: [],
            path: null,
            isWritable: null,
        }
    },
    actions,
    getters,
    mutations
}

export default datatable