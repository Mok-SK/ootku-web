import React, { Component } from 'react';
import styled from "styled-components"

const ButtonX = styled.button`
    background:blue;
`; 

class Button extends Component {
    render() {
        return (
            <ButtonX>button</ButtonX>
        );
    }
}

export default Button;