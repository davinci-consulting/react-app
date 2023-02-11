import { useState, useEffect } from "react"
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
                    <Styled.LinkItem className="active">Home</Styled.LinkItem>
                    <Styled.LinkItem>About</Styled.LinkItem>
                    <Styled.LinkItem>Services</Styled.LinkItem>
                    <Styled.LinkItem>Feedbacks</Styled.LinkItem>
                    <Styled.LinkItem>Contact</Styled.LinkItem>
                    <Styled.LinkItem>Careers</Styled.LinkItem>
                    <Styled.LinkItem>Intern</Styled.LinkItem>
                </Styled.LinkItems>
            </Styled.Container>
        </Styled.Navbar>
    )
}