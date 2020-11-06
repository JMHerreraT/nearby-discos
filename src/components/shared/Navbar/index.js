import React,{useState} from 'react'
import {FaBars, FaTimes, FaUser} from 'react-icons/fa'   
import Modal from '../Modal';
import Tooltip from '../Tooltip';
import { MobileIcon, 
    Nav, 
    NavbarContainer,
    NavBtnClassic, 
    /* NavBtnLink, */ 
    NavButton, 
    NavItem, 
    NavLinks, 
    NavLogoContainer, 
    NavMenu, 
    NavLogoImage, 
    NavRightMenu,
    NavLeftMenu,
    NavMidMenu
} from './NavbarElements';
import logo from '../../../images/logo-green.png';
import { MdBusiness, MdPerson } from 'react-icons/md';

const Navbar = ({toggle}) => {

    const [showModal,setShowModal] = useState(false);
    const [showTooltip,setShowTooltip] = useState(false);
    const [navActive, setNavActive] = useState(false);

    // const openModal = () => {
    //     setShowModal(prev => !prev);
    // };

    const openTooltip = () => {
        setShowTooltip(prev => !prev);
    }  
    
    const changeBackground = () => {
        if(window.scrollY >= 38) {
            setNavActive(true);
        } else {    
            setNavActive(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
      <>
        <Nav navActive = {navActive? true: false}>
            <NavbarContainer>
                {/* <NavLeftMenu> */}
                    <NavLeftMenu>
                        <NavItem>
                            <NavLinks to="inicio"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >Inicio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="nosotros"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >Nosotros</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="eventos"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >eventos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="clientes"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >nuestros clientes</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to="servicios"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >Servicios</NavLinks>
                        </NavItem> */}
                    </NavLeftMenu>
                    <NavLogoContainer to ="/">
                        <NavLogoImage width="186" height="97" src={logo}/>
                    </NavLogoContainer>
                <MobileIcon onClick={toggle}>
                    <FaBars/>                
                </MobileIcon>
                    <NavRightMenu>
                        <NavItem>
                            <NavLinks to="reservas"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >Reservas</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="testimonios"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >Testimonios</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contacto"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >Contacto</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavButton>
                                {/* <NavBtnLink onClick={openModal}>Cuenta</NavBtnLink> */}
                                <NavBtnClassic onClick={openTooltip}>
                                    <FaUser/> Cuenta
                                </NavBtnClassic>
                                <Tooltip showTooltip={showTooltip} setShowTooltip={setShowTooltip} type={`account`} elements = {
                                        <>
                                            <ul>
                                                <li><MdPerson/> Cliente</li>
                                                <li><MdBusiness/> Empresa</li>
                                            </ul>
                                        </>
                                }/>
                            </NavButton>
                        </NavItem>
                    </NavRightMenu>
                {/* </NavRightMenu>                 */}
            </NavbarContainer>
        </Nav>
        
        <Modal showModal={showModal} setShowModal={setShowModal} type={`info`}/>      
      </>  
    );
}

export default Navbar;
