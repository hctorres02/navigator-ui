import { toast } from '../../mixins/index.js'
import BrowserActions from './browser-actions.js'
import BrowserNavigation from './browser-navigation.js'
import BrowserUploader from './browser-uploader.js'
import { NTable as BrowserTable } from '../index.js'

const components = {
    BrowserActions,
    BrowserNavigation,
    BrowserUploader,
    BrowserTable,
}

const template = `
    <section class="box p-3">
        <div class="columns is-multiline is-mobile">
            <div class="column is-3-desktop is-12-touch">
                <browser-actions />
            </div>
            <div class="column is-6-dektop is-10-touch">
                <browser-navigation
                    :path="path"
                    :dirname="dirname"
                    @click="fetchData"
                />
            </div>
            <div class="column is-2-desktop is-2-touch">
                <browser-uploader />
            </div>
            <div class="column is-12">
                <browser-table
                    :entities="entities"
                    @click="handleClick"
                    @change="toggleSelect"
                />
            </div>
        </div>
    </section>
`

const computed = {
    ...Vuex.mapGetters([
        'entities',
        'findBy',
    ]),
    ...Vuex.mapState([
        'path',
        'dirname'
    ])
}

const methods = {
    ...Vuex.mapActions([
        'fetchData',
        'openFile',
        'toggleSelect'
    ]),
    handleClick(path) {
        let { isDir } = this.findBy(path, 'path', this.entities)

        if (isDir) {
            this.fetchData(path)
            return
        }

        this.openFile(path)
    }
}

const created = function () {
    if (HOME_DIR) {
        this.fetchData(HOME_DIR)
        return
    }

    toast({
        message: 'missing <b>HOME_DIR</b> argument',
        duration: 30000
    })
}

export default {
    name: 'browser',
    components,
    template,
    computed,
    methods,
    created
}