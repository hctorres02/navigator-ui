export function generateBreadcrumbs(value) {
    if (!value) {
        return
    }

    let SLASH = '/'
    let COLON = ':'
    let EMPTY = ''

    return value.split(SLASH)
        .filter(item => item != EMPTY)
        .map((item, index, items) => {
            let item_path = items.slice(0, index + 1).join(SLASH) || SLASH
            item_path.endsWith(COLON) ? item_path + SLASH : item_path

            return {
                label: item == EMPTY ? SLASH : item,
                path: item_path,
                isActive: item_path == value
            }
        })
}