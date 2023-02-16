import * as Styled from "./AboutStyle"
import AboutImage from "../../../../images/u3hmzw5U.jpg"
import { ArrowRightLine } from "../../../../components/Icons/IconsView"
import { NavLink } from "react-router-dom"

export default function About() {
    return(
        <Styled.About id="about">
            <Styled.Container>
                <Styled.ImageContent>
                    <Styled.Image src={AboutImage} />
                    <Styled.ImageAbsolute />
                </Styled.ImageContent>
                <Styled.TextWrapper>
                    <Styled.TextContent>
                        <Styled.Title>We are an it-consulting company.</Styled.Title>
                        <Styled.Subtitle>Owning more than hundred years experience in all areas of IT.</Styled.Subtitle>
                        <Styled.Paragraph>
                            A company's most valuable asset is its people. We are proud to have a highly motivated and qualified team that supports our customers in reaching their goals. Our team members have the right mix of technological expertise and deep understanding of customer businesses. They work diligently every day to ensure our customers' projects are successful.
                            <br /><br />
                            We aim to be one of the leading IT service providers in the world and are working non stop on delivering the required service and value to our customers. We are committed in helping our customers achieve their business goals through innovative ideas, forward-thinking strategies, and perfectly tailored IT solutions. Our success is built on the passion of our people – we would be nothing without the hard work and dedication of our talented team members. We value team-work and was able to create a great atmosphere and team-spirit for which we continuously look to expand it with talented new work colleagues.
                        </Styled.Paragraph>
                        <NavLink className="button-group" to="/about">
                            <Styled.ButtonIcon>
                                <ArrowRightLine width="1.5rem" height="1.5rem" fill="none" stroke="#FFFFFF" strokeWidth="2px" />
                            </Styled.ButtonIcon>
                            <Styled.ButtonText>More details</Styled.ButtonText>
                        </NavLink>
                    </Styled.TextContent>
                </Styled.TextWrapper>
            </Styled.Container>
        </Styled.About>
    )
}