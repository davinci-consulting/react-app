import { NavLink } from "react-router-dom"
import { Link } from "react-scroll"
import { ArrowRightLine } from "../../Icons/IconsView"
import * as Styled from "./HeroStyle"

export default function Hero() {
    return (
        <Styled.Hero id="hero">
            <Styled.Container>
                <Styled.Content>
                    <Styled.Title>Business Advisory Services </Styled.Title>
                    <Styled.Subtitle>Disaster recovery planning, business continuity management, and disaster recovery.</Styled.Subtitle>
                    <Styled.ButtonGroup>
                        <NavLink className="hero-btn" to="/contact">Get in Touch <ArrowRightLine width="1.5rem" height="1.5rem" fill="none" stroke="#FFFFFF" strokeWidth="2px" /></NavLink>
                        <Link className="hero-btn secondary" to="about" spy={true} smooth={true} offset={-95} duration={500}>Learn more</Link>
                    </Styled.ButtonGroup>
                </Styled.Content>
            </Styled.Container>
        </Styled.Hero>
    )
}