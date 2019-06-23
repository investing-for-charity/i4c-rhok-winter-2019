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

    state = {
        showAll: false,
    }

    componentDidMount() {
        this.el = document.createElement('div');

    }
    handleClick = () => {
        this.setState(({showAll}) => {
            return {showAll: !showAll}
        })
    }

    render() {
        const {causes} = this.props
        return (
            <>
                <div class="select-charities">
                    <h3><span>2</span>Pick your Cause</h3>
                    <button onClick={this.handleClick}>
                        {this.state.showAll ? 'See all' : 'List'}
                    </button>
                </div>
                {this.state.showAll ? (
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
                ) : (
                    <ul className="tiles">
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
                )}
            </>
        );
    }
}


export default Carousel;