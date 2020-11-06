
import React, {useRef} from 'react';
import { TooltipBox, TooltipCard, TooltipContainer } from './TooltipElements';



const Tooltip = ({showTooltip, setShowTooltip, type, elements}) => {
    console.log("showTooltip -> ", showTooltip);
    const tooltipRef = useRef();
    
    return (
        <>
            {
          showTooltip ? (  type === 'info' ? (
               
            <TooltipContainer ref = {tooltipRef}>
                <TooltipCard>
                    <TooltipBox>
                    {elements}
                    </TooltipBox>
                </TooltipCard> 
            </TooltipContainer>
              
            ) :  
                <TooltipContainer ref = {tooltipRef}>
                    <TooltipCard>
                        <TooltipBox>
                        {elements}
                        </TooltipBox>
                    </TooltipCard> 
                </TooltipContainer>
                    
            
            ) : 
                null
                
            }  
        </>

      );
}


export default Tooltip;