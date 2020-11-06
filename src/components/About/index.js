//rafce

import React, {useState} from 'react';
import Video from '../../videos/concert-loop.mp4';
import Image from '../../images/bg.jpg'
import { AboutBg, AboutContainer, VideoBg, ImageBg, AboutButtonWrapper, AboutContent, AboutH1, AboutP, ArrowForward, ArrowRight, AboutH2, AboutPSubTitle } from './AboutElements';
import { Button } from '../shared/Button/ButtonElements';



const About = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
        <AboutContainer id="nosotros">
            <AboutBg>               
                <ImageBg src={Image} type="image/jpg image/png"/>
            </AboutBg>
            <AboutContent>
                <AboutP>
                No.1 en acceso a centros de entretenimiento
                </AboutP>
                <AboutH2>
                    SOBRE NOSOTROS
                </AboutH2>
                <AboutPSubTitle>
                Djo , born of the namesake catch phrase, “1 of a kind,” has endured continuous waves of competition and outlasted the rise and fall of countless nightlife trends. Located on 17th street in the heart of Chelsea, it remains at the center of New York City nightlife culture.
                </AboutPSubTitle>
                <AboutButtonWrapper>
                    <Button to="/" 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"                    
                    >
                        Pruebalo! {hover ? true:false}
                    </Button>
                </AboutButtonWrapper>
            </AboutContent>
        </AboutContainer>
        </>
    )
}

export default About
