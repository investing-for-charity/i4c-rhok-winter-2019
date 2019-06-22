import React, { Component } from 'react';


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

    render() {
        const {causes} = this.props
        return (
            <div className="charity-list">
                <ul>
                    {Object.values(causes).map(cause => {
                        return(
                            <SausageLink key={cause.causeName}
                                cause={cause}
                                handleCauseClick={this.props.handleCauseClick}
                            />
                        );
                   })
                }
                </ul>
            </div>
        );
    }
}


export default Carousel;