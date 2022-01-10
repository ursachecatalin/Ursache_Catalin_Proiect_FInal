import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Nav from './Common/Nav';
import TextField from "@mui/material/TextField";

export default function Information() {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        console.log(authToken)
        if (authToken) {
            navigate('/information')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <div className='background_information_page'>
            {/*Information Page*/}
            <Nav/>
            <button className='logoutbutton' onClick={handleLogout}>Log out</button>
            <div className='information_page'>
                <div className='information_form'>
                    <div className='items'>
                        <label className="fname">First Name: </label>
                        <input
                            id="firstname"
                            placeholder="First Name"
                        />

                        <label className="fname">Last Name: </label>
                        <input
                            id="lastname"
                            placeholder="Last Name"
                        />
                    </div>

                    <div className='items'>
                        <label className="birthday"> Birthday: </label>

                        <input
                            id="Birthday"
                            placeholder="dd.mm.yyyy"
                        />
                        <label className="fname"> Email: </label>

                        <input
                            id="Email"
                            placeholder="Email"
                        />

                    </div>

                    <div className='items'>
                        <label className="fname">Adress: </label>
                        <input
                            id="Adress"
                            placeholder="Adress"

                        />
                        <label className="fname">Phone: </label>
                        <input
                            id="Phone"
                            placeholder="Phone Number"

                        />

                    </div>

                    <div className='items'>

                        <textarea className='textarea_informations'>A few words about you </textarea>
                    </div>

                </div>

            </div>


        </div>
    )
}
