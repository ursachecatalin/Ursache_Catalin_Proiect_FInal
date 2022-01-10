import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {

    render() {
        return (
            <nav className="Nav">
                <div className="Nav__container">
                    <div className="Nav__right">
                        <ul className="Nav__item-wrapper">
                            <li className="Nav__item">
                                <NavLink className="Nav__link_home" to="/Home" activeClassName="active">Home</NavLink>
                            </li>
                            <li className="Nav__item">
                                <NavLink className="Nav__link_profile" to="/Profile" activeClassName="active">Profile</NavLink>
                            </li>
                            <li className="Nav__item">
                                <NavLink className="Nav__link_information" to="/Information" activeClassName="active">Information</NavLink>
                            </li>
                            <li className="Nav__item">
                                <NavLink className="Nav__link_skills" to="/Skills" activeClassName="active">Skills</NavLink>
                            </li>
                            <li className="Nav__item">
                                <NavLink className="Nav__link_experience" to="/Experience" activeClassName="active">Experience</NavLink>
                            </li>
                            <li className="Nav__item">
                                <NavLink className="Nav__link_education" to="/Education" activeClassName="active">Education</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}