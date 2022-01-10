import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Common/Nav';
export default function Home() {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        console.log(authToken)
        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <div className='home_page'>

            {/*Home Page*/}
            <Nav />

            <button className='logoutbutton' onClick={handleLogout}>Log out</button>
            <div className='welcome'>
                <h1>Welcome</h1>
                <h5>Create profile for free!</h5>
                <h6>Your personal, free tool to study and work in Europe</h6>
            </div>
        </div>
    )
}
