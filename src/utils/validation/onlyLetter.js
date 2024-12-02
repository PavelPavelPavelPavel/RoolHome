const onlyLetterRegex = /^([а-яА-ЯёЁa-zA-Z])+$/g;
export const validityOnlyLetter = (field) => {
    if (!field.match(onlyLetterRegex) && field.length > 0) {
        return true
    } else {
        return false
    }
}