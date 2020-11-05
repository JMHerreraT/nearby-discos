//rafce

import React, {useState} from 'react';
import Video from '../../videos/concert-loop.mp4';
import Image from '../../images/bg.jpg'
import { HeroBg, HeroContainer, VideoBg, ImageBg, HeroButtonWrapper, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../shared/Button/ButtonElements';



const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
        <HeroContainer id="home">
            <HeroBg>
                {/* <VideoBg autoPlay loop muted src={Video} type = "video/mp4"/> */}
                <ImageBg src={Image} type="image/jpg image/png"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Nearby Discos te lo facilita
                </HeroH1>
                <HeroP>
                 Ofrecemos las mejores ofertas de discotecas, bares, nightclubs y m&aacute;s.
                </HeroP>
                <HeroButtonWrapper>
                    <Button to="calendario-eventos" 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"                    
                    >
                        Pruebalo! {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroButtonWrapper>
            </HeroContent>
        </HeroContainer>
        </>
    )
}

export default HeroSection
