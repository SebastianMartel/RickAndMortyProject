import { useState } from "react"
import validation from "../Validation/Validation"
import styled from "styled-components"

import FormPortrait from '../../Img/FormPortrait.png'


const MainDiv = styled.div `
    display: flex;

    height: 100vh;
    width: 100vw;
    gap: 3.5%
`

const StyledDivImg = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    width: 50%;

    img {
        width: 400px;
        height: 400px;
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;
}
`

const StyledDivForm = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 50%;
}
`

const StyledForm = styled.div `
    display: flex;
    flex-direction: column;


    padding: 5px;
    width: 390px;
    max-height: 450px;
    min-height: 390px;
    border-radius: 10px;
    background-color: #04EECB90;
`

const StyledFormData = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;


    width: 390px;
    max-height: 390px;
    border-radius: 10px;
`

const StyledInput = styled.input `

    padding: 8px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4.15399px 7.26947px inset;
    background-color: #03958A;
    border: none;
    color: white;
    padding: 15px;
    
    ::placeholder {
        color:white
    }
`

const StyledError = styled.p `
    font-size: 12px;
    text-align: left;
    color: rgb(255, 0, 46);
`

const StyledButton = styled.button `

    padding: 10px;
    font-family: ;
    font-size : 20px;
    border-radius: 10px;
    border: 0.25px ;
    color: white;
    // background-color: #0E7C7B90;
    // background-color: #A9D8B890;
    // background-color: #BEFFC790;
    // background-color: #0D1F2D90;
    background-color: #F6AE2D95;

    &:hover {
        cursor: pointer;
        // background-color: #0D1F2D;
        background-color: #F0DD0E
    }
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
        <MainDiv>
            <StyledDivImg>
                <img src = {FormPortrait} alt = 'rick and morty logo'/>
            </StyledDivImg>

            <StyledDivForm>
                <StyledForm onSubmit = {handleSubmit}>
                    <div style = {{fontSize : '50px', color: '#E8E5DA', border: '1px solid red'}}>Welcome</div>

                    <StyledFormData>
                        <label style = {{fontSize : '30px', color: '#F7FFF7', border: '1px solid red' }} htmlFor="email">Email</label>
                            <StyledInput name='email' value={userData.email} type='text' onChange={handleChange} placeholder='Email' />
                            {errors.email && <StyledError>{errors.email}</StyledError>}

                        <hr></hr>

                        <label style = {{fontSize : '30px', color: 'white', border: '1px solid red' }} htmlFor="password">Password</label>
                            <StyledInput name='password' value={userData.password} type='text' onChange={handleChange} placeholder='Password' />
                            {errors.password && <StyledError>{errors.password}</StyledError>}

                        <hr></hr>

                        <StyledButton>LOG IN</StyledButton>

                    </StyledFormData>
                </StyledForm>
            </StyledDivForm>
        </MainDiv>
    )
}