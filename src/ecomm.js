import './App.css';
import React, { Component } from 'react'
//import axios from 'axios'
class App extends Component{
  state={
    data: {
  "firstName": "",
  "lastName": "",
  "email": "",
  "password": "",
    "password_confirmation": ""
  }
  }
  formSubmit = (e) =>{
    e.preventDefault();
    const data= this.state.data;
    const req={
      method: 'POST',
      body: data,
      redirect: 'follow'
    }
    fetch('https://hasquiz-api.herokuapp.com/api/auth/register', req)
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
  }
  onChangeHandler =(e, name) =>{
    const newState = {...this.state.data};
    newState[name] = e.target.value;
    this.setState({data: newState})
    //console.log(this.state.data)
  }
  render(){
  return (
    <div className="App">
      <div class="container">
        <div class="header"></div>
        <div class="main">
          <div class="left">
            <h3> We're Coming Soon...</h3>
            <h1>Stay Ahead of Others</h1>
            <p>Get Notified When we're available. Kindly provide your email below</p>
            <form class="email" onSubmit={this.formSubmit}>
              <input type="text" value={this.state.data.firstName} onChange={(e)=>this.onChangeHandler(e, "firstName")}/>
              <input type="text" value={this.state.data.lastName} onChange={(e)=>this.onChangeHandler(e, "lastName")}/>
              <input type="email" value={this.state.data.email} onChange={(e)=>this.onChangeHandler(e, "email")}/>
              <input type="password" value={this.state.data.password} onChange={(e)=>this.onChangeHandler(e, "password")}/>
              <input type="password" value={this.state.data.password_confirmation} onChange={(e)=>this.onChangeHandler(e, "password_confirmation")}/>
              <button>Submit</button>
              
              </form>
          </div>
          <div class="right"></div>
        </div>
      </div>
    </div>

  );
}
}

export default App;
