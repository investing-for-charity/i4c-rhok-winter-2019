import React, { Component } from 'react';
import styled from 'styled-components';

const CauseContainer = styled.div`
    display:flex;
`

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        
    }
    render() { 
        const {causes} = this.props
        return ( 
            <>
                <CauseContainer>{causes.map(cause => {
                    return(
                        <div>{cause.title}</div>
                    );
                })}
                </CauseContainer>
            </>
        );
    }
}
 
export default Carousel;