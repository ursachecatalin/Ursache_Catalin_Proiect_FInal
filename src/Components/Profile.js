import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Common/Nav';

export default function Profile() {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        console.log(authToken)
        if (authToken) {
            navigate('/profile')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <div className='info'>
            {/*Profile Page*/}
            <Nav />
            <button className='logoutbutton' onClick={handleLogout}>Log out</button>

        </div>

    )
}
