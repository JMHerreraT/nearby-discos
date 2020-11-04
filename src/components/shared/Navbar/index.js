import React,{useState} from 'react'
import {FaBars} from 'react-icons/fa'   
import Modal from '../Modal';
import Tooltip from '../Tooltip';
import { MobileIcon, Nav, NavbarContainer, NavBtnClassic, /* NavBtnLink, */ NavButton, NavItem, NavLinks, NavLogoContainer, NavMenu, NavLogoImage } from './NavbarElements';
import logo from '../../../images/logo-green.png';

const Navbar = ({toggle}) => {

    const [showModal,setShowModal] = useState(false);
    const [showTooltip,setShowTooltip] = useState(false);

    // const openModal = () => {
    //     setShowModal(prev => !prev);
    // };

    const openTooltip = () => {
        setShowTooltip(prev => !prev);
    }

    return (
      <>
        <Nav>
            <NavbarContainer>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="inicio">Inicio</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="calendario-eventos">Calendario de eventos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="galeria">Galeria</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavLogoContainer to ="/">
                    <NavLogoImage src={logo}/>
                </NavLogoContainer>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="contacto">Contacto</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavButton>
                            {/* <NavBtnLink onClick={openModal}>Cuenta</NavBtnLink> */}
                            <NavBtnClassic onClick={openTooltip}>Cuenta</NavBtnClassic>
                        </NavButton>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contacto">ES</NavLinks>
                    </NavItem>
                </NavMenu>                
            </NavbarContainer>
        </Nav>
        <Tooltip showTooltip={showTooltip} setShowTooltip={setShowTooltip} type={`selected`} elements = {
                <>
                    <ul>
                        <li>Ingreso</li>
                        <li>Registro</li>
                    </ul>
                </>
        }/>
        <Modal showModal={showModal} setShowModal={setShowModal} type={`info`}/>
      </>  
    );
}

export default Navbar;
