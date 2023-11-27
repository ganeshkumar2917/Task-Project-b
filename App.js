import { useEffect, useState } from 'react';
import './App.css';
import { Button, EditableText,InputGroup,Toaster} from '@blueprintjs/core';

const AppToaster=Toaster.create({
  position:"top"
})
function App() {
  const[user,setusers]=useState([]);
  const[newName,SetNewName]=useState([]);
  const[newEmail,SetNewEmail]=useState([]);
  const[newwebsite,SetNewWeb]=useState([]);

  useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json())
        .then((json)=>setusers(json))
  },[])

  function adduser(){
    const name=newName.trim();
    const email=newEmail.trim();
    const website=newwebsite.trim();

    if(name && email && website){
      fetch("https://jsonplaceholder.typicode.com/users",
       {
        method:"POST",
        body:JSON.stringify({
          name,email,website
        }),
        headers:{
          "Content-Type":"application/json;charset=UTF-8"
        }
       }
     ).then((res)=>res.json()).then(data =>{
      setusers([...user,data]);
      AppToaster.show({
        message:"user Updated succesfully",
        intent:"success",
        timeout:3000
      })
      SetNewName("");
      SetNewEmail("");
      SetNewWeb("");
  
     })
    }
  }
  function onchangehandler(id,key,value){
    setusers((user)=>{
        return user.map(users=>{
          return users.id===id?{...users,[key]:value}:users;
        })
    })
  }
  function updateuser(id){
    const users=user.find((users)=>users.id===id)
    fetch(`https://jsonplaceholder.typicode.com/users/10`,
       {
        method:"PUT",
        body:JSON.stringify(users),
        headers:{
          "Content-Type":"application/json;charset=UTF-8"
        }
       }
     ).then((res)=>res.json()).then(data =>{
      AppToaster.show({
        message:"user addes succesfully",
        intent:"success",
        timeout:3000
      })
    
      
     })

  }
  function deleteuser(id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
       {
        method:"DELETE",
       }
     ).then((res)=>res.json()).then(data =>{
      setusers((user)=>{
        return user.filter((users)=>users.id!==id)
      })
      AppToaster.show({
        message:"user deleted succesfully",
        intent:"success",
        timeout:3000
      })
      
     })
  }
     const appStyle = {
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       margin:"15px"
       
    };

  return (
    <div className="App" style={appStyle}>
      <table className="bp4-html-table modifier">
        <thead>
          <th>ID</th>
          <th>NAME</th>
          <th>E-MAIL</th>
          <th>LASTNAME</th>
          <th>ACTION</th>
        </thead>
        <tbody>
          {user.map(users=>
           <tr key={users.id}>
            <td>{users.id}</td>
            <td>{users.name}</td>
            <td><EditableText onChange={value=> onchangehandler(users.id,'email',value)} value={users.email}/></td>
            <td><EditableText onChange={value=> onchangehandler(users.id,'website',value)} value={users.username}/></td>
            <td><Button intent='primary' onClick={()=>updateuser(users.id)}>UPDATE</Button>&nbsp;<Button intent='danger' onClick={()=>deleteuser(users.id)}>DELETE</Button></td>
           </tr>
        )}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td><InputGroup value={newName} placeholder='Add name' onChange={(e)=>SetNewName(e.target.value)}/></td>
            <td><InputGroup value={newEmail} placeholder='Add email' onChange={(e)=>SetNewEmail(e.target.value)}/></td>
            <td><InputGroup value={newwebsite} placeholder='Add LastName ' onChange={(e)=>SetNewWeb(e.target.value)}/></td>
            <td><Button intent='success' onClick={adduser}>Add USer</Button></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
