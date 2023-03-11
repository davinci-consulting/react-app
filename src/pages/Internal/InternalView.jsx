import { Link } from "react-router-dom"
import { InternalData } from "../../data/Internal"
import * as Styled from "./InternalStyle"

export const Internal = () => {
    return (
        <Styled.Internal>
            <Styled.Container>
                <Styled.SectionAllServices>
                    <Styled.GroupTitle>
                        <Styled.Title>Kajabi is everything you need,<br />no plugins or integrations required</Styled.Title>
                        <Styled.Text>Here’s what you get with every single Kajabi plan:</Styled.Text>
                    </Styled.GroupTitle>
                    <Styled.ServicesWrapper>
                        {InternalData.map((internal, index) => {
                            return <Link key={index} to={internal.to} className="services-item">
                                <h2 className="services-item-title">{internal.title}</h2>
                                <p className="services-item-text">{internal.text}</p>
                                <span className="services-item-button">Explore →</span>
                            </Link>
                        })}
                    </Styled.ServicesWrapper>
                </Styled.SectionAllServices>
            </Styled.Container>
        </Styled.Internal>
    )
}