import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Users from '../UsersInfo/Users';

const HomePage = props => {
    const [loggedUser, setLoggedUser] = useState({})
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        setLoggedUser(user)
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <Users data={loggedUser} ></Users>

        </div>
    );
};

HomePage.propTypes = {

};

export default HomePage;