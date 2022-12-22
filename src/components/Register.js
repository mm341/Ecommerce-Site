import React, { useEffect, useState } from 'react'
function Register() {
  const initialValues={
    username:'',
    email:'',
    password:'',
    address:''
  }
  const[FormValues,setFormValues]=useState(initialValues);
  const[FormErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);
const handelChange=(e)=>{
  const{name,value}=e.target;
 setFormValues({...FormValues,[name]:value})
 console.log(FormValues);
}
const handelSubmit=(e)=>{
  e.preventDefault();
  setFormErrors(Validate(FormValues))
  setIsSubmit(true);
 }
 const Validate=(values)=>{
  const errors={};
  const regx=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if(!values.username){
    errors.username="Username is required!" 
  }
  if(!values.email){
    errors.email="Email is required!" 
  }else if(!regx.test(values.email)){
    errors.email="This is not a valid format";
  }
  if(!values.password){
    errors.password="Password is required!" 
  }else if(values.password.length<4){
    errors.password="Password must be more than 4 characters";
  }else if(values.password.length>10){
    errors.password="Password must be less than 10 characters";
  }

  if(!values.address){
    errors.address="Address is required!" 
  }
  return errors;
 }

 useEffect(()=>{
  if(Object.keys(FormErrors).length===0 &&isSubmit){
 console.log(FormValues)
  }
 },[FormErrors])
  return (
    <div className='container'>
 
      <form onSubmit={handelSubmit}>
      <div className='register'>
            <h2>Register</h2>
     <div>
      <label >userame</label>
      <input type='text' placeholder='userName' name='username' value={FormValues.username} onChange={handelChange}/>
      <p className='text-danger para'>{FormErrors.username}</p>
      </div>
      
      
      <div><label>email</label><input type='email' placeholder='email' name='email' value={FormValues.email} onChange={handelChange}/>
      <p className='text-danger para'>{FormErrors.email}</p>
      </div>
      
      <div><label>password</label><input  type='text' placeholder='pass' name='password' value={FormValues.password} onChange={handelChange}/>
      <p className='text-danger  para'>{FormErrors.password}</p>
      </div>
      
      <div>
      <label>address</label><input type='text' placeholder='Address' name='address' value={FormValues.address} onChange={handelChange}/>
      <p className='text-danger para'>{FormErrors.address}</p></div>
      
      <button className='btn btn-primary'>Submmit</button>
      {Object.keys(FormErrors).length === 0 && isSubmit ?( 
  <div className='success mb-3' onClick={()=>{
  }}>Success Register</div>
  ):[]}
    </div>
      </form>
        
    </div>
    
  )
}

export default Register
