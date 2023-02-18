import { NavLink } from "react-router-dom"
import { ArrowRightLine } from "../../Icons/IconsView"
import * as Styled from "./HeroStyle"

export default function Hero() {
    return (
        <Styled.Hero id="hero">
            <Styled.Container>
                <Styled.HeroTextContent>
                    <Styled.Title>Collaboration to achieve your aspirations</Styled.Title>
                    <Styled.Subtitle>Our consultants are experts in operations, software, artificial intelligence and more. We are here to help your business shine.</Styled.Subtitle>
                    <Styled.ButtonGroup>
                        <NavLink className="hero-btn" to="/contact">Get in Touch<ArrowRightLine width="1.5rem" height="1.5rem" fill="none" stroke="#FFFFFF" strokeWidth="2px" /></NavLink>
                    </Styled.ButtonGroup>
                </Styled.HeroTextContent>
                <Styled.HeroImageContent>
                    <Styled.HeroImage />
                </Styled.HeroImageContent>
            </Styled.Container>
        </Styled.Hero>
    )
}