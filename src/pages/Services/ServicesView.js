import * as Styled from "./ServicesStyle"
import { ServicesData } from '../../data/Services'

export default function Services() {
    return (
        <Styled.Services>
            <Styled.Container>
                <Styled.TitleGroup>
                     <Styled.Title>Check out</Styled.Title>
                     <Styled.ColorfulTitle>Services</Styled.ColorfulTitle>
                </Styled.TitleGroup>
                <Styled.ItemList>
                    {ServicesData.map((service, index) => {
                        return <Styled.ItemContainer key={index}>
                            {service.icon}
                            <Styled.ItemTitle>{service.title}</Styled.ItemTitle>
                            <Styled.ItemText>{service.text}</Styled.ItemText>
                        </Styled.ItemContainer>
                    })}
                </Styled.ItemList>
            </Styled.Container>
        </Styled.Services>
    )
}