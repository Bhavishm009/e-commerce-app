import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/LoginPage.css'
import LoadingBox from '../components/LoadingBox';
const LoginPage:React.FC = () => {
    const [loading,setLoading]=useState<boolean>(false);
    const [email,setEmail]=useState<string>('');
    const [password,setPassword]=useState<string>('');

    const signInHandler = () => {
        alert('trying to Log In....')
    }
  return (
    <div className="signin-container">
            <form className="form" onSubmit={signInHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {/* {error && <MessageBox variant="danger">{error}</MessageBox>} */}
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
                <div>
                    <label/>
                    <button className="submit-btn" type="submit">
                        Sign In
                    </button>
                </div>
                <div className="new-user-register">
                    <label/>
                    <div>
                        New user?
                            Create Account
                    </div>
                </div>
            </form>
        </div>
  )
}

export default LoginPage
