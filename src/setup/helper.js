export function renderIf(condition, renderFn) {
    return condition ? renderFn() : null
}

export function isEmpty(obj) {
    let name;
    for(name in obj) {
        if(obj.hasOwnProperty(name)){
            return false
        }
    }
    if(obj.constructor !== Object) {
        return false
    }

    return true
}