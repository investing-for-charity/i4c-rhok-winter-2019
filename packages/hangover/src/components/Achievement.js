import React, { Component } from 'react';

class Achievement extends Component {
    
    render() { 
        const {achievements} = this.props;
        console.log(achievements)
        if(!achievements){
            return null
        }
        return ( 
            achievements.map(achievement => {
                return(
                <div key={achievement.achieveName}>
                    <span>{achievement.achieveName}</span>
                    <span>{achievement.amount}</span>
                </div>
                )
            })
        );
    }
}
 
export default Achievement;