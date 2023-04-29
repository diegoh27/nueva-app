import { useState } from "react";
import validation from './Validation';





const Form = ({ login}) => {

      
    const [userData, setUserData] = useState({
        email: '',
        password:''
     }) 
    const [errors, setErrors] = useState({})


     const handleChange = (event) => {
        setUserData({
            ...userData,
        [event.target.name] : event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))
     }
    const handleSubmit = (event) => {
            event.preventDefault()
            login(userData)

    }
    return (
        <form onSubmit={handleSubmit} >    
            <label htmlFor="">Email: </label>
            <input type="text" onChange={handleChange} name = 'email' value = {userData.email}  />
               {errors.email && <p>{errors.email}</p>}
            <label htmlFor="">Password:</label>
            <input type="text" onChange={handleChange} name = 'password' value = {userData.password} />
               {errors.password && <p>{errors.password}</p>}
            <button type="submit" >Submit</button>
        </form>
    )
}

export default Form;