import { Link, NavLink } from "react-router-dom"
import * as Styled from "./NavbarStyle"

export const Navbar = () => {
    return (
        <Styled.Navbar>
            <Styled.Container>
                <NavLink to="/">
                    <Styled.Logo src="/assets/images/logo.svg" />
                </NavLink>
                <Styled.NavList>
                        <Link to="/" >
                            <Styled.NavItem>Home</Styled.NavItem>
                        </Link>
                        <Link to="/about" >
                            <Styled.NavItem>About</Styled.NavItem>
                        </Link>
                        <Link to="/services">
                            <Styled.NavItem>Services</Styled.NavItem>
                        </Link>
                        <Link to="/careers">
                            <Styled.NavItem>Careers</Styled.NavItem>
                        </Link>
                        <Link to="/contact">
                            <Styled.NavItem>Contact</Styled.NavItem>
                        </Link>
                        <Link to="/intern">
                            <Styled.NavItem>Intern</Styled.NavItem>
                        </Link>
                </Styled.NavList>
            </Styled.Container>
        </Styled.Navbar>
    )
}