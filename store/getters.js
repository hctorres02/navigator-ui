import { fixPath } from '../mixins/index.js'

export default {
    fixedPath(state) {
        return fixPath(state.path)
    },
    levelUp(state) {
        return state.dirname
    },
    hasLevelUp(state) {
            
    },
    directories(state) {
        return state.data.filter(e => e.isDir)
    },
    files(state) {
        return state.data.filter(e => !e.isDir)
    },
    entities(_, getters) {
        return [
            ...getters.directories,
            ...getters.files
        ]
    },
    findBy(_, getters) {
        return function (value, prop, repo) {
            if (typeof repo === 'string') {
                repo = getters[repo]
            }

            return repo.find(e => e[prop] == value)
        }
    }
}