import { NavLink } from "react-router-dom"
import { ArrowRightLine } from "../../components/Icons/IconsView"
import AboutImage from "../../images/Lks7vei.jpg"
import HiringImage from "../../images/g1Kr4Ozfoac.jpg"
import * as Styled from "./AboutStyle"

export default function About() {
    return (
        <Styled.About>
            <Styled.Container>
                <Styled.SectionHead>
                    <Styled.HeadPreHeadline>About davinci-consulting</Styled.HeadPreHeadline>
                    <Styled.HeadHeadline>We’re creating a world where technology is no longer a barrier to building a successful business online</Styled.HeadHeadline>
                    <Styled.HeadImageWrapper>
                        <Styled.HeadImage src={AboutImage} />
                        <Styled.HeadImageOver />
                    </Styled.HeadImageWrapper>
                </Styled.SectionHead>
                <Styled.SectionSummary>
                    <Styled.SummaryTitle>Kajabi’s industry-leading all-in-one platform makes it simple to create a successful business online.</Styled.SummaryTitle>
                    <Styled.SummaryParagraph>
                    Since launching in 2010, Kajabi has empowered over 50,000 knowledge entrepreneurs in 120 countries to serve 60 million students and make over $4 billion in sales.
                    <br /><br />
                    By putting all the pieces of a successful business in one convenient platform, Kajabi let’s knowledge entrepreneurs (like you!) get started and grow faster. As Kajabi CEO Ahad Khan explains, “Kajabi helps serious business owners get unstuck and just keep going.”
                    </Styled.SummaryParagraph>
                </Styled.SectionSummary>
                <Styled.SectionMission>
                    <Styled.MissionPreHeadline>Our mission</Styled.MissionPreHeadline>
                    <Styled.MissionHeadline>Empower knowledge entrepreneurs who are serious about their business to achieve success online.</Styled.MissionHeadline>
                </Styled.SectionMission>
                <Styled.SectionHiring>
                    <Styled.HiringTextContainer>
                        <Styled.HiringTextWrapper>
                            <Styled.HiringText>Join <Styled.HiringBoldText>davinci-consulting</Styled.HiringBoldText></Styled.HiringText>
                            <NavLink to="/careers" className="hiring-button">Careers <ArrowRightLine width="22px" height="22px" fill="none" stroke="#000" strokeWidth="2px" /> </NavLink>
                        </Styled.HiringTextWrapper>
                    </Styled.HiringTextContainer>
                    <Styled.HiringImageWrapper>
                        <Styled.HiringImage src={HiringImage} />
                        <Styled.HiringImageOver />
                    </Styled.HiringImageWrapper>
                </Styled.SectionHiring>
            </Styled.Container>
        </Styled.About>
    )
}