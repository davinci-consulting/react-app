import { ArrowRightLine } from "../../Icons/IconsView"
import * as Styled from "./HeroStyle"

export default function Hero() {
    return (
        <Styled.Hero>
            <Styled.Container>
                <Styled.Content>
                    <Styled.Title>Business Advisory Services </Styled.Title>
                    <Styled.Subtitle>Disaster recovery planning, business continuity management, and disaster recovery.</Styled.Subtitle>
                    <Styled.ButtonGroup>
                        <Styled.Button primary>Get in Touch <ArrowRightLine width="1.5rem" height="1.5rem" fill="none" stroke="#FFFFFF" strokeWidth="2px" /></Styled.Button>
                        <Styled.Button>Learn More</Styled.Button>
                    </Styled.ButtonGroup>
                </Styled.Content>
            </Styled.Container>
        </Styled.Hero>
    )
}