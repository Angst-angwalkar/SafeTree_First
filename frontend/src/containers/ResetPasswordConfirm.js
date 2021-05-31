import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';
import '../assets/login.css'

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: '',
    });

    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token;

        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    };


    // if user authenticated
    // Redirect to Home page
    if(requestSent){
        return <Redirect to='/' />
    }

    return(

    <div class="resetpassconf">
        <div id="card-content">
            <div id="card-title">
            <i class="fas fa-tree"></i>
                
            </div>
            <div>
                <form method="post" class="form" onSubmit={e => onSubmit(e)}>
                <legend><label for="password" style={{"padding-top":"40px"}}>&nbsp;Enter New Password</label></legend>
                            <input
                                class="form-content"
                                id="password"
                                type='password'
                                placeholder="New Password"
                                name='new_password'
                                value={new_password}
                                onChange={e => onChange(e)}
                                minLength='6'
                                required
                            />
                <legend><label for="password" style={{"padding-top":"40px"}}>&nbsp;Confirm Your Password</label></legend>
                    <input
                        class="form-content"
                        id="password"
                        type='password'
                        placeholder="Confirm New Password"
                        name='re_new_password'
                        value={re_new_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                <button id="submit-btn" className='btn btn-primary' type='submit'>Reset Password</button>
                </form>
            </div>          
        </div>
    </div>

    );

};


export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);