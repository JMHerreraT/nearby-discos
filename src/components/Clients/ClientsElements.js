import { MdArrowForward,MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom'

export const ClientsContainer = styled.div`
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

export const ClientsBg = styled.div`
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

export const ClientsContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    /* padding: 8px 24px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const ClientsP = styled.p`      
    font-family: var(--t-tertiary-font-family);
    font-weight: var(--t-tertiary-font-weight);
    margin: 0;
    text-shadow: 0 0 26px var(--c-active),0 0 26px rgba(var(--ca-alter2),.52);
    white-space: nowrap;
    color: var(--c-light);
    text-align: center;
    line-height: 1em;
    width: auto;
    font-size: 7.5vw;   
    line-height: 1em;
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;
