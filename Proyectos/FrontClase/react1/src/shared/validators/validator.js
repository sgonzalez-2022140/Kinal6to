/* Validación de correo */
export const validateEmail = (email)=>{
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}

export const emailValidationMessage = 'Por favor ingresa un correo válido'
/* Validación de nombre de usuario */
export const validateUsername = (username)=>{
    const regex = /^\S{3,8}$/
    return regex.test(username)
}

export const usernameValidationMessage = 'El nombre de usuario debe ser de 3 y 8 caracteres, sin espacios'

/* Validacion de contraseña*/
export const validatePassword = (password)=>{
    const regex = /^\S{6,12}$/
    return regex.test(password)
}

export const passwordValidationMessage = 'La contraseña debe de tener entre 6 y 12 caracteres'

/* Validacion de confirmación */ 
export const validatePassConfirm = (password, passConfirm)=>{
    return password === passConfirm
}

export const passConfirmValidationMessage = 'Las contraseñas no coinciden'