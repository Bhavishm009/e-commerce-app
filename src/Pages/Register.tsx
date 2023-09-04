import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import LoadingBox from '../components/LoadingBox';
import '../Styles/Register.css'
const Register:React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmpassword, setConfirmPassword] = useState<string>('');
    const [loading,setLoading] = useState<boolean>(false);
    const registerHandler = () => {
        
        if(password !== confirmpassword){
            alert("Password does not match.")
        }
        else{
           alert('register....')
        }
        
    }
  return (
    <div className="register-container">
    <form className="form" onSubmit={registerHandler}>
        <div>
            <h1>Register</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}


        <div className="form-ip-sec">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name"
            placeholder="Enter full name"
            required
            onChange={(e) => setName(e.target.value)}>
            </input>
        </div>

        <div className="form-ip-sec">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}>
            </input>
        </div>

        <div className="form-ip-sec">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}>
            </input>
        </div>

        <div className="form-ip-sec">
            <label htmlFor="confirmpassword">Password:</label>
            <input type="password" id="confirmpassword"
            placeholder="Confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}>
            </input>
        </div>


        <div>
            <label/>
            <button className="submit-btn" type="submit">
                Register
            </button>
        </div>
        <div className="new-user-register">
            <label/>
            <div>
                Already have an account?
                <Link to='/login'>
                    Sign In
                </Link>
            </div>
        </div>
    </form>
</div>
  )
}

export default Register
