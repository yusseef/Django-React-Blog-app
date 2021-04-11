import React from 'react';
import {Link} from 'react-router-dom';

const home = () =>(
    <div className='container'>
        <div className="jumbotron mt-5">
            <h1 className="display-4">Blog app</h1>
            <p className="lead">This is a simple blog app made by Django rest framweok & react.</p>
            <hr className="my-4"/>
            <p>Click the button below to check Blogs.</p>
            <Link className="btn btn-primary btn-lg" to='/blog' role="button">Learn more</Link>
        </div>
    </div>
);

export default home;