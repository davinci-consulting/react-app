import styled from "styled-components"
import HeroBackground from "../../../images/v7d4Wm0ENls.jpg"

export const Hero = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, #FFFFFF 5%, transparent), url(${HeroBackground}) no-repeat center/cover;
    width: 100%;
    height: 700px;
    margin: 0 0 5rem 0;
`

export const Container = styled.div`
    width: 1350px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2em;
    width: 600px;
`

export const Title = styled.h1`
    color: #222222;
    font: 700 2.8rem "Open Sans", sans-serif;
`

export const Subtitle = styled.h3`
    color: #5c5c5c;
    font: 500 1.1rem "Open Sans", sans-serif;
`

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const Button = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    background-color: ${props => props.primary ? "#60a4fc" : "transparent"};
    border: 1px solid #60a4fc;
    border-radius: 100rem;
    padding: 1rem 2rem;
    color: ${props => props.primary ? "#FFFFFF" : "#60a4fc"};
    font: 500 1rem "Open Sans", sans-serif;
`