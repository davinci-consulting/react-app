import styled from "styled-components"

export const About = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 8rem;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const SectionHead = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 0 10rem;
`

export const HeadPreHeadline = styled.div`
    margin: 0 0 .5rem;
    color: #181a1e;
    font: 400 1.15rem "Circular", sans-serif;
    text-align: center;
`

export const HeadHeadline = styled.div`
    max-width: 970px;
    margin: 0 0 3rem;
    color: #181a1e;
    font: 500 3rem "Circular", sans-serif;
    text-align: center;
`

export const HeadImageWrapper = styled.div`
    position: relative;
    width: 1350px;
    border-radius: .5rem;
    overflow: hidden;

    ${props => props.notLoaded && `
        height: 900px;
        background-color: #ccc;
    `}
`

export const HeadImage = styled.img`
    width: 100%;
    object-fit: cover;
    z-index: 0;
`

export const HeadImageOver = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`

export const SectionSummary = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    width: 100%;
    padding: 8rem 0;
    background-color: #f6f9fc;
`

export const SummaryTitle = styled.h2`
    color: #181a1e;
    font: 600 2rem "Circular", sans-serif;
    width: 40rem;
`

export const SummaryParagraph = styled.div`
    color: #181a1e;
    font: 400 1rem "Circular", sans-serif;
    width: 40rem;
`

export const SectionMission = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 0 10rem;
`

export const MissionPreHeadline = styled.div`
    margin: 0 0 .5rem;
    color: #181a1e;
    font: 400 1.20rem "Circular", sans-serif;
    text-align: center;
`

export const MissionHeadline = styled.div`
    max-width: 970px;
    margin: 0 0 3rem;
    color: #181a1e;
    font: 500 2rem "Circular", sans-serif;
    text-align: center;
`

export const SectionHiring = styled.div`
    display: flex;
    width: 100%;
    background-color: #f6f9fc;
`

export const HiringTextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
`

export const HiringTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: max-content;
`

export const HiringText = styled.div`
    color: #181a1e;
    font: 500 2.8rem "Circular", sans-serif;
    margin: 0 0 1rem;
`

export const HiringButton = styled.button`
    display: flex;
    align-items: center;
    gap: .5rem;
    width: max-content;
    color: #181a1e;
    font: 400 1.2rem "Circular", sans-serif;

    svg {
        margin: 4px 0 0;
        transition: .2s;
    }

    &:hover {
        svg {
            transform: translateX(5px)
        }
    }
`

export const HiringBoldText = styled.b`
    color: #60a4fc;
    font: 600 2.8rem "Circular", sans-serif;
`

export const HiringImageWrapper = styled.div`
    position: relative;
    width: 50%;
`

export const HiringImage = styled.img`
    width: 100%;
    object-fit: cover;
    z-index: 0;
`

export const HiringImageOver = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`