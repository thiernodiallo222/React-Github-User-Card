import React, { Component } from 'react'
import FriendsCard from './FriendsCard';
import './Style.css';

export class FriendsList extends Component {

constructor() {
    super()
    this.state ={}
  }

    render() {
        return (
            <div>
            {this.props.myFollowers.map(person =>
            <FriendsCard element={this.props.item} />
                )}
            </div>
        )
    }
}

export default FriendsList
