import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import '../assets/login.css'

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };


    // if user authenticated
    // Redirect to Home page
    if(isAuthenticated){
        return <Redirect to='/' />
    }

    return(

<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible"/>
  <title>Card</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
    <div id="card">
        <div id="card-content">
            <div id="card-title">
            <i class="fas fa-tree"></i>
                <h3>SafeTree First LOGIN</h3>
                <div class="underline-title"></div>
            </div>
            <div>
                <form method="post" class="form" onSubmit={e => onSubmit(e)}>
                <label for="email" style={{"padding-top":"10px"}}>&nbsp;Email</label>
                    <input
                        class='form-content'
                        id="email"
                        type='email'
                        name='email'
                        autocomplete="on"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                    <div class='form-border'></div>
                        <label for="password" style={{"padding-top":"40px"}}>&nbsp;Password</label>
                            <input
                                class="form-content"
                                id="password"
                                type='password'
                                name='password'
                                value={password}
                                onChange={e => onChange(e)}
                                minLength='6'
                                required
                            />
                        <div class='form-border'></div>
                        <a href="#"></a>
                        <button id="submit-btn" className='btn btn-primary' type='submit'>Login</button>
                        <br></br>
                        <a><Link to='/reset-password'><legend id="forgot-pass">Reset Password</legend></Link></a>
                        <br></br>
                        <p></p>
                        <a><Link id="forgot-pass" to='/signup'><legend id="forgot-pass">Sign Up</legend></Link></a>
                </form>
            </div>          
        </div>
    </div>

</html>

    );

};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);