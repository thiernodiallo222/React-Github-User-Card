import React, { Component }  from 'react';
import './App.css';


class App extends React.Component {

constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
    <div className="App">
        <p> Welcome to my new App ! </p>
    </div>
    )
  }
}
export default App;



// axios.get("https://api.github.com/users/thiernodiallo222")
//   .then((response) => {

//     console.log(response);
//     root.appendChild(myInfo(response.data));
//   })
//   .catch(error => {
//     console.log("Cannot find data requested !", error);
//   });


// axios.get("https://api.github.com/users/thiernodiallo222/followers")

//   .then(res => {
//     console.log(res);
//     res.data.forEach(element => {
//       root.appendChild(myInfo(element));
//     });
    
//   })
//   .catch(error => {
//     console.log("Cannot find data", error);
//   });

// const getDogs = () => {
//     fetch('https://dog.ceo/api/breed/labrador/images')
//       .then(res => res.json())
//       .then(dogs => this.setState({dogs: dogs.message}))
//       .catch(err => console.log('noooo'));
// };