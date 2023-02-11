import styled from "styled-components"

export const Navbar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 2rem 0;
    transition: all .3s;
    z-index: 6;

    &.is-scroll {
        background-color: #FFFFFF;
        box-shadow: 0 0 10px 0 #00000014;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1350px;
`

export const Logo = styled.span`
    color: #60a4fc;
    font: 600 1.9rem/1 "Poppins", sans-serif;
    letter-spacing: 0.8px;
`

export const LinkItems = styled.div`
    display: flex;
    gap: 1.5rem;
`

export const LinkItem = styled.span`
    color: #222222;
    font: 500 1rem "Open Sans", sans-serif;

    &.active {
        color: #60a4fc;
    }
`