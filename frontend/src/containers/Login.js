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

        <div className='card container mt-5 col-lg-4 col-md-4 col-sm-12 p-4 shadow-lg bg-white' style={{borderRadius:'17px'}}>
            <div className="container text-center">
                <i className="fas fa-tree fa-5x border border-success rounded-circle p-5" style={{color: 'darkgreen'}} />
            </div>
            <br/>
            <form className="card-body container" method="POST" onSubmit={e => onSubmit(e)}>
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
                <button type='submit' className='btn btn-success' title='Login to SafeTrees'>Login</button>
                <br/>
            </form>
            <hr style={{ width:"50%", margin:'0 auto', backgroundColor:'green' }}/>
            <div className='text-center p-3'>
                <small>Don't have an account? <Link to='/signup'>Sign up!</Link></small>
            </div>
        </div>


    // <div id="card">
    //     <div id="card-content">
    //         <div id="card-title">
    //         <i class="fas fa-tree"></i>
    //             <h3>SafeTree First LOGIN</h3>
    //             <div class="underline-title"></div>
    //         </div>
    //         <div>
    //             <form method="post" class="form" onSubmit={e => onSubmit(e)}>
    //             <label for="email" style={{"padding-top":"10px"}}>&nbsp;Email</label>
    //                 <input
    //                     class='form-content'
    //                     
    //                 />
    //                 <div class='form-border'></div>
    //                     <label for="password" style={{"padding-top":"40px"}}>&nbsp;Password</label>
    //                         <input
    //                             class="form-content"
    //                             id="password"
    //                             
    //                         />
    //                     <div class='form-border'></div>
    //                     <a href="#"></a>
    //                     <button id="submit-btn" className='btn btn-primary' type='submit'>Login</button>
    //                     <br></br>
    //                     <a><Link to='/reset-password'><legend id="forgot-pass">Reset Password</legend></Link></a>
    //                     <br></br>
    //                     <p></p>
    //                     <Link to='/signup'>Sign Up</Link>
    //             </form>
    //         </div>          
    //     </div>
    // </div>

    );

};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);