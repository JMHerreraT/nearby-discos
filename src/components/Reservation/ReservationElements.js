import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const ReservationContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    width: 100%;
    height: auto;
    z-index: 1;
    position: relative;
    padding: 0 30px;
`;



export const ReservationLeftWrapper = styled.div`
    display: flex;
    flex-direction: column;    
    height: 100%;
    width: 100%;
    z-index: 1;
    padding-left: 20px;
    
`;

export const ReservationLefttP = styled.p`
    font-weight: var(--t-tertiary-font-weight);
    margin: 0;
    white-space: nowrap;
    color: var(--c-active);
    line-height: 1em;
    width: auto;
    text-align: left;
    font-size: 35px;
    margin-bottom: 18px;
    padding-left: 50px;
`;

export const ReservationLefttH2 = styled.h2`
        color: var(--c-light);
        font-weight: 700;
        font-family: var(--t-secondary-font-family);
        margin-top: 24px;
        text-align: left;
        max-width: 600px;
        // text-shadow: 0 0 26px var(--c-active),0 0 26px rgba(var(--ca-alter2),0.52);
        line-height: 1.1;
        -webkit-letter-spacing: 3.18px;
        -moz-letter-spacing: 3.18px;
        -ms-letter-spacing: 3.18px;
        letter-spacing: 3.18px;
        font-size: 50px;
        padding-left: 50px;
        margin-bottom: 18px;
`;

export const ReservationLeftPSubtitle = styled.p`
    font-family: var(--t-primary-font-family);
    font-weight: var(--t-primary-font-weight);
    margin: 0;
    color: var(--c-light);
    line-height: 1em;
    font-size: 20px;
    line-height: 1em;
    padding-left: 50px;
    text-align: initial;
    margin-bottom: 18px;
`;

export const ReservationRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: var(--c-black);
    text-shadow: 0 0 26px var(--c-active),0 0 26px rgba(var(--ca-alter2),.52);
`;

export const ReservationRightH2 = styled.h2`

`;

export const ReservationBackground = styled.div`
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