import {useState, useEffect} from 'react';
import './App.css';
import './Styles/App.scss';
import Form from './Components/Common/Form';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Information from './Components/Information';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';


import {
    Routes,
    Route,
    useNavigate
} from "react-router-dom";
import {app} from './firebase-config';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    const handleAction = (id) => {
        const authentication = getAuth();
        if (id === 1) {
            signInWithEmailAndPassword(authentication, email, password)
                .then((response) => {
                    navigate('/home')
                    sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
                })
                .catch((error) => {
                    console.log(error.code)
                    if (error.code === 'auth/wrong-password') {
                        toast.error('Please check the Password');
                    }
                    if (error.code === 'auth/user-not-found') {
                        toast.error('Please check the Email');
                    }
                })
        }
        if (id === 2) {
            createUserWithEmailAndPassword(authentication, email, password)
                .then((response) => {
                    navigate('/home')
                    sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
                })
                .catch((error) => {
                    if (error.code === 'auth/email-already-in-use') {
                        toast.error('Email Already in Use');
                    }
                })
        }
    }

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        /*  if (authToken) {
            navigate('/profile')
          }*/
    }, [])
    return (
        <div className="App">
            <>
                <ToastContainer/>
                <Routes>
                    <Route
                        path='/register'
                        element={
                            <Form
                                title="Register"
                                setEmail={setEmail}
                                setPassword={setPassword}
                                handleAction={() => handleAction(2)}
                            />}
                    />
                    <Route
                        path='/login'
                        element={
                            <Form
                                title="Login"
                                setEmail={setEmail}
                                setPassword={setPassword}
                                handleAction={() => handleAction(1)}
                            />
                        }
                    />

                    <Route
                        path='/home'
                        element={
                            <Home/>}
                    />
                    <Route
                        path='/profile'
                        element={
                            <Profile/>}
                    />
                    <Route
                        path='/information'
                        element={
                            <Information/>}
                    />
                    <Route
                        path='/skills'
                        element={
                            <Skills/>}
                    />
                    <Route
                        path='/experience'
                        element={
                            <Experience/>}
                    />
                    <Route
                        path='/education'
                        element={
                            <Education/>}
                    />

                </Routes>

            </>
        </div>
    );
}

export default App;
