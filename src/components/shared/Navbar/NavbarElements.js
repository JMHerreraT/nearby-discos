import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
    height: 105px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background-color: ${({navActive}) => (navActive? '#0bef9a8f': '#0bef9b00')};
    box-shadow: ${({navActive}) => (navActive? '0 5px 10px 0 #0bef9a8f': '#0bef9b00')};
    -webkit-box-shadow: ${({navActive}) => (navActive? '#0bef9a8f':'#0bef9b00')};
    transition: background-color 150ms ease-in,box-shadow 150ms ease-in,-webkit-box-shadow 150ms ease-in;
    flex-direction: row;
    

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    z-index: 1;
    width: 100%;
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
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #FEE7E9;

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
    top: 25%;
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

// New Header

export const NavUpdated = styled.header`
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
`;

export const ContainerUpdated = styled.div`
    width: 100% !important;
    max-width: 1200px !important;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 1200px) {
        max-width: 1140px;
    }
    @media (min-width: 992px)  {
        max-width: 960px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 576px)  {
        max-width: 540px;
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 768px)  {
        max-width: 720px;
    }
    @media (min-width: 576px)  {
        max-width: 540px;
    }

`

export const NavbarContainerUpdated = styled.div`
    hyphens: manual;
    box-sizing: border-box;
    position: relative;
    display: flex;
    position: relative;
    width: 100%;
    flex-wrap: wrap;
    align-content: flex-start;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, -webkit-border-radius 0.3s, -webkit-box-shadow 0.3s;
    max-width: 100%;
    margin: auto;
    color: var(--c-dark);
    padding: 0 15px;
    min-height: 50px;
    align-items: center;
    

    &:before {    
    box-sizing: border-box;
    }
`

export const NavLeftElements = styled.div`
    top: auto;
    height: auto;
    padding-bottom: 0px;

    @media screen and (min-width: 1200px) {
        display: block !important;
        -webkit-box-flex: 1;
        flex-grow: 1;
        -webkit-box-align: center;
        align-items: center;
        flex-basis: calc((100% - 200px) / 2);
    }
`;

export const NavLeftElementsInner = styled.nav`
        display: block;        
`

export const NavLeftElementsLinks = styled(LinkScroll)`
    color:#FEE7E9;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height:100%;
    cursor:pointer;
    margin: 0 5px;
    -webkit-box-flex: 1;
    flex-grow: 1;
    text-align: center;

    &:hover{
        color:#ff4e5b;
        transition: all 0.2s ease-in-out;
    }

    &.active {
        color:#CE94FF;

    }
`

export const NavMiddleElement = styled.div`
    align-items: center;
    padding: 10px 0;
    display: flex;
    -webkit-box-align: center;
`

export const NavMiddleElementInnerImg = styled.img`
width: auto;
height: auto;
`

export const NavRightElements = styled.div`

    top: auto;
    height: auto;
    padding-bottom: 0px;

    @media screen and (min-width: 1200px) {
        display: block !important;
        -webkit-box-flex: 1;
        flex-grow: 1;
        -webkit-box-align: center;
        align-items: center;
        flex-basis: calc((100% - 200px) / 2);
    }
`

export const NavRightElementsInner = styled.nav`
        display: block;        
`

export const NavRightElementsLinks = styled(LinkScroll)`
    color:#FEE7E9;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height:100%;
    cursor:pointer;
    margin: 0 5px;
    -webkit-box-flex: 1;
    flex-grow: 1;
    text-align: center;

    &:hover{
        color:#ff4e5b;
        transition: all 0.2s ease-in-out;
    }

    &.active {
        color:#CE94FF;

    }
`




