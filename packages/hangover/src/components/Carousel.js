import React, { Component } from 'react';
import styled from 'styled-components';

const SausageLinks = styled.div`
    position: relative;
    &:before, &:after {
        content: '';
        height: calc(100% - 2em);
        pointer-events: none;
        position: absolute;
        top: 1em;
        width: 10px;
        z-index: 2;
    }
    
    &:before {
        background: linear-gradient(to right, rgba(255,255,255,0) 0%, white 100%);
        right: 0;
    }
    
    &:after {
        background: linear-gradient(to left, rgba(255,255,255,0) 0%, white 100%);
        left: 0;
    }
    
    ul {
        display: flex;
        flex-wrap: nowrap;
        overflow: auto;
        padding: 1em 0;
        -webkit-overflow-scrolling: touch;
        
        li {
            padding: 0 8px;
            white-space: nowrap;
            list-style: none;
            span {
                border: 1px solid lightgrey;
                border-radius: 50px;
                color: dodgerblue;
                display: inline-block;
                padding: 10px 15px;
                text-decoration: none;
                
                &:hover {
                    background: #EBF5FF;
                    border-color: dodgerblue;
                    box-shadow: 0 2px 4px rgba(0, 90, 156,0.15);
                }
            }
        }
    }
`
const SausageLink = ({cause, handleCauseClick}) => {
    const handleClick = () => {
        handleCauseClick(cause)
    }
    return (
        <li>
                <span 
                onClick={handleClick}
                >
                {cause.causeName}
                </span>
            </li>
    );
}
class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
   
    render() { 
        const {causes} = this.props
        return ( 
            <SausageLinks>
            <ul>
                {Object.values(causes).map(cause => {
                    return(
                        <SausageLink cause={cause} handleCauseClick={this.props.handleCauseClick}/>
                    );
               })
            }
            </ul>
            </SausageLinks> 
        );
    }
}

 
export default Carousel;