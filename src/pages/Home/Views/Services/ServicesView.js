import * as Styled from "./ServicesStyle"
import { ServicesData } from '../../../../data/Services'

export default function Services() {
    return (
        <Styled.Services id="services">
            <Styled.Container>
                <Styled.TitleGroup>
                     <Styled.BlackTitle>Services</Styled.BlackTitle>
                </Styled.TitleGroup>
                <Styled.ItemList>
                    {ServicesData.map((service, index) => {
                        return <Styled.ItemContainer key={index} style={{ backgroundImage: `url(${service.image})` }}>
                            <div className="text-content-wrapper">
                                <div className="text-content-title">{service.title}</div>
                                <div className="text-content-text">{service.text}</div>
                            </div>
                        </Styled.ItemContainer>
                    })}
                </Styled.ItemList>
            </Styled.Container>
        </Styled.Services>
    )
}