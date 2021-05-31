import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../actions/auth';

const Layout = (props) => {

    useEffect(() => {
        props.checkAuthenticated();
        props.load_user();
    }, []);

    return(
        <div>
            <Navbar />
            <section style={{margin:'0px', padding:'0px'}} className='main'>
            {props.children}
            </section>
        </div>
        );
}
export default connect(null, { checkAuthenticated, load_user }) (Layout);