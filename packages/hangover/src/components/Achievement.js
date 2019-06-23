import React, { Component } from 'react';

class Achievement extends Component {
    
    render() { 
        const {achievements} = this.props;
        console.log(achievements)
        if(!achievements){
            return null
        }
        return ( 
            <div class="achevements">
            {achievements.map((achievement, i) => {
                if(i % 2 === 0) {
                    return(
                        <div key={achievement.achieveName}>
                            <span>{achievement.achieveName}</span>
                            <span>{achievement.amount}</span>
                        </div>
                    )
                }
                return(
                    <div key={achievement.achieveName}>
                        <span>{achievement.amount}</span>
                        <span>{achievement.achieveName}</span>
                    </div>
                )
            })}
            </div>
        );
    }
}
 
export default Achievement;