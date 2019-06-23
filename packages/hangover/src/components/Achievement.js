import React, { Component } from 'react';

class Achievement extends Component {

    render() {
        const {achievements} = this.props;
        console.log(achievements)
        if(!achievements){
            return null
        }
        return (
            <ul>
            {achievements.map(achievement => {
                return(
                <li key={achievement.achieveName}>
                    <h2>{achievement.amount}</h2>
                    <p>{achievement.achieveName}</p>
                </li>
                )
            })}
            </ul>
        );
    }
}

export default Achievement;