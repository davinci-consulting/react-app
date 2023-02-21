import styled from "styled-components"

export const  Careers = styled.div`
    width: auto;
`

export const  Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const  Hero = styled.div`
    position: relative;
    width: 100%;
    height: 700px;
`

export const  CareersVideo = styled.div`
    background-color: #ccc;
    width: 100%;
    height: 100%;
`

export const  CareersVideoOver = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`

export const  SectionInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3rem 0;
    background-color: #60a4fc;
`

export const  InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    width: 940px;
    padding: 1rem;
`

export const  InfoGroupTitle = styled.div`
    display: flex;
    gap: .5rem;
    border-bottom: 1px solid #FFFFFF;
    padding: 0 0 1rem;
`

export const  InfoWhiteTitle = styled.h2`
    color: #FFFFFF;
    font: 600 2.1rem "Circular", sans-serif;
`

export const  InfoBlackTitle = styled.h2`
    color: #181a1e;
    font: 600 2.1rem "Circular", sans-serif;
`

export const  InfoText = styled.p`
    color: #FFFFFF;
    font: 400 1.3rem "Circular", sans-serif;
`

export const  SectionTeam = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 5rem 0;

    .swiper {
        width: 1000px;
        height: 550px;

        .swiper-wrapper {
            height: 500px;
            border-radius: .5rem;

            .swiper-slide {
                border-radius: .5rem;
                overflow: hidden;
            }
        }

        .swiper-pagination {
            display: flex;
            justify-content: center;
            align-items: center;

            .swiper-pagination-bullet {
                background: #afafaf;
                opacity: .4;

                &.swiper-pagination-bullet-active {
                    width: 12px;
                    height: 12px;
                    opacity: 1;
                    line-height: 10px;
                }
            }
        }
    }

    .team-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #60a4fc;
        border: 1px solid #60a4fc;
        border-radius: 100rem;
        padding: 1rem 2.1rem;
        color: #FFFFFF;
        font: 500 1rem "Circular", sans-serif;
        transition: .2s;

        &.secondary {
            background-color: transparent;
            color: #60a4fc;

            &:hover, &:active {
                color: #FFFFFF;
            }
        }

        &:hover {
            background-color: #5398f1;
            border-color: #5398f1;
            cursor: pointer;
        }

        &:active {
            background-color: #377edb;
            border-color: #377edb;
        }
    }
`

export const  ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const TeamImageContent = styled.div`
    position: relative;
    margin: 0 0 1rem;
    overflow: hidden;
`

export const TeamImage = styled.img`
    width: 1000px;
    height: 500px;
    object-fit: cover;
    z-index: 0;
`

export const TeamImageAbsolute = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
`

export const TeamText = styled.h2`
    color: #181a1e;
    font: 500 1.3rem "Circular", sans-serif;
    text-align: center;
`

export const SectionBenefits = styled.div`
    padding: 3rem 0;
`

export const BenefitsTitle = styled.h2`
    color: #181a1e;
    font: 600 2.3rem "Circular", sans-serif;
    text-align: center;
`

export const BenefitsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 940px;
    padding: 1.3rem 0 0;
`

export const BenefitsItem = styled.div`
    border: 1px solid #000;
    border-radius: 100em;
    padding: .5rem 1rem;
    text-align: center;
    color: #181a1e;
    font: 500 1rem "Circular", sans-serif;
`

export const SectionPositions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f6f9fc;
    width: 100%;
    padding: 4rem 0;
`

export const PositionsGroupTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .3rem;
    margin: 0 0 2.5rem;
`

export const PositionTitle = styled.h2`
    color: #181a1e;
    font: 600 2.3rem "Circular", sans-serif;
    text-align: center;
`

export const PositionDescription = styled.p`
    color: #181a1e;
    font: 400 1.5rem "Circular", sans-serif;
`

export const PositionsJobWrapper = styled.div`
    width: 940px;
`

export const PositionsJob = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    &:not(:last-child) { 
        padding: 0 0 3rem;
        margin: 0 0 3rem;
        border-bottom: 1px solid #e5e9ed;
    }
`

export const PositionsJobTitle = styled.h3`
    color: #181a1e;
    font: 600 1.5rem "Circular", sans-serif;
`

export const PositionsJobList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const PositionsJobItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    .position-job-item-title {
        color: #60a4fc;
        font: 500 1.1rem "Circular", sans-serif;
    }
`

export const PositionsJobItemType = styled.span`
    color: #55585e;
    font: 400 1rem "Circular", sans-serif;
`