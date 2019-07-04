import React, { Component } from 'react';

class SausageLink extends Component {
        state = {
            selected: false
        }
        handleClick = () => {
            const {cause, handleCauseClick} = this.props
            handleCauseClick(cause)
        }
    render() {
        const {cause} = this.props
        return (
            <li>
                <span
                    onClick={this.handleClick}
                    className={this.props.selectedCause == cause ? 'selected' : ''}
                >
                    {cause.causeName}
                </span>
            </li>
        );
        }
}
class Carousel extends Component {
    state = {
        showAll: false,
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
                </div>
                <div className={this.state.showAll ? 'charity-list' : ''}>
                    <ul className={this.state.showAll ? '' : 'tiles'}>
                        {Object.values(causes).map(cause => {
                            return(
                                <SausageLink
                                    key={cause.causeName}
                                    cause={cause}
                                    handleCauseClick={this.props.handleCauseClick}
                                    selectedCause={this.props.selectedCause}
                                />
                                );
                            })
                    }
                    </ul>
                </div>
            </>
        );
    }
}


export default Carousel;