import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content rounded-lg justify-between">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link to={`/`}><button className='btn'>Login</button></Link>
            </div>
        </div>
    );
};

Navbar.propTypes = {

};

export default Navbar;