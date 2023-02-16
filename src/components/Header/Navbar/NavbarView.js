import { useState, useEffect } from "react"
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
                        return <Styled.LinkItem key={index}>{item.name}</Styled.LinkItem>
                    })}
                </Styled.LinkItems>
            </Styled.Container>
        </Styled.Navbar>
    )
}