import React from 'react';
import styled from 'styled-components';

const FieldStyle = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    &:last-child {
        margin-bottom: 0;
    }
`

const Field = ({children}) => {
    return (
        <FieldStyle>
            {children}
        </FieldStyle>
    );
};

export default Field;