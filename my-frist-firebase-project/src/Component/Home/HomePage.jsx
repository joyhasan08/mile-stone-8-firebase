import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';

const HomePage = props => {
    return (
        <div>
            <Navbar></Navbar>
            This is home
        </div>
    );
};

HomePage.propTypes = {

};

export default HomePage;