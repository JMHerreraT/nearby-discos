import React, {useState} from 'react';
import Image from '../../images/bg.jpg'
import { ClientsBg, 
    ClientsContainer, 
    VideoBg, 
    ImageBg, 
    ClientsContent, 
    ClientsP} from './ClientsElements';


const Clients = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
        <ClientsContainer id="clientes">
            <ClientsBg>               
                <ImageBg src={Image} type="image/jpg image/png"/>
            </ClientsBg>
            <ClientsContent>
                <ClientsP>
                Nuestros Clientes
                </ClientsP>
                
            </ClientsContent>
        </ClientsContainer>
        </>
    )
}

export default Clients
