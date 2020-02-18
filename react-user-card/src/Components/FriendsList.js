import React, { Component } from 'react'
import FriendsCard from './FriendsCard';
import './Style.css';

export class FriendsList extends Component {

constructor() {
    super();
  }

    render() {
        return (
            <div>
                {this.props.people.map(person =>
                    <FriendsCard element={this.props.person} />
                )}
            </div>
        )
    }
}

export default FriendsList
