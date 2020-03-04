import React, { Component } from 'react'
import Listpost from './Listpost'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:[],
       loading:false
    }
  }


  

 fetchData=()=>{
    this.setState({
      loading:true
    },async()=>{
      let data= await fetch("https://jsonplaceholder.typicode.com/posts")
      let res= await data.json()
      this.setState({
        data:res,
        loading:false
      })
   
    })
    
    /* this.setState({
      loading:true
    },()=>{
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res=>res.json())
      .then(res1=>{
        this.setState({
          data:res1,
          loading:false
        })
      })
    }) */
  }
  render() {
    const allPosts= this.state.data.map(item=>{
      return <Listpost key={item.id} post={item.title}/>
    })
    return (
      <div>
        <h1>Fetching Data</h1>

        <button  onClick={this.fetchData} > Fetch Data </button>
   
        <ul>

          {this.state.loading?     <FontAwesomeIcon icon={faSpinner} size="6x" spin />: allPosts}
        </ul>
      </div>
    )
  }
}
