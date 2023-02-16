import styled from "styled-components"

export const ContactPromo = styled.div`
    position: relative;
    padding: 10rem 0 5rem;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .button-link {
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

export const Title = styled.div`
    color: #181a1e;
    font: 500 2.5rem "Circular", sans-serif;
    text-align: center;
    margin: 0 0 1.5rem;
`