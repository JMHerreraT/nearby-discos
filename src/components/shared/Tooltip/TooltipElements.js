import styled from "styled-components";


export const TooltipContainer = styled.div`
    
    width: 100%;
    height: 100%;
    
`;

export const TooltipBox = styled.div`
  z-index: 2;
  position: absolute;
  top: calc(100% + 22px);
  right: calc(10%);
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 150px;
  padding: 5px 5px;
  border: 2px solid;
  border-radius: 15px;
  border-color: var(--c-active);
  box-shadow: 0 0 26px var(--c-active),0 0 26px rgba(var(--ca-alter2),.52);  
  transition: all 2s ease-in-out;
  top: '-100%';
    
  &:before {
    content: "";
    width: 0;
    height: 0;
    right: 40px;
    top: -10px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);    
  }

  & ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 50px);
    text-align: center;
    align-items: center;
    
    & li {        
        &:hover {
            transition: all 0.2s ease-in-out;
            color:var(--c-active);
            cursor:pointer;
        }

    }
  }
`;
export const TooltipCard = styled.div`
    position: relative;
    top: 60px;
    & ${TooltipBox} { 
    visibility: visible;
    color: var(--c-white);
    background-color: transparent;
    width: 200px;
    height: 120px;
    align-items: center;
    padding: 8px 8px;
    text-align: center;
    transition: all 2s ease-in-out; 
    &:before {
      border-color: transparent transparent  var(--c-active)  var(--c-active);
    }
  }
`;