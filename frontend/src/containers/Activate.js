import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';
import '../assets/login.css'

const Activate = ({ verify, match }) => {
    const [verified, setVerified] = useState(false);

    const verify_account = e => {
        const uid = match.params.uid;
        const token = match.params.token;

        verify(uid, token);
        setVerified(true);
    };


    if(verified) {
        return <Redirect to='/' />
    }

    return(

        <div className='card container mt-5 col-lg-4 col-md-4 col-sm-12 p-4 shadow-lg bg-white' style={{borderRadius:'17px'}}>
            <div className="container text-center">
                <i className="fas fa-tree fa-3x border border-success rounded-circle p-5" style={{color: 'darkgreen'}} />
            </div>
            <br/>
            <div className= 'd-flex flex-column justify-content-center align-items-center' style={{marginTop: '200px'}}></div>
            <button 
                onClick={verify_account}
                style={{ marginTop:"50px" }}
                type='button'
                className='btn btn-success'
                >verify
            </button>
            <hr style={{ width:"50%", margin:'0 auto', backgroundColor:'green' }}/>
            <div className='text-center p-3'>
            </div>
        </div>
    );

};



export default connect(null, { verify })(Activate);