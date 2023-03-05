import styled from "styled-components"

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8rem 0;
    border-top: 1px solid #e5e9ed;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1350px;
`

export const Logo = styled.img`
    width: 250px;
    margin: 0 0 1rem;
`

export const LogoText = styled.span`
    width: fit-content;
    margin: 0 0 5rem;
    border-bottom: 1px solid transparent;
    color: #202832;
    font: 400 1rem "Poppins", sans-serif;
`

export const Navigation = styled.div`
    display: flex;
    gap: 10rem;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Title = styled.h2`
    color: #202832;
    font: 500 1rem "Circular", sans-serif;
`

export const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`

export const Link = styled.div`
    color: #64728d;
    font: 400 .95rem "Circular", sans-serif;
    transition: .2s;

    &:hover {
        color: #000;
        cursor: pointer;
    }
`

export const SiteInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 6rem 0 0;
`

export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;

        .social-media-item {
            svg {
                transition: .2s;
                cursor: pointer;
            }

            &:hover {
                svg {
                    fill: #202832;
                }
            }
        }
`

export const Copyrights = styled.div`
    color: #64728d;
    font: 400 1rem "Circular", sans-serif;
`

export const BoldText = styled.span`
    color: #64728d;
    font: 500 1rem "Circular", sans-serif;
`