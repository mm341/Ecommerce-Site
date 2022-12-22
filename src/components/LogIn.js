import React from 'react';
import { Link } from 'react-router-dom';

function LogIn() {
  return (
    <>
    <div className='container-fluid   login '>
      <div className='row'>
      <div className='create  col-md-6 col-sm-12 col-xs-12'>
        <h4>NEW CUSTOMER</h4>
        <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more</p>
        <Link to='/login/register' className='btn btn-primary mt-2'>Create An account</Link>
      </div>
      <div className='form  col-md-6 col-sm-12 col-xs-12'>
        <div> <input type='text' placeholder='user name'/>
        <label>user name</label></div>
       <div>
       <input type='password' placeholder='password'/>
        <label>password</label>
       </div>
        
        <button className='btn btn-primary mt-2 log'>LogIn</button>
      </div>
   
      </div>
     
      </div>
    
    </>
  )
}

export default LogIn;

