import {
    NTabs,
    Browser,
    Editor
} from '../index.js'

const components = {
    NTabs,
    Browser,
    Editor
}

const template = `
    <div id="app">
        <header>
            <div class="container px-4 pt-6 pb-4">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <h1 class="title is-uppercase">Navigator</h1>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <n-tabs @click="switchComponent" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main class="container p-4">
            <keep-alive>
                <component :is="activeComponent" />
            </keep-alive>
        </main>
    </div>
`

const data = function () {
    return {
        activeComponent: 'browser'
    }
}

const methods = {
    switchComponent(component) {
        this.activeComponent = component
    }
}

export default {
    name: 'app',
    components,
    template,
    data,
    methods
}