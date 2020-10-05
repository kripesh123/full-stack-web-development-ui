export function renderIf(condition, renderFn) {
    return condition ? renderFn() : null
}