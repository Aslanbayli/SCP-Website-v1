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

  const [justifyActive, setJustifyActive] = useState('tab2');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const nav = useNavigate();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const server = Axios.create({
    baseURL: "http://localhost:5000"
  });

  const register = async (e) => {
    e.preventDefault();
    try {
        const response = await server.post('/sign-up', {
          username: username,
          name: name, 
          email: email, 
          password: password
        });
        console.log(response.data.status);
        if (response.data.status === "success") {
            nav("/sign-in");
        } else {
            alert("User already exists");
        }
    } catch (error) {
        console.error(error);
        alert("User already exists");
    }
  }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink href="/sign-in">
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <h2>Sign up</h2>
          </div>

          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'
            value={username}
            onChange={e => {
              setUsername(e.target.value);
            }}
          />
          <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'
            value={password}
            onChange = { e => {
              setPassword(e.target.value);
            }}
          />

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100" onClick={register}>Sign up</MDBBtn>
          <p className="text-center">Back to <a href="/">Home Page</a></p>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Auth;

