import { App } from './components/index.js'
import store from './store/index.js'

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})