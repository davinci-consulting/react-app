import * as Styled from "./AboutPromoStyle"

export const AboutPromo = () => {
    return(
        <Styled.AboutPromo>
            <Styled.Container>
                <Styled.TitleGroup>
                     <Styled.WhiteTitle>Happy customers</Styled.WhiteTitle>
                     <Styled.BlackTitle>use davinci-consulting</Styled.BlackTitle>
                </Styled.TitleGroup>
                <Styled.NumberContainer>
                    <Styled.NumberWrapper>
                        <Styled.Number>€10,000</Styled.Number>
                        <Styled.Text>earn</Styled.Text>
                    </Styled.NumberWrapper>
                    <Styled.NumberWrapper>
                        <Styled.Number>100,000</Styled.Number>
                        <Styled.Text>happy customers</Styled.Text>
                    </Styled.NumberWrapper>
                    <Styled.NumberWrapper>
                        <Styled.Number>300,000</Styled.Number>
                        <Styled.Text>products created</Styled.Text>
                    </Styled.NumberWrapper>
                </Styled.NumberContainer>
            </Styled.Container>
        </Styled.AboutPromo>
    )
}