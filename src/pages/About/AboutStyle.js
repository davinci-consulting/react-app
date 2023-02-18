import styled from "styled-components"

export const About = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8rem 0 0;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1350px;
`

export const SectionText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 0 10rem;
`

export const PreHeadline = styled.div`
    margin: 0 0 .5rem;
    color: #181a1e;
    font: 400 1.15rem "Circular", sans-serif;
    text-align: center;
`

export const Headline = styled.div`
    max-width: 970px;
    margin: 0 0 3rem;
    color: #181a1e;
    font: 500 3rem "Circular", sans-serif;
    text-align: center;
`

export const ImageContent = styled.div`
    position: relative;
    width: 100%;
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