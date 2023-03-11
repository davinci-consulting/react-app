import styled from "styled-components"

export const  Internal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const  Container = styled.div`
    width: 1350px;
`

export const  SectionAllServices = styled.div`
    padding: 5rem 0;
`

export const  GroupTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.3rem;
    padding: 0 0 3rem;
`

export const  Title = styled.h2`
    color: #181a1e;
    font: 600 2.2rem "Circular", sans-serif;
    text-align: center;
`

export const  Text = styled.h4`
    color: #54606c;
    font: 500 1.1rem "Circular", sans-serif;
    text-align: center;
`

export const  ServicesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(4,1fr);
    grid-gap: 2rem;
    width: 100%;

    .services-item {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        border: 2px solid #60a4fca6;
        border-radius: .5rem;
        padding: 2rem;

        .services-item-title {
            color: #60a4fc;
            font: 500 1.5rem "Circular", sans-serif;
        }

        .services-item-text {
            color: #54606c;
            font: 400 1rem "Circular", sans-serif;
            margin: 0 0 .3rem;
        }

        .services-item-button {
            color: #60a4fc;
            font: 400 1rem "Circular", sans-serif;
        }

        &:hover {
            border-color: #60a4fc;
            cursor: pointer;
        }

        &.active-card {
            background-color: #60a4fc;
            border-color: #60a4fc;

            .services-item-title, .services-item-text {
                color: #FFFFFF;
            }

            .services-item-button {
                color: #ffffff80;
            }
        }
    }
`