import React, {useState} from 'react';
import Video from '../../videos/concert-loop.mp4';
import Image from '../../images/bg.jpg'
import { EventsBg, EventsContainer, ImageBg,  EventsDetail, EventsP, EventsH2, EventsPSubTitle, EventsTable } from './EventsElements';


function Events() {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
        <EventsContainer id="eventos">
            <EventsBg>               
                <ImageBg src={Image} type="image/jpg image/png"/>
            </EventsBg>
            <EventsDetail>
                <EventsP>
                Fechas de nuestros
                </EventsP>
                <EventsH2>
                    PR&Oacute;XIMOS EVENTOS
                </EventsH2>
                <EventsPSubTitle>
                View our event calendar to see upcoming events. Purchase tickets, VIP Bar Cards, or reserve VIP tables with bottle service.
                </EventsPSubTitle>
            </EventsDetail>
            {/* <EventsTable>

            </EventsTable>             */}
        </EventsContainer>
        </>
    )
}

export default Events
