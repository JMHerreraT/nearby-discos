import React,{useRef, useEffect, useCallback} from 'react';
import {useSpring, animated} from 'react-spring';
import { Background, ClosModalButton, ModalContent, ModalImage, ModalWrapper } from './ModalElements';
import imageModal from '../../../assets/images/bg3.jpg';
const Modal = ({showModal, setShowModal, type}) => {

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)`: `translateY(-100%)`
    })

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false);
        }
    }

    const keyPress = useCallback(e => {
        if( e.key === 'Escape' && showModal) {
            setShowModal(false);
        }
    }, [setShowModal, showModal]);

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress])

    return (
      <>
        { type === 'info' ? (showModal ? (
            <Background ref = {modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                    <ModalWrapper showModal = {showModal}>
                        <ModalImage 
                            src={imageModal} 
                            alt='modal-background'
                        />
                        <ModalContent>
                            <h1>Modal informativo</h1>                                                   
                        </ModalContent>
                        <ClosModalButton aria-label="Cerrar modal" onClick={() => setShowModal(prev=> !prev)}/>
                    </ModalWrapper>
                </animated.div>
            </Background>
        ): null) : (
            <Background>
                <ModalWrapper showModal = {showModal}>
                    <ModalImage 
                        src={imageModal} 
                        alt='modal-background'
                    />
                    <ModalContent>
                        <h1>Modal tipo Formulario</h1>                        
                        <button>Ingresar</button>
                    </ModalContent>
                    <ClosModalButton aria-label="Cerrar modal" onClick={() => setShowModal(prev=> !prev)}/>
                </ModalWrapper>
            </Background>
        ) }
      </>  
    );
}

export default Modal;