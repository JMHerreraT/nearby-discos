import styled from 'styled-components'
import {MdClose} from 'react-icons/md'


export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position:fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    &.fade-in {
    opacity: 1;
    transition: opacity linear 0.15s;
    }
    &.fade-out {
    opacity: 0;
    transition: opacity linear 0.15s;
    }
`;

export const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: var(--c-white);
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`;

export const ModalImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: rgba(0, 0, 0, 0.8);   
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    p {
        margin-bottom: 1rem;
    }

    button {
        padding: 10px 24px; 
        background: #141414;
        color: var(--c-white);
        border: none;
    }
`

export const ClosModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;