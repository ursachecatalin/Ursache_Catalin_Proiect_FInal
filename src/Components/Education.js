import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from "./Common/Nav";
import {TextField} from "@mui/material";

export default function Education() {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        console.log(authToken)
        if (authToken) {
            navigate('/education')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <div>
            {/*Education Page*/}
            <Nav />
            <button className='logoutbutton' onClick={handleLogout}>Log out</button>
            <div className='Experience_page'>
                <div className='experience_title'>
                    <h4>Add certification</h4>
                </div>
                <div className='Experience_box'>

                    <div className='leftside'>
                        <div className='experience_items'>
                            <label className="certification">Certification </label>
                            <input
                                id="Certification"
                                placeholder="Certification"
                            />
                        </div>
                        <div className='employer_items'>
                            <label className="institution">Institution </label>
                            <input
                                id="Institution"
                                placeholder="Institution"
                            />
                        </div>
                        <div className='city_items'>
                            <label className="Study">Study </label>
                            <input
                                id="Study"
                                placeholder="Study"
                            />
                        </div>
                        <div className='city_items'>
                            <label className="City">City </label>
                            <input
                                id="City"
                                placeholder="City"
                            />
                        </div>
                        <div className='date_items'>
                            <label className="startdate">Start Date </label>
                            <input
                                type='date'
                                id="StartDate"
                                placeholder="dd/mm/yyyy"
                            />
                            <label className="enddate">End Date </label>
                            <input
                                type='date'
                                id="EndDate"
                                placeholder="dd/mm/yyyy"
                            />
                        </div>
                    </div>

                    <div className='rightside'>
                        <label className="fname">Summary </label>
                        <textarea
                            id="summary"
                            placeholder='summary'
                        />
                        <div className='right_side_buttons'>
                            <button className='clear'>Clear</button>
                            <button className='Add'>Add</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    )
}
