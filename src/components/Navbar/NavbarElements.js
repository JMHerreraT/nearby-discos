import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
    /* height: 105px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    z-index: 10;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: auto; */

    z-index: 10;
    position: fixed;
    width: 100%;
    height: auto;
    background-color: ${({navActive}) => (navActive? '#0bef9a8f': '#0bef9b00')};
    box-shadow: ${({navActive}) => (navActive? '0 5px 10px 0 #0bef9a8f': '#0bef9b00')};
    -webkit-box-shadow: ${({navActive}) => (navActive? '#0bef9a8f':'#0bef9b00')};
    transition: background-color 150ms ease-in,box-shadow 150ms ease-in,-webkit-box-shadow 150ms ease-in;   

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        width: 100%;
    }
`

export const NavbarContainer = styled.div`    
    text-transform: lowercase;
    display: grid;
    grid-gap: 10px;
    align-items: center;
    justify-items: center;
    /* grid-template-columns: 600px 200px 600px; */
    grid-template-columns: auto auto auto;
    justify-content: center;
`

export const NavLogoContainer = styled(LinkRouter)`
    cursor: pointer;
    @media screen and (max-width: 768px) {
        align-self: center;
    }

`

export const NavLogoImage = styled.img`
    width: auto;
    height: auto;
`

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px){
        display:block;
        position:absolute;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #FEE7E9;
        top: 20px;
        &.FaTimes{
            display: none;
        }
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items:center;
    list-style: none;
    text-align: center;
    margin-right:-22px;

    @media screen and (max-width: 768px) {
        display: none;
    }

     /* Media Query for Mobile Devices */ 
     @media (max-width: 480px) { 
        display: none;
        } 
          
        /* Media Query for low resolution  Tablets, Ipads */ 
        @media (min-width: 481px) and (max-width: 767px) { 
            display: none;
        } 
          
        /* Media Query for Tablets Ipads portrait mode */ 
        @media (min-width: 768px) and (max-width: 1024px){
            display: none; 
          } 
        
          
        /* Media Query for Laptops and Desktops */ 
        @media (min-width: 1025px) and (max-width: 1280px){ 
            display: none;
        } 
          
        /* Media Query for Large screens */ 
        @media (min-width: 1281px) { 
            display: none;
        } 
`

export const NavLeftMenu = styled.ul`
    display: grid;
    grid-auto-columns: 1;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: repeat(5,auto);
    grid-template-rows: 1fr;
    justify-self: center;
    list-style-type: none;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavRightMenu = styled.ul`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4,auto);
    grid-template-rows: 1fr;
    justify-self: center;
    list-style-type: none;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    // height: 80px;
`

export const NavLinks = styled(LinkScroll)`
    color:#FEE7E9;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height:100%;
    cursor:pointer;

    &:hover{
        color:var(--c-active);
        transition: all 0.2s ease-in-out;
    }

    &.active {
        color:var(--c-active);
        transition: all 0.2s ease-in-out;
    }
`

export const NavButton = styled.nav`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    border: 1-px solid;
    padding: 3px;
    @media screen and (max-width:768px) {
        display:none;
    }
`

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 5px;
    background: transparent;
    white-space: nowrap;
    color: var(--c-white);
    font-size: 15px;
    line-height: 20px;
    outline: none;
    padding: 12px 35px;
    border: 2px solid;  
    border-color: var(--c-active);
    letter-spacing: 1.13px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    // text-transform: capitalize;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: var(--c-active);
        color: var(--c-light);
    }
`

export const NavBtnClassic = styled.div`
    border-radius: 5px;
    background: transparent;
    white-space: nowrap;
    color: var(--c-white);
    font-size: 15px;
    line-height: 20px;
    outline: none;
    padding: 12px 14px;
    border: 2px solid;  
    border-color: var(--c-active);
    letter-spacing: 1.13px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    // text-transform: capitalize;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #0bef9294;
        color: var(--c-white);
    }
`




