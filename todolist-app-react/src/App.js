import React , {Component} from 'react';
import './App.css';

import{Container} from 'react-bootstrap';
class App extends React.Component {

  state={
    clients:  [
      {id:1,nom:"adama",completed:1},
      {id:2,nom:"ndiare",completed:1},
      {id:3,nom:"ousmane",completed:0}
    ]

  }

  handleClick = () =>{
console.log(this.state);

  }

  handleCompleted= id =>{
    const clients= this.state.clients.map((client)=>{
      if(client.id ===id){

        client.completed =! client.completed 
        
      }
      return client;
    });
  
  this.setState({clients:clients});
  };

  // handleDelete= id =>{
  //   const clients= this.state.clients.slice();
  //   const index= clients.findIndex(function(client){
  //     return client.id ===id

  //   });
  
  //   clients.splice(index,1);
  // this.setState({clients:clients});
  // };
  render(){
    const title= "Liste des clients";
 
return(
<div className= "App"> 
  <Container>
    <div>
 <h1 >{title}</h1>
 <ul>
 {this.state.clients.map(client =>(
  <li key={client.id} >  
  {client.completed?  <strike>{client.nom}</strike>: client.nom}
  
  <input type="radio"   value={client.completed ?   '-':'v'} onClick={() =>this.handleCompleted(client.id)}/>
  {/* <button onClick={() =>this.handleDelete(client.id)} >X</button> */}
  
  </li>

 ))}
 </ul>
 </div>
  </Container>
</div>

  )


  }
}
 
export default App;

