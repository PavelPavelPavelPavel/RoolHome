const phoneRegex = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/g
export const validityPhone = (field) => {
    if (!field.match(phoneRegex) && field.length > 0) {
        return true
    } else {
        return false
    }
}