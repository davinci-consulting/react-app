import styled from "styled-components"

export const About = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8rem 0 0;
`

export const Container = styled.div`
    display: flex;
    gap: 10rem;
    width: 1350px;
`

export const ImageContent = styled.div`
    position: relative;
    width: 38%;
    border-radius: .5rem;
    overflow: hidden;
`

export const Image = styled.img`
    width: 100%;
    object-fit: cover;
    z-index: 0;
`

export const ImageAbsolute = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`

export const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
`

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    .button-group {
        display: flex;
        align-items: center;
        gap: .5rem;
        margin: 1rem 0 0;

        svg {
            transform: translateX(0);
            transition: .3s;
        }

        &:hover {
            svg {
                transform: translateX(.5rem);
            }
        }
    }
`

export const Title = styled.h3`
    color: #427dc9;
    font: 500 1.6rem "Circular", sans-serif;
`

export const Subtitle = styled.h4`
    color: #181a1e;
    font: italic 500 1.2rem "Circular", sans-serif;
`

export const Paragraph = styled.p`
    margin: 1rem 0 0;
    color: #4e5158;
    font: 400 1.1rem "Circular", sans-serif;
    line-height: 1.6rem;
`

export const ButtonText = styled.div`
    color: #60a4fc;
    font: 400 1.1rem "Circular", sans-serif;
`

export const ButtonIcon = styled.div`
    display: grid;
    place-content: center;
    background-color: #60a4fc;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100rem;
`