import React from 'react'
import { StyledButton } from './keyButton.styled'

type Props = {
    label: string,
    placement: string,
    isFunction?: boolean;
    handleClick?: any;
}



export const KeyButton: React.FC<Props> = ({label, placement, isFunction, handleClick}) => {

    const styles: React.CSSProperties = {
        gridArea: placement    
    }

    if(isFunction){
        styles.backgroundColor = 'maroon';
        styles.color = 'white';
        styles.border = '1px solid white';
    }
    
  return (
        <StyledButton onClick={handleClick} style={styles}><span>{label}</span></StyledButton>
  )
}