import styled from "styled-components"

export const Services = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 8rem;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const TitleGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    margin: 0 0 2.5rem;
`

export const Title = styled.div`
    color: #444444;
    font: 700 2rem "Roboto", sans-serif;
`

export const ColorfulTitle = styled.div`
    color: #60a4fc;
    font: 700 2rem "Roboto", sans-serif;
`

export const ItemList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    max-width: 1350px;
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border: 1px solid #0000000f;
    border-radius: .3rem;
    width: 20rem;
    padding: 4.5rem 1.5rem;
    transition: .3s;

    &:hover {
        border-color: #60a4fc52;
        cursor: pointer;
    }
`

export const ItemTitle = styled.div`
    color: #60a4fc;
    font: 600 1.3rem "Roboto", sans-serif;
    text-align: center;
    margin: 1rem 0 0;
`

export const ItemText = styled.div`
    color: #444444;
    font: 400 .95rem "Roboto", sans-serif;
    text-align: center;
    margin: .5rem 0 0;
`