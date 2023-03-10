import styled from "styled-components"

export const Hero = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5rem 0;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1350px;
`

export const HeroTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2em;
    width: 700px;
`

export const Title = styled.h1`
    color: #181a1e;
    font: 600 3.8rem "Circular", sans-serif;
`

export const Subtitle = styled.h3`
    color: #181a1e;
    font: 400 1.2rem "Circular", sans-serif;
`

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: .5rem;
    background-color: #60a4fc;
    box-shadow: 5px 5px 0 0 #00000026;
    border-radius: .3rem;
    padding: 1rem 2.1rem;
    color: #FFFFFF;
    font: 500 1.1rem "Circular", sans-serif;
    transition: .2s;

    &:hover {
        background-color: #5398f1;
        cursor: pointer;
    }

    &:active {
        background-color: #377edb;
        box-shadow: 0 0 0 0 #00000026;
        transform: translate(5px, 5px);
    }
`

export const HeroImageWrapper = styled.div`
    width: 500px;
    height: 500px;
`

export const HeroImage = styled.div`
    background: url("/assets/images/hero/wZ6hGBg.svg") no-repeat center/cover;
    width: 100%;
    height: 100%;
`