import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
    height: 105px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    z-index: 10;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;

    background-color: ${({navActive}) => (navActive? '#0bef9a8f': '#0bef9b00')};
    box-shadow: ${({navActive}) => (navActive? '0 5px 10px 0 #0bef9a8f': '#0bef9b00')};
    -webkit-box-shadow: ${({navActive}) => (navActive? '#0bef9a8f':'#0bef9b00')};
    transition: background-color 150ms ease-in,box-shadow 150ms ease-in,-webkit-box-shadow 150ms ease-in;   

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;            
    /* padding: 0 24px; */
    max-width: calc(25%/2);
    text-transform: capitalize;
`

export const NavLogoContainer = styled(LinkRouter)`
    color: #FEE7E9;
    cursor: pointer;
    font-size: 1.5rem;
    display:flex;
    align-items: center;
    /* margin-left:24px; */
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        text-align: center;
        /* padding-left: 132px; */
        align-self: center;
        position: absolute;
        left: 0;
        top: 20px;
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

export const NavLeftMenu = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    position: absolute;
    left: 12%;
    top: 40%;
    margin-left: -100px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavMidMenu = styled.div`
    display:flex; 
    flex-direction:row; 
    justify-content: space-between;
`

export const NavRightMenu = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    position: absolute;        
    right: 12%;
    top: 23%;
    margin-right: -100px;
    @media screen and (max-width: 768px) {
        display: none;
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
        color:#CE94FF;

    }
`

export const NavButton = styled.nav`
    display:flex;
    align-items:center;
    border: 1px solid;
    border-color: var(--c-active);
    border-radius: 5px;
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
        color: var(--c-white);
    }
`




