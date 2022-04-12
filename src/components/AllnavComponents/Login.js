import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase.init';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const[name, setName]=useState('');
    const [user, setUser] = useState(null);

    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)};

    
    const handleSignOut=(e)=>{
        e.preventDefault();
        signOut(auth)
        .then(result=>{
            console.log(result);
            setSuccess('User Logged Out Successfully')
            setLoading(false)
            setEmail('')
            setPassword('')

            setName('')
        })
    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (user) {
        navigate(from, {replace: true});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log(result.user);
            setSuccess('User Created Successfully')
            // setLoading(false)
            // setEmail('')
            // setPassword('')
            // setConfirmPassword('')
            setName(result.user.email)
            setUser(result.user)
        })
        setLoading(true);
        setError('');
        setSuccess('User Logged In Successfully');

    }

    // another way that is react hooks 

    
    return (
        <div>
            <h2>name: {name}</h2>
            <h4>Login here please</h4>
            
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
   <Form.Group className="mb-3" controlId="formBasicCheckbox">
     <Form.Check type="checkbox" label="Check me out" />
   </Form.Group>
   <p>{error} {success} {loading} </p>
   <Button variant="primary" type="submit" value='sign Up'>
     Submit
   </Button>
 </Form>
 <button onClick={handleSignOut}>sign out</button>
        </div>
    );
};

export default Login;