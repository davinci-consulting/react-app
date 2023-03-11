import { Link, NavLink } from "react-router-dom"
import * as Styled from "./NavbarStyle"

export const Navbar = () => {
    return (
        <Styled.Navbar>
            <Styled.Container>
                <Link to="/">
                    <Styled.Logo src="/assets/images/logo.svg" />
                </Link>
                <Styled.NavList>
                        <NavLink to="/">
                            <Styled.NavItem className="nav-item">Home</Styled.NavItem>
                        </NavLink>
                        <NavLink to="/about">
                            <Styled.NavItem className="nav-item">About</Styled.NavItem>
                        </NavLink>
                        <NavLink to="/services">
                            <Styled.NavItem className="nav-item">Services</Styled.NavItem>
                        </NavLink>
                        <NavLink to="/careers">
                            <Styled.NavItem className="nav-item">Careers</Styled.NavItem>
                        </NavLink>
                        <NavLink to="/contact">
                            <Styled.NavItem className="nav-item">Contact</Styled.NavItem>
                        </NavLink>
                        <NavLink to="/intern">
                            <Styled.NavItem className="nav-item">Internal</Styled.NavItem>
                        </NavLink>
                </Styled.NavList>
            </Styled.Container>
        </Styled.Navbar>
    )
}