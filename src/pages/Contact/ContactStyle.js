import styled from "styled-components";

export const Contact = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    padding: 8rem 0 0;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1350px;
`

export const Form = styled.div`
    display: flex;
    align-items: center;
    gap: 10rem;
    width: 100%;
    margin: 0 0 5rem;
`

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 50%;
`

export const TitleGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 100%;
    margin: 0 0 2rem;
`

export const Title = styled.div`
    color: #222222;
    font: 500 3rem "Roboto", sans-serif;
`

export const Subtitle = styled.div`
    color: #222222;
    font: 400 1.2rem "Roboto", sans-serif;
`

export const MultipleItem = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
`

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 100%;
`

export const Label = styled.label`
    color: #222222;
    font: 400 1.1rem "Roboto", sans-serif;
`

export const Input = styled.input`
    border: 1px solid #DADADA;
    border-radius: .3rem;
    padding: 1rem;
    color: #222222;
    font: 400 1.1rem "Roboto", sans-serif;

    &:focus {
        border-color: #a19e9e;
    }
`

export const Textarea = styled.textarea`
    height: 170px;
    border: 1px solid #DADADA;
    border-radius: .3rem;
    padding: 1rem;
    resize: none;
    color: #222222;
    font: 400 1.1rem "Roboto", sans-serif;
`

export const Button = styled.button`
    background-color: #60a4fc;
    border-radius: .3rem;
    width: 100%;
    padding: 1rem;
    opacity: 1;
    color: #FFFFFF;
    font: 400 1.1rem "Roboto", sans-serif;
    transition: .3s;

    &:disabled {
        opacity: .5;
        
        &:hover {
            background-color: #60a4fc;
            cursor: context-menu;
        }

        &:active {
            background-color: #60a4fc;
        }
    }

    &:hover {
        background-color: #5398f1;
        cursor: pointer;
    }

    &:active {
        background-color: #377edb;
    }
`

export const MapContent = styled.div`
    position: relative;
    width: 50%;
    height: 670px;
`

export const Map = styled.div`
    background-color: #ccc;
    width: 100%;
    height: 100%;
`

export const MapMask = styled.div`
    position: absolute;
    top: -15px;
    right: -15px;
    background-color: #60a4fc;
    width: 50%;
    height: 30%;
    z-index: -1;
`

export const LocationsContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const Locations = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 3rem 6rem;
`

export const LocationsSubtitle = styled.div`
   color: #444444;
    font: 500 1.2rem "Roboto",sans-serif;
    margin: 0 0 .5rem;
`

export const LocationsTitle = styled.div`
    color: #222222;
    font: 500 1.8rem "Roboto", sans-serif;
    margin: 0 0 1.1rem;
`

export const LocationsText = styled.div`
    color: #444444;
    font: 400 1.2rem "Roboto", sans-serif;
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    max-width: 240px;
`

export const City = styled.div`
    color: #222222;
    font: 500 1.2rem "Roboto", sans-serif;
`

export const Address = styled.div`
    color: #444444;
    font: 400 1rem "Roboto", sans-serif;
`