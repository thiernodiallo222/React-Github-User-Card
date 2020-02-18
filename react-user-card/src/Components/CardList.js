import React, { Component } from 'react'
import Card from './Card';
import './Style.css';

export class CardList extends React.Component {

constructor() {
    super(); 
    this.state ={}
  }

    render() {
        return (
            <div>
           <Card stuff = {this.props.data}/>
            </div>
        )
    }
}

export default CardList
