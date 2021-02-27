import datatable from './modules/datatable.js'
import editor from './modules/editor.js'
import message from './modules/message.js'

const modules = {
    datatable,
    editor,
    message
}

const store = new Vuex.Store({
    modules
})

export default store