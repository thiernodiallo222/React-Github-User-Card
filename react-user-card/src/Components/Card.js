import React, { Component } from 'react'
import FriendsList from './FriendsList';

import axios from 'axios';
import './Style.css';

export class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            myFollowers: []
        }
    }

handleClick = event => {
      event.preventDefault();
     axios.get("https://api.github.com/users/thiernodiallo222/followers")

      .then(result => {
        console.log(result);
        this.setState({ myFollowers: result.data });
      })
      .catch(error => {
        console.log("Cannot find data", error);
      });
    }

    render() {
        return (
            <div className ="card-container">
                <p className ="text-top">{this.props.stuff.name}</p>
                <img className ="myPic" alt="no image" src={this.props.stuff.avatar_url} />
                <p className ="text">Company: {this.props.stuff.bio}</p>
                <p className ="text">website: {this.props.stuff.blog}</p>
                <p className ="text">Location: {this.props.stuff.location}</p>
                <p className ="text">Following: {this.props.stuff.following} people</p>
                <p className="text followers-link" onClick={this.handleClick}> Followers: {this.props.stuff.followers} followers </p> 
                {/* <FriendsList item ={this.handleClick}/> */}
            </div>
        )
    }
}

export default Card
