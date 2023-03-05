import { Suspense } from "react"
import { Link } from "react-router-dom"
import { ArrowRightLine } from "../../components/Icons/IconsView"
import * as Styled from "./AboutStyle"

export const About = () => {
    return (
        <Styled.About>
            <Styled.Container>
                <Styled.SectionHead>
                    <Styled.HeadPreHeadline>About davinci-consulting</Styled.HeadPreHeadline>
                    <Styled.HeadHeadline>We’re creating a world where technology is no longer a barrier to building a successful business online</Styled.HeadHeadline>
                    <Suspense fallback={<Styled.HeadImageWrapper notLoaded />}>
                        <Styled.HeadImageWrapper>
                            <Styled.HeadImage src="/assets/images/about/Lks7vei.svg" />
                            <Styled.HeadImageOver />
                        </Styled.HeadImageWrapper>
                    </Suspense>
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
                            <Link to="/careers">
                                <Styled.HiringButton>Careers <ArrowRightLine width="22px" height="22px" fill="none" stroke="#000" strokeWidth="2px" />
                                </Styled.HiringButton>
                            </Link>
                        </Styled.HiringTextWrapper>
                    </Styled.HiringTextContainer>
                    <Styled.HiringImageWrapper>
                        <Styled.HiringImage src="/assets/images/about/g1Kr4Ozfoac.svg" />
                        <Styled.HiringImageOver />
                    </Styled.HiringImageWrapper>
                </Styled.SectionHiring>
            </Styled.Container>
        </Styled.About>
    )
}