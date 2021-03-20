import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

const state = function () {
    return {
        editor: [],
        data: [],
        path: null,
        dirname: null,
        isWritable: null,
    }
}

const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})

export default store