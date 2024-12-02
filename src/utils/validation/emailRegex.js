const emailRegex = /(\w{1,20})(@)(\w{1,10})(\.)([a-zA-Z]{2,3})/g
export const validityEmail = (field) => {
    if (!field.match(emailRegex) && field.length > 0) {
        return true
    } else {
        return false
    }
}

//(максимум 30 любых символов)(обязательно @)(максимум 15 цифр или латинских букв)(обязательно точка)(максимум 3 латинские буквы минимум 2)