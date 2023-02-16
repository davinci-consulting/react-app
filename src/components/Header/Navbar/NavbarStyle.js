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
    transition: all .2s;
    z-index: 6;

    &.is-scroll {
        background-color: #FFFFFF;
        border-color: #e5e9ed;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1350px;

    .logo {
        background: -webkit-linear-gradient(180deg, #181a1e 61%, #60a4fc 60%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font: 600 1.9rem/1 "Poppins", sans-serif;
        letter-spacing: 0.8px;
    }
`

export const LinkItems = styled.div`
    display: flex;
    gap: 1.5rem;

    .link-item {
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
    }
`