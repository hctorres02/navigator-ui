import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

const store = new Vuex.Store({
    state: {

        //
        data: [],
        path: null,
        isWritable: null,

        //
        isLoading: false,

        //
        isSidebarOpen: false,
        editor: [],

        //
        messages: [],
    },
    actions,
    getters,
    mutations
})

export default store