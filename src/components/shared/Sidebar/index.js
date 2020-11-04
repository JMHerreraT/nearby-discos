import React from 'react'
import { CloseIcon, Icon, /* SidebarButtonLink, SidebarButtonWrapper,*/ SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './SidebarElements'

function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="inicio" onClick={toggle}>Inicio</SidebarLink>
                    <SidebarLink to="calendario-eventos" onClick={toggle}>Calendario de eventos</SidebarLink>
                    <SidebarLink to="galeria" onClick={toggle}>Galeria</SidebarLink>
                    <SidebarLink to="contacto" onClick={toggle}>Contacto</SidebarLink>
                </SidebarMenu>
                {/* <SidebarButtonWrapper>
                    <SidebarButtonLink to="/ingreso">Ingresar</SidebarButtonLink>
                </SidebarButtonWrapper> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
