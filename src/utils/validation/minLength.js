export const validityMinLength = (field, limit) => {
    if (field.length < limit && field.length > 0) {
        return true
    } else {
        return false
    }
}