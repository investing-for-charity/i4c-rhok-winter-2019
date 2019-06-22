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
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        const {causes} = this.props
        return (
            <div className="charity-list">
                <ul>
                    {Object.values(causes).map(cause => {
                        return(
                            <SausageLink
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