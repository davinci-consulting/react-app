import styled from "styled-components"
import HeroBackground from "../../../images/v7d4Wm0ENls.jpg"

export const Hero = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, #FFFFFF 5%, transparent), url(${HeroBackground}) no-repeat center/cover;
    width: 100%;
    height: 700px;
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
    color: #181a1e;
    font: 600 3rem "Circular", sans-serif;
`

export const Subtitle = styled.h3`
    color: #181a1e;
    font: 400 1.2rem "Circular", sans-serif;
`

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    .hero-btn {
        display: flex;
        align-items: center;
        gap: .5rem;
        background-color: #60a4fc;
        border: 1px solid #60a4fc;
        border-radius: 100rem;
        padding: 1rem 2rem;
        color: #FFFFFF;
        font: 500 1.1rem "Circular", sans-serif;
        transition: .2s;

        &.secondary {
            background-color: transparent;
            color: #60a4fc;
        }

        &:hover {
            background-color: #5398f1;
            border-color: #5398f1;
            color: #FFFFFF;
            cursor: pointer;
        }

        &:active {
            background-color: #377edb;
            border-color: #377edb;
            color: #FFFFFF;
        }
    }
`

export const Button = styled.div`
    
`