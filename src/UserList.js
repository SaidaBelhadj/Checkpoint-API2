import axios from "axios";
import React, { useEffect, useState } from "react";
import './App.css'

const UserList = () => {
   const url = 'https://jsonplaceholder.typicode.com/users';
  const [data, setData] = useState([]);
  
    // const [show, setShow] = useState(false);
    
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  useEffect(() => {
    axios.get(url).then(res => {
      setData(res.data);
    })
  }, [])
  return <div className="App" >
 
    <h1>List of Users</h1>
    <div>
       
      {data.map(user =><ul key={user.id} >


      
       <div className="col-md-11" >
       
     
<h4 id="list-item-1" style ={{color:"purple"}}>User n° : {user.id}</h4>
            
              <div className="card mb-3" style ={{ display: "block",marginLeft: "auto",marginRight: "auto"}}>
                <div className="card-body"  >
                 <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0" style ={{color:"green"}}>Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {user.name}
                    </div>
                  </div>
                    <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0"  style ={{color:"green"}}>User Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {user.username}
                    </div>
                  </div>
                    <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0"  style ={{color:"green"}}>Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {user.email}
                    </div>
                  </div>
                  <hr/>

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0"  style ={{color:"green"}}>Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {user.phone}
                    </div>
                  </div>
                  
                  <hr/>

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0"  style ={{color:"green"}}>Website</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {user.website}
                    </div>
                  </div>
                  
                  <hr/>

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0"  style ={{color:"green"}}>Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {user.address.street}/{user.address.suite}/{user.address.city}/{user.address.zipcode}
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
</ul>)}
      
    </div>
  </div>
};
export default UserList;