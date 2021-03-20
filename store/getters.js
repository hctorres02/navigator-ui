import { fixPath } from '../mixins/index.js'

export default {
    fixedPath({ path }) {
        return fixPath(path)
    },
    levelUp({ dirname }) {
        return dirname
    },
    hasLevelUp({ path, dirname }) {
        return path != dirname
    },
    hasData({ data }) {
        return !!data.length
    },
    entities({ data }) {
        return [
            ...data.filter(e => e.isDir),
            ...data.filter(e => !e.isDir)
        ]
    },
    findBy(_, getters) {
        return function (value, prop, repo) {
            if (typeof repo === 'string') {
                repo = getters[repo]
            }

            return repo.find(e => e[prop] == value)
        }
    },
    clipboard({ data }) {
        return data.filter(e => e.isSelected == true)
    },
    hasClipboardItems(_, { clipboard }) {
        return !!clipboard.length
    },
    allChecked(_, { clipboard, entities }) {
        return clipboard.length === entities.length
    }
}