import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Common/Nav';




export default function Skills() {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        console.log(authToken)
        if (authToken) {
            navigate('/skills')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <div className='skillsmenu'>

            {/*Skills Page*/}
            <Nav />
            <button className='logoutbutton' onClick={handleLogout}>Log out</button>

        </div>

    )
}
