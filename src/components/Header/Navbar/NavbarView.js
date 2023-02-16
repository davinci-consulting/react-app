import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { NavbarData } from "../../../data/Navbar"
import * as Styled from "./NavbarStyle"

export default function Navbar() {
    const [isScroll, setIsScroll] = useState('')

    const listenScrollEvent = () => {
        window.scrollY > 20 ? setIsScroll('is-scroll') : setIsScroll('')
    }

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        }
    }, [])

    return (
        <Styled.Navbar className={isScroll}>
            <Styled.Container>
                <Styled.Logo>davinci-consulting</Styled.Logo>
                <Styled.LinkItems>
                    {NavbarData.map((item, index) => {
                        return <Link activeClass="active" className="link-item" to={item.to} spy={true} smooth={true} offset={-95} duration={500} key={index}>{item.name}</Link>
                    })}
                </Styled.LinkItems>
            </Styled.Container>
        </Styled.Navbar>
    )
}