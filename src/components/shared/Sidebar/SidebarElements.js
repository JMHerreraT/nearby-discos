import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #000;
    display: grid;
    align-items: center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => ( isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: var(--c-white);
`;

export const Icon = styled.div`
    position: absolute;
    top: 2.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: var(--c-white);    
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: var(--c-white);
    cursor: pointer;
    
    &:hover{
        color:#ff4e5b;
        transition: 0.2s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const SidebarButtonWrapper = styled.div`
    display: flex;
    justify-content: center; 
    /* border: 1px solid;
    border-color: #ff4e5b;
    border-radius: 5px; */
    padding: 3px;
    
`

export const SidebarButtonLink = styled(LinkRouter)`
    border-radius: 5px;
    background: transparent;
    white-space: nowrap;
    color: var(--c-white);
    font-size: 15px;
    line-height: 20px;
    outline: none;
    padding: 12px 35px;
    border: 2px solid;  
    border-color: #ff4e5b;
    letter-spacing: 1.13px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ff4e5b;
        color: var(--c-white);
    }
`