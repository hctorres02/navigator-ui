import { NButton } from '../index.js'

const components = {
    NButton
}

const template = `
    <div class="field">
        <div class="control">
            <n-button
                for="getfile"
                tag="label"
                icon="upload"
                custom="is-fullwidth has-text-centered"
            >
                <span class="ml-2 is-hidden-touch">
                    Upload file
                </span>
            </n-button>
            <input type="file" name="getfile" id="getfile" class="is-hidden">
        </div>
    </div>
`

export default {
    name: 'browser-uploader',
    components,
    template
}