import styled from "styled-components"

export const Navbar = styled.nav`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #FFFFFF;
    border-bottom: 1px solid #e5e9ed;
    padding: 2rem 0;
    z-index: 6;
    transition: .2s;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1350px;
`

export const Logo = styled.img`
    width: 300px;
`

export const NavList = styled.div`
    display: flex;
    gap: 1.5rem;
`

export const NavItem = styled.span`
    position: relative;
    padding: 0 0 .3rem;
    color: #54606c;
    font: 400 1.05rem "Circular", sans-serif;
    
    &::after {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #a7a7a7f7;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform .5s;
        content: '';
    }

    &.active {
        color: #60a4fc;

        &::after {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background-color: #60a4fc;
            transform: scaleX(1);
            transform-origin: left;
            transition: transform .5s;
            content: '';
        }
    }

    &:hover {
        color: #60a4fc;
        cursor: pointer;

        &::after {
            background-color: #60a4fc;
            transform: scaleX(1);
            transform-origin: left;
            content: '';
        }
    }
`