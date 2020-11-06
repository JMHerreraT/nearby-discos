import { MdArrowForward,MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';

export const AboutContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    /* Add :before styles */   
    :before {
        content: '';
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: 
        linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.6) 100%
            ),
        linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%, 
            transparent 100%
            );
        z-index: 2;
    } 
`;

export const AboutBg = styled.div`
    position: absolute;    
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
`;

export const AboutContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    /* padding: 8px 24px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const AboutP = styled.p`
    color: var(--c-active);   
    
    font-family: var(--t-tertiary-font-family);
    font-weight: var(--t-tertiary-font-weight);
    text-align: center;
    font-size: 35px;
    line-height: 1em;
    text-shadow: 0 0 26px var(--c-active),0 0 26px rgba(var(--ca-alter2),.52);
    margin-bottom: 0;
    width: 50%;
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const AboutH2 = styled.h2`
    color: var(--c-light);
    font-weight: 700;
    font-family: var(--t-secondary-font-family);
    margin-top: 24px;
    text-align: center;
    max-width: 600px;
    text-shadow: 0 0 26px var(--c-active),0 0 26px rgba(var(--ca-alter2),0.52);
    line-height: 1.1;
    letter-spacing: 3.18px;     
    font-size: 50px;
    /* font-family: var(--t-secondary-font-family);
    margin-top: 24px;
    text-align: center;
    max-width: 600px;
    text-shadow: 0 0 26px var(--c-active),0 0 26px rgba(var(--ca-alter2),0.52);
    color: var(--c-light);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 3.18px; */

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const AboutPSubTitle = styled.p`
    font-size: 18px;
    font-family: var(--t-primary-font-family);
    font-weight: 400;
    line-height: 1.67;
    color: rgba(255,255,255,.8);
    width: 75%;
    margin: 17px 0 14px 0;
`

export const AboutButtonWrapper = styled.div`
    margin-top: 32px;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

export const Button = styled.button`

`



