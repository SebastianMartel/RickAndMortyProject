import { useState } from "react"
import validation from "../Validation/Validation"
import styled from "styled-components"

import FormBackgroundBlur from '../../Img/FormBackgroundBlur.png'
import FormPortrait from '../../Img/FormPortrait.png'


const StyledDiv = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 10em;
    gap: 5em;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 6em auto 0;
    height: 30em;
    gap: 5em;

    margin: 6em auto 0;
    height: 30em;

    img {
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
}
`
const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    background-color: red;
    border: 1px solid black;
    border-radius: 10px;    
`

const StyledError = styled.p `
    font-size: 7px
`

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

    // const handleInputClick = () => {
    //     document.body.style.backgroundImage = `url(${FormBackgroundBlur}")`;
    // }
    // add: onClick = {handleInputClick}, to email and password input


    return (
        <>
        <StyledDiv>
            <img src={FormPortrait} />
            <StyledForm onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input name='email' value={userData.email} type='text' onChange={handleChange} placeholder='email' />
                {errors.email && <StyledError>{errors.email}</StyledError>}
                <hr></hr>
                <label htmlFor="password">Password</label>
                <input name='password' value={userData.password} type='text' onChange={handleChange} placeholder='password' />
                {errors.password && <StyledError>{errors.password}</StyledError>}
                <hr></hr>
                <button>Log in</button>
            </StyledForm>
            </StyledDiv>
        </>
    )
}