import styled from "styled-components"

const Arrow = `
    position: absolute;
    top: 50%;
    display: grid;
    place-content: center;
    width: 4.1rem;
    height: 4.1rem;
    border: 1px solid #00000040;
    border-radius: 100rem;
    transition: .3s;
`

const ArrowHover = `
    &:hover {
        background-color: #0000000d;
        cursor: pointer;
    }
`

export const References = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 0 8rem;

    .swiper-container {
        width: 1350px;
        border-radius: .5rem;

        .item-container {
            position: relative;
            width: 35rem;
            border: 2px solid transparent;
            border-radius: .5rem;
            overflow: hidden;
            transition: all .2s;

            &:hover {
                border-color: #60a4fc;
                cursor: pointer;
            }
        }
    }
`

export const Container = styled.div`
    position: relative;
    width: 1550px;
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

export const LeftArrow = styled.div`
    ${Arrow}
    left: 0;
    ${ArrowHover}
`

export const RightArrow = styled.div`
    ${Arrow}
    right: 0;
    ${ArrowHover}
`

export const ItemImageContainer = styled.div`
    position: relative;
    width: 100%;
`

export const ItemImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ItemMask = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, #60a4fc, transparent 160px);
    z-index: 1;
`

export const ItemTextContainer = styled.div`
    position: absolute;
    left: 16px;
    bottom: 16px;
    display: flex;
    flex-direction: column;
    z-index: 1;
`

export const ItemCategory = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    background: #e5e7eb;
    border-radius: 100rem;
    padding: .2rem .5rem;
    color: #4B5563;
    font: 600 .85rem "Roboto",sans-serif;
`


export const ItemTitle = styled.div`
    color: #FFFFFF;
    font: 600 1.3rem "Roboto", sans-serif;
    margin: 0 0 .5rem;
`

export const ItemText = styled.div`
    color: #f3f3f3;
    font: 500 1rem "Roboto", sans-serif;
`