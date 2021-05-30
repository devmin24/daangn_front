import React from 'react';
import styled from 'styled-components';

const Text = (props) => {

    const{bold, color, size, children, padding,margin}= props;
    
    const styles = {bold:bold, color:color, size: size, padding:padding,margin:margin};
    return(
        <Span {...styles}>
            {children}
        </Span>
    )

}

Text.defalutProps = {
    bold: false,
    color: '#222831',
    size:'5px',
    children: null,
    padding: false,
    margin:false,
}

const Span = styled.span `

color: ${(props) =>props.color};
font-size: ${(props) => props.size};
font-weight: ${(props) => (props.bold? '600': '400')}
${(props) => (props.padding ? `padding: ${props.padding};` : "")}
${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`

export default Text;