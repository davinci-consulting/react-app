import React from "react"
import { Navigation, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { ReferencesData } from "../../../../data/References"
import { ChevronLeftArrow, ChevronRightArrow } from "../../../../components/Icons/IconsView"
import * as Styled from "./ReferencesStyle"
import "swiper/css"
import "swiper/css/navigation"

export const References = () => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <Styled.References>
            <Styled.Container>
                <Styled.TitleGroup>
                     <Styled.BlackTitle>References</Styled.BlackTitle>
                </Styled.TitleGroup>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{delay: 2500,disableOnInteraction: false}}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                      }}
                      onSwiper={(swiper) => {
                        setTimeout(() => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current
                            swiper.params.navigation.nextEl = navigationNextRef.current

                            swiper.navigation.destroy()
                            swiper.navigation.init()
                            swiper.navigation.update()
                        })
                    }}
                    modules={[Navigation, Autoplay]}
                    className="swiper-container"
                >
                    {ReferencesData.map((reference, index) => {
                        return <SwiperSlide className="item-container" key={index}>
                            <Styled.ItemImageContainer>
                                { /*<Styled.ItemCategory>{reference.category}</Styled.ItemCategory> */ }
                                <Styled.ItemImage src={reference.image}></Styled.ItemImage>
                                <Styled.ItemMask />
                            </Styled.ItemImageContainer>
                            <Styled.ItemTextContainer>
                                <Styled.ItemTitle>{reference.title}</Styled.ItemTitle>
                                { /*<Styled.ItemText>{reference.text}</Styled.ItemText> */ }
                            </Styled.ItemTextContainer>
                        </SwiperSlide>
                    })}
                </Swiper>
                <Styled.LeftArrow ref={navigationPrevRef}>
                    <ChevronLeftArrow width="43px" height="43px" fill="none" stroke="#00000054" strokeWidth="1.5px" />
                </Styled.LeftArrow>
                <Styled.RightArrow ref={navigationNextRef}>
                    <ChevronRightArrow width="43px" height="43px" fill="none" stroke="#00000054" strokeWidth="2px" />
                </Styled.RightArrow>
            </Styled.Container>
        </Styled.References>
    )
}