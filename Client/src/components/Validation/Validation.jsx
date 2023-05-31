export default function validation (userData) {

    const errors = {}
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    const regexPassword = /\d+/

    
    if (!regexEmail.test(userData.email)) errors.email = 'el nombre de usuario tiene que ser un email'
    if (!userData.email) errors.email = 'el nombre de usuario no puede estar vacío'
    if (userData.email.length > 35) errors.email = 'el nombre de usuario no puede tener más de 35 caracteres'

    if (!regexPassword.test(userData.password)) errors.password = 'la contraseña tiene que tener al menos un número'
    if (userData.password.length < 6 || userData.password.length >10) errors.password = 'la contraseña tiene que tener una longitud entre 6 y 10 caracteres'

    return errors;
}