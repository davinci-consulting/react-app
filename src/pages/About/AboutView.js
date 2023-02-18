import AboutImage from "../../images/Lks7vei.jpg"
import * as Styled from "./AboutStyle"

export default function About() {
    return (
        <Styled.About>
            <Styled.Container>
                <Styled.SectionText>
                    <Styled.PreHeadline>About Davinci-Consulting</Styled.PreHeadline>
                    <Styled.Headline>We’re creating a world where technology is no longer a barrier to building a successful business online</Styled.Headline>
                    <Styled.ImageContent>
                        <Styled.Image src={AboutImage} />
                        <Styled.ImageAbsolute />
                    </Styled.ImageContent>
                </Styled.SectionText>
                
            </Styled.Container>
        </Styled.About>
    )
}