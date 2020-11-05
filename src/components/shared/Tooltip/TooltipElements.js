import styled from "styled-components";


export const TooltipText = styled.div`
  background: rgba(28, 56, 151, 0.9);
  color: var(--c-white);
  width: 200px;
  text-align: center;
  line-height: 44px;
  border-radius: 3px;
  cursor: pointer;
`;

export const TootltipBackground = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
`;

export const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 22px);
  right: calc(10%);
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 150px;
  padding: 5px 5px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s, height 0.5s, 
    padding 0.5s ease-in-out;
  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 40px;
    top: -10px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }

  & ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 50px);
    text-align: center;
    align-items: center;
    box-shadow: 0px 7px 40px rgba(169, 177, 209, 0.45);
    & li {
        border-bottom: 1px solid #EDEFF4;
        &:hover {
            transition: all 0.2s ease-in-out;
            color:#ff4e5b;
            cursor:pointer;
        }

    }
  }
`;
export const TooltipCard = styled.div`
    position: relative;
    & ${TooltipBox} { 
    visibility: visible;
    color: var(--c-white);
    background-color: rgba(0, 0, 0, 0.8);
    width: 200px;
    height: 120px;
    align-items: center;
    padding: 8px 8px;
    text-align: center;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8) rgba(0, 0, 0, 0.8);
    }
  }
`;