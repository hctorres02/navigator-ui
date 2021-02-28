export function fixPath(path) {
    let SLASH = '/'
    let BACKSLASH = '\\'
    let COLLON = ':'
    let QUESTION = '?'
    let EMPTY = ''

    if (path.startsWith(SLASH)) {
        path = path.substring(1)
    }

    if (path.includes(BACKSLASH)) {
        path = path.replaceAll(BACKSLASH, SLASH)
    }

    if (path.includes(COLLON)) {
        path = path.replaceAll(COLLON, EMPTY)
    }

    if (path.includes(QUESTION)) {
        path = path.replaceAll(QUESTION, EMPTY)
    }

    return path
}

export function toggle(element_id, className = 'is-active') {
    document.getElementById(element_id).classList.toggle(className)
}

const mixins = {
    name: 'mixins',
    methods: {
        fixPath,
        toggle
    }
}

export default [mixins]