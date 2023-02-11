import styled from "styled-components"

export const About = styled.div`
    position: relative;
    margin: 0 0 8rem;
`

export const Container = styled.div`
    display: flex;
`

export const ImageContent = styled.div`
    position: relative;
    width: 50%;
    height: 0%;
`

export const Image = styled.img`
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
    width: 50%;
`

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: .5rem;
`

export const Title = styled.h3`
    color: #427dc9;
    font: 700 1.4rem "Open Sans", sans-serif;
`

export const Subtitle = styled.h4`
    color: #444444;
    font: italic 500 1rem "Open Sans", sans-serif;
`

export const Paragraph = styled.p`
    margin: 1rem 0 0;
    color: #444444;
    font: 400 1rem "Open Sans", sans-serif;
    line-height: 1.6rem;
`