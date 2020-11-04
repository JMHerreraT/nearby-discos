import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
    background: #000;
    height: 105px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    /* padding: 0 24px; */
    max-width: 1100px;
    text-transform: uppercase;
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
        padding-left: 132px;
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
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #FEE7E9;
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
        color:#ff4e5b;
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
    border-color: #ff4e5b;
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
    color: #fff;
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
    // text-transform: capitalize;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ff4e5b;
        color: #fff;
    }
`

export const NavBtnClassic = styled.div`
    border-radius: 5px;
    background: transparent;
    white-space: nowrap;
    color: #fff;
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
    // text-transform: capitalize;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ff4e5b;
        color: #fff;
    }
`