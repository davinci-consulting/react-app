import { NavLink } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import { Link } from "react-scroll"
import CareersImage from "../../images/c6wbSBaYxkY.jpg"
import * as Styled from "./CareersStyle"
import "swiper/css"
import "swiper/css/pagination"

export default function Careers() {
    return (
        <Styled.Careers>
            <Styled.Container>
                <Styled.Hero>
                    <Styled.CareersVideo />
                    <Styled.CareersVideoOver />
                </Styled.Hero>
                <Styled.SectionInfo>
                    <Styled.InfoWrapper>
                        <Styled.InfoGroupTitle>
                            <Styled.InfoWhiteTitle>Work at</Styled.InfoWhiteTitle>
                            <Styled.InfoBlackTitle>davinci-consulting</Styled.InfoBlackTitle>
                        </Styled.InfoGroupTitle>
                        <Styled.InfoText>We're a multicultural, diverse group of people working to develop the best education in the world and make it universally available.</Styled.InfoText>
                    </Styled.InfoWrapper>
                </Styled.SectionInfo>
                <Styled.SectionTeam>
                <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
                    <SwiperSlide>
                        <Styled.TeamImageWrapper>
                            <Styled.TeamImage src={CareersImage} />
                            <Styled.TeamImageOver />
                        </Styled.TeamImageWrapper>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Styled.TeamImageWrapper>
                            <Styled.TeamImage src={CareersImage} />
                            <Styled.TeamImageOver />
                        </Styled.TeamImageWrapper>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Styled.TeamImageWrapper>
                            <Styled.TeamImage src={CareersImage} />
                            <Styled.TeamImageOver />
                        </Styled.TeamImageWrapper>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Styled.TeamImageWrapper>
                            <Styled.TeamImage src={CareersImage} />
                            <Styled.TeamImageOver />
                        </Styled.TeamImageWrapper>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Styled.TeamImageWrapper>
                            <Styled.TeamImage src={CareersImage} />
                            <Styled.TeamImageOver />
                        </Styled.TeamImageWrapper>
                    </SwiperSlide>
                </Swiper>
                    <Styled.TeamText>Think you’d be a good fit<br />for the Kajabi team?</Styled.TeamText>
                    <Styled.ButtonGroup>
                        <Link role="button" to="open-positions" className="team-btn" spy={true} smooth={true} offset={-80} duration={500}>See open positions</Link>
                        <Link role="button" to="benefits" className="team-btn secondary" spy={true} smooth={true} offset={-80} duration={500}>Benefits</Link>
                    </Styled.ButtonGroup>
                </Styled.SectionTeam>
                <Styled.SectionBenefits id="benefits">
                    <Styled.BenefitsTitle>The well-being of our team comes first.<br/>That’s why we provide:</Styled.BenefitsTitle>
                    <Styled.BenefitsContainer>
                        <Styled.BenefitsItem>Competitive salaries</Styled.BenefitsItem>
                        <Styled.BenefitsItem>Fully paid health benefits</Styled.BenefitsItem>
                        <Styled.BenefitsItem>Flexible vacation policy</Styled.BenefitsItem>
                        <Styled.BenefitsItem>Generous company 401K matching</Styled.BenefitsItem>
                        <Styled.BenefitsItem>HSA contributions</Styled.BenefitsItem>
                        <Styled.BenefitsItem>Equity</Styled.BenefitsItem>
                        <Styled.BenefitsItem>Free training resources</Styled.BenefitsItem>
                        <Styled.BenefitsItem>Free Headspace/Audible account</Styled.BenefitsItem>
                        <Styled.BenefitsItem>Fitness incentive package</Styled.BenefitsItem>
                        <Styled.BenefitsItem>Paid Parental Leave</Styled.BenefitsItem>
                        <Styled.BenefitsItem>A fully-stocked kitchen, including nitro cold brew on tap in office</Styled.BenefitsItem>
                    </Styled.BenefitsContainer>
                </Styled.SectionBenefits>
                <Styled.SectionPositions id="open-positions">
                    <Styled.PositionsGroupTitle>
                        <Styled.PositionTitle>Open positions</Styled.PositionTitle>
                        <Styled.PositionDescription>These are the only positions currently available.</Styled.PositionDescription>
                    </Styled.PositionsGroupTitle>
                    <Styled.PositionsJobWrapper>
                        <Styled.PositionsJob>
                            <Styled.PositionsJobTitle>Business Development</Styled.PositionsJobTitle>
                            <Styled.PositionsJobList>
                                <Styled.PositionsJobItem>
                                    <NavLink className="position-job-item-title">Business Development Lead, Duolingo English Test</NavLink>
                                    <Styled.PositionsJobItemType>Singapore (Remote)</Styled.PositionsJobItemType>
                                </Styled.PositionsJobItem>
                                <Styled.PositionsJobItem>
                                    <NavLink className="position-job-item-title">Business Development Lead, Duolingo English Test</NavLink>
                                    <Styled.PositionsJobItemType>Singapore (Remote)</Styled.PositionsJobItemType>
                                </Styled.PositionsJobItem>
                            </Styled.PositionsJobList>
                        </Styled.PositionsJob>
                        <Styled.PositionsJob>
                            <Styled.PositionsJobTitle>Business Development</Styled.PositionsJobTitle>
                            <Styled.PositionsJobList>
                                <Styled.PositionsJobItem>
                                    <NavLink className="position-job-item-title">Business Development Lead, Duolingo English Test</NavLink>
                                    <Styled.PositionsJobItemType>Singapore (Remote)</Styled.PositionsJobItemType>
                                </Styled.PositionsJobItem>
                                <Styled.PositionsJobItem>
                                    <NavLink className="position-job-item-title">Business Development Lead, Duolingo English Test</NavLink>
                                    <Styled.PositionsJobItemType>Singapore (Remote)</Styled.PositionsJobItemType>
                                </Styled.PositionsJobItem>
                            </Styled.PositionsJobList>
                        </Styled.PositionsJob>
                    </Styled.PositionsJobWrapper>
                </Styled.SectionPositions>
            </Styled.Container>
        </Styled.Careers>
    )
}