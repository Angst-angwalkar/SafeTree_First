import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';
import '../assets/login.css'

const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };


    // if user authenticated
    // Redirect to Home page
    if(requestSent){
        return <Redirect to='/' />
    }

    return(

    <div class="resetpass">
        <div id="card-content">
            <div id="card-title">
            <i class="fas fa-tree"></i>
                
            </div>
            <h3>Request Password Reset</h3>
            <div>
                <form method="post" class="form" onSubmit={e => onSubmit(e)}>
                <legend><label for="email" style={{"padding-top":"10px"}}>&nbsp;Enter your Email Address</label></legend>
                    <input
                        class='form-content'
                        id="email"
                        type='email'
                        name='email'
                        placeholder="Email"
                        autocomplete="on"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                <button id="submit-btn" className='btn btn-primary' type='submit'>Reset Password</button>
                </form>
            </div>          
        </div>
    </div>

    );

};


export default connect(null, { reset_password })(ResetPassword);