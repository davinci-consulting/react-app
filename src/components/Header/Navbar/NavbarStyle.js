import styled from "styled-components"

export const Navbar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid transparent;
    padding: 2rem 0;
    transition: all .3s;
    z-index: 6;

    &.is-scroll {
        background-color: #FFFFFF;
        border-color: #0000000f;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1350px;
`

export const Logo = styled.span`
    background: -webkit-linear-gradient(180deg, #222222 61%, #60a4fc 60%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font: 600 1.9rem/1 "Poppins", sans-serif;
    letter-spacing: 0.8px;
`

export const LinkItems = styled.div`
    display: flex;
    gap: 1.5rem;
`

export const LinkItem = styled.span`
    color: #222222;
    font: 400 1rem "Roboto", sans-serif;

    &.active {
        color: #60a4fc;
    }
`