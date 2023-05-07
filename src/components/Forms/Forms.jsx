import { useState } from "react"
import validation from "../Validation/Validation"

export default function Forms ({login}) {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        console.log(event)
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
        <form onSubmit = {handleSubmit}>
            <label htmlFor = "email">Email</label>
                <input name = 'email' value = {userData.email} type = 'text' onChange = {handleChange}/>
                {
                    errors.email && <p>{errors.email}</p>
                }
            <hr></hr>
            <label htmlFor = "password">Password</label>
                <input name = 'password' value = {userData.password} type = 'text' onChange = {handleChange}/>
                {
                    errors.password && <p>{errors.password}</p>
                }
            <button>Log in</button>
        </form>
    )
}