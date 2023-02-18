import styled from "styled-components"

export const AboutPromo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #60a4fc;
    padding: 3rem 0;
`

export const Container = styled.div`
    position: relative;
`

export const TitleGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 3.5rem;
`

export const WhiteTitle = styled.div`
    color: #ffffff;
    font: 500 3rem "Circular", sans-serif;
    text-align: center;
`

export const BlackTitle = styled.div`
    color: #181a1e;
    font: 600 3.8rem "Circular", sans-serif;
    text-align: center;
`

export const NumberContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
`

export const NumberWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(:last-child) {
        &::after {
            position: absolute;
            left: calc(100% + 85px);
            width: 1px;
            height: 100%;
            background-color: #ffffff;
            content: '';
        }
    }
`

export const Number = styled.div`
    color: #ffffff;
    font: 600 3.4rem "Circular", sans-serif;
    text-align: center;
`

export const Text = styled.div`
    color: #ffffff;
    font: 500 1.2rem "Circular", sans-serif;
    text-align: center;
`