import { httpGet, httpPost } from './http-client.js'

export const editorClient = {
    name: 'EditorClient',
    mixins: [httpGet, httpPost],
    methods: {
        saveFile(item) {
            // TODO
            this.$store.commit('editorRemove', item)
        },
        openFile(path) {
            this.httpGet('viewer', path)
                .then(({ data }) => this.$store.commit('editorAdd', data))
        }
    }
}