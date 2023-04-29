

const validation = (userData) =>{ 
    let errors = {};
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // correo 
    const regexPassword = /^(?=.*\d).{6,10}$/; // password

    if(!regexEmail.test(userData.email)) { 
        errors.email = 'Email erroneo'
    }
    if(!userData.email){
      errors.email = "Este campo no puede estar vacio"  
    }
    if(!regexPassword.test(userData.password)) {
        errors.password = "Password debe contener 6 a 10 caracter y un numero"
    }
    
    return errors  
}

export default validation;