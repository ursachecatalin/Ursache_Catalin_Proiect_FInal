import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Nav from "./Common/Nav";


export default function Experience() {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        console.log(authToken)
        if (authToken) {
            navigate('/experience')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <div>

            <div>
                {/*xperience PageE*/}
                <Nav/>
                <button className='logoutbutton' onClick={handleLogout}>Log out</button>
            </div>
        <div className='Experience_page'>
            <div className='experience_title'>
                <h4>Add experience</h4>
            </div>
            <div className='Experience_box'>

                <div className='leftside'>
                    <div className='experience_items'>
                        <label className="fname">Role </label>
                        <input
                            id="Role"
                            placeholder="Role"
                        />
                    </div>
                    <div className='employer_items'>
                        <label className="Employer">Employer </label>
                        <input
                            id="Employer"
                            placeholder="Employer"
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
                    <label className="summary">Summary </label>
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
