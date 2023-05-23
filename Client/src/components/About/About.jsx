import styled from "styled-components"
import image from '../../Img/logo192.png'

const MainDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 8% 0;
    padding: 0 15%;
    height: 300px;
    background-color: #F3F9E3;
`

const DivBox = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 300px;
    gap: 30px
`

const DivText = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-family: consolas;
    font-weight: bold;
`

const Title = styled.h1 `

`

const Text = styled.p `

`

const Contact = styled.span `
    margin-bottom: 10px;
`
const Links = styled.span `

    margin: 10px 0;
    gap: 2rem
`
const HyperLink = styled.a `
    margin: 0 20px
`

const DivImg = styled.div `
    display: flex;
    align-items: center;
    gap: 10px;
`


export default function About () {
    return (
        <MainDiv>
            <DivBox>
                <DivText>
                    <Title>Hello World! I'm Sebastian Menacho,</Title>
                    <Text>I'm a Full Stack developer based in Lima, Peru.</Text>
                </DivText>
                <DivImg>
                    <img src = {image} alt = 'image'></img>
                    <img alt = 'skills'></img>
                </DivImg>
            </DivBox>
            <div style = {{border: '1px solid #626C66', width: '100%', margin: '20px 0'}}></div>
            <Contact>
                    <p style = {{display: 'inline'}}>Contact me:</p>
                    <Links>
                        <HyperLink href = 'https://linkedin.com' target = '_blank' rel = 'noopener noreferrer'>Linkedin</HyperLink>
                        <HyperLink href = 'https://github.com' target = '_blank' rel = 'noopener noreferrer'>GitHub</HyperLink>
                        <HyperLink href = 'https://gmail.com' target = '_blank' rel = 'noopener noreferrer'>Email</HyperLink>
                    </Links>
            </Contact>
        </MainDiv>
        
    )
}