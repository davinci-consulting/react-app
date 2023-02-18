import styled from "styled-components"

export const Services = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8rem 0 0;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1350px;
`

export const TitleGroup = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin: 0 0 2rem;
`

export const BlackTitle = styled.div`
    color: #181a1e;
    font: 600 2.5rem "Circular", sans-serif;
`

export const ItemList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 2rem;
    width: 100%;
`

export const ItemContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 18rem;
    height: 20rem;
    background-size: 100%;
    background-position: center;
    box-shadow: 0px 12px 15px 0px #c6c1bd;
    border-radius: 0.5rem;
    transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;

    &::before {
        position: absolute;
        background: #00000099;
        width: 100%;
        height: 100%;
        transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms cubic-bezier(0, 0, 0.2, 1);
        content: '';
    }

    .text-content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        padding: 1.5rem;
        z-index: 1;
        transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

        .text-content-title {
            color: #fff;
            font: 600 1.4rem "Circular", sans-serif;
        }

        .text-content-text {
            display: none;
            opacity: 0;
            visibility: hidden;
            color: #fff;
            font: 400 1.05rem "Circular", sans-serif;
            margin: .5rem 0 0;
            transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1),opacity 100ms cubic-bezier(0, 0, 0.2, 1);
        }
    }

    &:hover {
        background-size: 105%!important;
        transform: scale(1.02);
        box-shadow: 0px 12.3px 15.37px 0px #3a3632;
        cursor: pointer;

        .text-content-wrapper {
            transform: translateY(-10%);
            transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
            
            .text-content-text {
                display: block;
                opacity: 1;
                visibility: visible;
            }
        }
    }
`