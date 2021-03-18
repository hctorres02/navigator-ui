export const toast = function (args) {
    bulmaToast.setDefaults(TOAST_DEFAULTS)
    return bulmaToast.toast(args)
}

export const fixPath = function (value) {
    let SLASH = '/'
    let BACKSLASH = '\\'
    let COLLON = ':'
    let EMPTY = ''

    if (!value) {
        return EMPTY
    }

    if (value.includes(BACKSLASH)) {
        value = value.replaceAll(BACKSLASH, SLASH)
    }

    if (value.includes(COLLON)) {
        value = value.replaceAll(COLLON, EMPTY)
    }

    return value
}