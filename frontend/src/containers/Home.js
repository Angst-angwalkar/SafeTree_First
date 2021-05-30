import React from 'react';
import { Link } from 'react-router-dom';
import login from './Login';
import '../assets/home.css';

const Home = () => (
    <html>
        <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible"/>
        <title>Card</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <div class="container mt-5">
        <h1 class="display-4">SafeTree First</h1>
        <p class="lead">Welcome to SafeTree First Blog!</p>
        <br></br>
        <hr class="mt-4"/>
        <p>If you are an employee and/or Administator, Please login using the Login button!</p>
        <Link class="btn btn-primary btn-sm" to="/login" role="button">Login</Link>
        <p>If you're just here to visit and explore on Environment awareness programmes, surveys, click the following button</p>
        <Link class="btn btn-primary btn-sm" href="#" role="button">Blog Posts</Link>
        </div>
    </html>
        );

export default Home;