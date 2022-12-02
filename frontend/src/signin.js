import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Auth() {

  const [justifyActive, setJustifyActive] = useState('tab1');

  // const onSubmitForm = async (e) => {
  //   e.preventDefault();
  //   try {
  //       const body = { email, password }
  //       const response = await fetch("http://localhost:5000/sign-in", {
  //         method: "GET",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(body)
  //       });
  //       console.log(response);
  //   } catch (err) {
  //       console.error(err.message);
  //   }
  // }

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const nav = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var status = 0;
  let flag = true;

  const login = () => {
    try {
      Axios.post("http://localhost:5000/sign-in", {
        email: email, 
        password: password
      }).catch(err => {       
        status = err.response.status;
        console.log(err.response.status);
        console.log(status);
        flag = false;
        if (flag) {
          alert("Success")
        }
      });

      
    } catch (err) {
      console.error(err.message);
    }
  }
 

  

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink href="/sign-up">
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <h2>Sign in</h2>
          </div>

     
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'
            value={password}
            onChange = { e => {
              setPassword(e.target.value);
            }}
          />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          </div>

          <MDBBtn className="mb-4 w-100" onClick={login}>Sign in</MDBBtn>
          <p className="text-center">Back to <a href="/">Home Page</a></p>

        </MDBTabsPane>
        
      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Auth;

