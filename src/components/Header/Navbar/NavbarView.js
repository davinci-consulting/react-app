import { NavLink } from "react-router-dom"
import * as Styled from "./NavbarStyle"

export default function Navbar() {
    return (
        <Styled.Navbar>
            <Styled.Container>
                <NavLink className="logo" to="/">davinci-consulting</NavLink>
                <Styled.LinkItems>
                        <NavLink className="link-item" to="/" >Home</NavLink>
                        <NavLink className="link-item" to="/about" >About</NavLink>
                        <NavLink className="link-item" to="/services">Services</NavLink>
                        <NavLink className="link-item" to="/careers">Careers</NavLink>
                        <NavLink className="link-item" to="/contact">Contact</NavLink>
                        <NavLink className="link-item" to="/intern">Intern</NavLink>
                </Styled.LinkItems>
            </Styled.Container>
        </Styled.Navbar>
    )
}