import React, { Component } from 'react'



export class FriendsCard extends Component {
    constructor() {
        super();
        this.state={}
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
