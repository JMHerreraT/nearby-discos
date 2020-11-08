import React from 'react'
import { ImageBg, ReservationBackground, ReservationContainer, ReservationLeftPSubtitle, ReservationLefttH2, ReservationLefttP, ReservationLeftWrapper, ReservationRightH2, ReservationRightWrapper } from './ReservationElements'
import Background from '../../images/bg5.jpg'
function Reservation() {
    return (
        <ReservationContainer id="reservas">
            <ReservationBackground>
                <ImageBg src={Background}/>
            </ReservationBackground>
            <ReservationLeftWrapper>
                <ReservationLefttP>Preguntas?</ReservationLefttP>
                <ReservationLefttH2>CONTACTANOS</ReservationLefttH2>
                <ReservationLeftPSubtitle>Fill out the form to attend the most anticipated events in the city and get your tickets for the best night party today for you and your friends.</ReservationLeftPSubtitle>
            </ReservationLeftWrapper>
            <ReservationRightWrapper>
                <ReservationRightH2>Quieres reservar?</ReservationRightH2>
            </ReservationRightWrapper>
        </ReservationContainer>
    )
}

export default Reservation
