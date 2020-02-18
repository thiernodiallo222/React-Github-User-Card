import React, { Component } from 'react';
import CardList from './Components/CardList';
import FriendsList from './Components/FriendsList';
import axios from 'axios';
import './App.css';


class App extends React.Component {

constructor() {
    super();
  this.state = {
    myData: [],
    myFollowers: []
      
    };
}
  
  componentDidMount() {
    axios.get("https://api.github.com/users/thiernodiallo222")
      .then(res => {
        console.log(res);
        const data = res.data;
         this.setState({myData: data})
      })
      .catch(err => {
        console.log("Outch !!! an error occurred !", err);
      });
  }

    render() {
      
    return (
      <div className="App">
        <h1>github USER profil</h1>
    
        <CardList data={this.state.myData} />

        {/* <FriendsList people = { this.state.myFollowers }/> */}
 
    </div>
    )
    }
    
}
export default App;


