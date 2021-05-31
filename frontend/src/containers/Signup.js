import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
import '../assets/login.css'

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    
    const [formData, setFormData] = useState({
        first_name:'',
        last_name:'',
        email: '',
        password: '',
        re_password: ''
    });

    const { first_name, last_name, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password){
            signup(first_name, last_name, email, password, re_password);
            setAccountCreated(true);
        }
    };


    // if user authenticated
    // Redirect to Home page
    if(isAuthenticated){
        return <Redirect to='/' />
    }
    if(accountCreated){
        return <Redirect to='/login' />
    }

    return(

        <div className='card container mt-5 col-lg-4 col-md-4 col-sm-12 p-4 shadow-lg bg-white' style={{borderRadius:'17px'}}>
            <div className="container text-center">
                <i className="fas fa-tree fa-3x border border-success rounded-circle p-5" style={{color: 'darkgreen'}} />
            </div>
            <br/>
            <form className="card-body container" method="POST" onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <label for='first_name'>First Name</label>
                    <input className="form-control" 
                    placeholder='Your First Name' 
                    type='text'
                    name='first_name'
                    value={first_name}
                    onChange={e => onChange(e)}
                    required
                    />
                </div>
                <br/>
                <div className='form-group'>
                    <label for='last_name'>Email</label>
                    <input className="form-control" 
                    placeholder='Your Last Name' 
                    type='text'
                    name='last_name'
                    value={last_name}
                    onChange={e => onChange(e)}
                    required
                    />
                </div>
                <br/>
                <div className='form-group'>
                    <label for='email'>Email</label>
                    <input className="form-control" 
                    placeholder='Your Email ID' 
                    type='email'
                    name='email'
                    autocomplete="on"
                    value={email}
                    onChange={e => onChange(e)}
                    required
                    />
                </div>
                <br/>
                <div className='form-group'>
                    <label for='password'>Password</label>
                    <input type='password' 
                    className='form-control' 
                    placeholder='Your password' 
                    name='password'
                    value={password}
                    onChange={e => onChange(e)}
                    minLength='6'
                    required
                    />
                </div>
                <br/>
                <div className='form-group'>
                    <label for='re_password'>Confirm password</label>
                    <input type='password' 
                    className='form-control' 
                    placeholder='Confirm password' 
                    name='re_password'
                    value={re_password}
                    onChange={e => onChange(e)}
                    minLength='6'
                    required
                    />
                </div>
                <br/>
                <button type='submit' className='btn btn-success align-items-center' title='Login to SafeTrees'>Register</button>
                <br/>
            </form>
            <hr style={{ width:"50%", margin:'0 auto', backgroundColor:'green' }}/>
            <div className='text-center p-3'>
                <small>Already have an account? <Link to='/login'>Login</Link></small>
            </div>
        </div>

    );

};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);