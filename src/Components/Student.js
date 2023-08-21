import React from "react";
// import { useState } from 'react';

// export default class Student extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             name:"Arun"
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <h1>Hello {this.state.name}</h1>
//                 <button onClick={()=>this.setState({name:"Ram"})}>Update</button>
//             </div>
//         )
//     }
// }

function Student(props) {
  // const[name,setName] = useState('Arun')
  return (
    <div>
      <h1>{JSON.stringify(props.obj)}</h1>
      {/* <button onClick={()=>setName("Akshai")}>call</button> */}
    </div>
  );
}

export default Student;
