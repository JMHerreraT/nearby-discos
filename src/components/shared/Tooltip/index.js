
import React, {useRef} from 'react';
import { TooltipBox, TooltipCard, TootltipBackground } from './TooltipElements';



const Tooltip = ({showTooltip, setShowTooltip, type, elements}) => {

    const tooltipRef = useRef();
    
    return (
        <>
            {
          showTooltip ? (  type === 'info' ? (
               
            <TootltipBackground ref = {tooltipRef}>
                <TooltipCard>
                    <TooltipBox>
                    {elements}
                    </TooltipBox>
                </TooltipCard> 
            </TootltipBackground>
              
            ) :  
                <TootltipBackground ref = {tooltipRef}>
                    <TooltipCard>
                        <TooltipBox>
                        {elements}
                        </TooltipBox>
                    </TooltipCard> 
                </TootltipBackground>
                    
            
            ) : 
                null
                
            }  
        </>

      );
}


export default Tooltip;