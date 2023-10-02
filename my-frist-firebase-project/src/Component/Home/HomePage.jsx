
import { useEffect } from 'react';
import { useState } from 'react';

import Navbar from '../Navbar/Navbar';
import Users from '../UsersInfo/Users';

const HomePage = () => {
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