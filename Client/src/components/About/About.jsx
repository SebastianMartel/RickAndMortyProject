import styled from "styled-components"
import image from '../../Img/logo192.png'

const DivBox = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 8% 0;
    padding: 0 15%;
    height: 300px;
    background-color: white;
`

const DivText = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: white;
    font-family: consolas;
    font-weight: bold;
`

const Title = styled.h1 `

`

const Text = styled.p `

`

const Links = styled.span `
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 10px 0;
    gap: 2rem
`

export default function About () {
    return (
        <DivBox>
            <DivText>
                <Title>Hello World! I'm Sebastian Menacho</Title>
                <Text>I'm a Full Stack developer based on Lima, Peru.</Text>
                <Links>
                    <a href = 'https://linkedin.com'>Linkedin</a>
                    <a href = 'https://github.com'>GitHub</a>
                    <a href = 'https://gmail.com'>Email</a>
                </Links>
            </DivText>
            <img></img>
            <img src = {image} alt = 'image'></img>
        </DivBox>
        
    )
}