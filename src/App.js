// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1> This is hello page </h1>
//       </div>
//     );
//   }
// }

// export default App;


// import React, { Component } from 'react';

// function Hello(){

//     return(
//         <h1>This is Hello page using function component. </h1>
//     );
// }

// export default Hello;


import React, { Component } from 'react';
import './App.css';
import CommentCount from './Components/HOC/CommentCount';
import LikeCount from './Components/HOC/LikeCount';
import PureDemo from './Components/PureDemo';
import PureFunction from './Components/PureFunction';

function App(){
  return (
    <div className="App">
    {/* <PureDemo /> */}
    {/* <PureFunction /> */}
    <LikeCount />
    <CommentCount />
    </div>
  );
}

export default App;
