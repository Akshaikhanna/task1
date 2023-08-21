import React, { Component } from 'react'

export class Mounts extends Component {
    componentDidCatch(){
        console.log("hi")
        fetch('https://jsonplaceholder.typicode.com/posts')
     
        .then(response=>response.json())
        .then(posts =>{
            console.log("Hi",posts)
        })
    }
    render() {
    return (
      <div>
    
      </div>
    )
  }
}

export default Mounts
