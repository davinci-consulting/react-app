import styled from "styled-components"

export const Service = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5rem 0;
`

export const Container = styled.div`
    width: 1240px;
`

export const SectionFeatures = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &:not(:last-child) {
        margin: 0 0 5rem;
    }
`

export const FeaturesTextWrapper = styled.div`
    width: 480px;
`

export const FeaturesTitle = styled.h2`
    color: #181a1e;
    font: 500 2.3rem "Circular", sans-serif;
    margin: 0 0 1.2rem;
`

export const FeaturesText = styled.p`
    color: #181a1e;
    font: 400 1.1rem "Circular", sans-serif;
    line-height: 30px;
`

export const FeaturesImageWrapper = styled.div`
    position: relative;
    width: 480px;
    border-radius: .5rem;
    overflow: hidden;
`

export const FeaturesImage = styled.img`
    width: 100%;
    object-fit: cover;
    z-index: 0;
`

export const FeaturesImageOver = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`