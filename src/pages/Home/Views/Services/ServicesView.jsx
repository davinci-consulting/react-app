import { Suspense } from "react"
import { Item } from "./Views/ItemView"
import * as Styled from "./ServicesStyle"

export const Services = () => {
    return (
        <Styled.Services>
            <Styled.Container>
                <Styled.TitleGroup>
                     <Styled.BlackTitle>Services</Styled.BlackTitle>
                </Styled.TitleGroup>
                <Styled.ItemList>
                    <Suspense fallback={<Styled.ItemContainer notLoaded />}>
                        <Item />
                    </Suspense>
                </Styled.ItemList>
            </Styled.Container>
        </Styled.Services>
    )
}