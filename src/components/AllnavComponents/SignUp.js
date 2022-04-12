import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase.init';

const SignUp = () => {
    // const googleProvider=new GoogleAuthProvider()
    // const googleSignIn=(e)=>{
    //     e.preventDefault();
    //     signInWithPopup(auth, googleProvider)
    //     .then(result=>{
    //         console.log(result.user);
    //     })
    // }
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [confirmPassword, setConfirmPassword] =useState('');
    const [error, setError] =useState('');
    const [success, setSuccess] =useState('');
    const [loading, setLoading] =useState(false);
    const [name, setName] =useState('');
    
    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)};
    const handleConfirmPassword=(e)=>{
        setConfirmPassword(e.target.value)};
 
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(password!==confirmPassword){
            setError('Password and Confirm Password does not match')
            return;
        }
        else{
         
         
            
        }
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log(result.user);
            setSuccess('User Created Successfully')
            setLoading(false)
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setName(result.user.email)
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
            // setLoading(false)
        })

    
    }
    const passwordReset=(e)=>{
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
        // sendEmailVerification(auth.currentUser)
        .then(result=>{
            console.log(result);
            setSuccess('Password Reset Email Sent')
            setLoading(false)
            setEmail('')
            setPassword('')
            setConfirmPassword('')
        })
    }

    const signOut=()=>{
      signOut(auth)
      .then(result=>{
          console.log(result);
          setSuccess('User Signed Out')
          // setLoading(false)
          setEmail('')
          setPassword('')
          setConfirmPassword('')
      })
      .catch(error=>{
          console.log(error);
          setError(error.message)
          // setLoading(false)
      })
    }



     return (
         <div>
           <h1>name: {name}</h1>
             <h2 className='text-center'>Please sign up</h2>
            <Form onSubmit={handleSubmit}>
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Email address</Form.Label>
     <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
     <Form.Text className="text-muted">
       We'll never share your email with anyone else.
     </Form.Text>
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Confirm Password</Form.Label>
     <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicCheckbox">
     <Form.Check type="checkbox" label="Check me out" />
   </Form.Group>
   <p>{error} {success} {loading} </p>
   <Button variant="primary" type="submit" value='sign Up'>
     Submit
   </Button>
 </Form>
 {/* <button onClick={googleSignIn}>signInGoogle</button> */}
 <button onClick={passwordReset}>reset password</button>
 <p>Already registered? <Link className='text-primary' to='/login'>Login here</Link></p>

 <button onClick={signOut}>sign out</button>
          
         </div>
     );
 };
  export default SignUp;
