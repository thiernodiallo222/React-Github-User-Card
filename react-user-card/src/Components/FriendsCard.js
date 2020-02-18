import React, { Component } from 'react'



export class FriendsCard extends Component {
    constructor() {
        super();
    }



    render() {
        return (
            <div>
            <p>{this.props.element.location}</p>
            </div>
        )
    }
}

export default FriendsCard
