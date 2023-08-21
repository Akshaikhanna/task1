// import React from 'react'

// function Event() {
//     function handle(){
//         console.log("Clicked");
//     }
//   return (
//     <div>
//       <button onClick={handle()}>Click</button>
//     </div>
//   )
// }

// export default Event

import React, { Component } from "react";

export class Event extends Component {
  handle() {
    console.log("Clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.handle()}>Click</button>
      </div>
    );
  }
}

export default Event;
