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
            <div class="column is-6-dektop is-12-touch">
                <browser-navigation
                    :path="path"
                    :dirname="dirname"
                    @click="fetchData" />
            </div>
            <div class="column is-2-desktop is-2-touch">
                <browser-uploader
                    :disabled="!isWritable" />
            </div>
            <div class="column is-3-desktop is-10-touch">
                <browser-actions
                    :clipboard="clipboard"
                    @click="handleAction" />
            </div>
            <div class="column is-12">
                <browser-table
                    :entities="entities"
                    :allChecked="allChecked"
                    @click="handleTable"
                    @change="toggleSelected" />
            </div>
        </div>
    </section>
`

const computed = {
    ...Vuex.mapGetters([
        'allChecked',
        'clipboard',
        'entities',
        'findBy',
        'hasClipboardItems'
    ]),
    ...Vuex.mapState([
        'path',
        'dirname',
        'isWritable'
    ])
}

const methods = {
    ...Vuex.mapActions([
        'fetchData',
        'openFile',
        'toggleSelected'
    ]),
    handleTable(path) {
        let { isDir } = this.findBy(path, 'path', this.entities)

        if (isDir) {
            this.fetchData(path)
            return
        }

        this.openFile(path)
    },
    handleAction(payload) {
        let { selected, message } = payload

        if (selected) {
            toast({ message })
            return
        }

        toast(payload)
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