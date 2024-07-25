

// import React, { useState } from 'react';
// import "./LoginPopup.css";
// import { assets } from '../../assets/assets';
// import axios from 'axios'; 

// const LoginPopup = ({ setShowLogin, setIsLoggedIn, setUsername }) => {
//     const [message, setMessage] = useState('');
//     const [currState, setCurrState] = useState("login");
//     const [formData, setFormData] = useState({
//         username: '', 
//         email: '',
//         password: ''
//     });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(`http://localhost:3000/api/${currState}`, formData);
//             console.log("Response data:", response.data); // Debug log
//             setMessage(response.data.message);
//             if (currState === "login") {
//                 setIsLoggedIn(true);
//                 setUsername(response.data.user.username);  // Update username
//             }
//             setShowLogin(false);
//         } catch (error) {
//             setMessage(error.response ? error.response.data.message : "An error occurred");
//             console.error('Error:', error.response);
//         }
//     };

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     return (
//         <div className='login-popup'>
//             <form action='/api/register' className='login-popup-container' onSubmit={handleSubmit}>
//                 <div className="login-popup-title">
//                     <h2>{currState}</h2>
//                     <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
//                 </div>
//                 <div className="login-popup-inputs">
//                     {currState === "register" && (
//                         <input
//                             type="text"
//                             name="username" // Change 'name' to 'username'
//                             placeholder='Your username'
//                             value={formData.username}
//                             onChange={handleChange}
//                             required
//                         />
//                     )}
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder='Your email'
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder='Password'
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type='submit'>{currState === "register" ? "Create account" : "Login"}</button>
//                 <div className="login-popup-condition">
//                     <input type="checkbox" required />
//                     <p>By continuing, I agree to the terms of use & privacy policy.</p>
//                 </div>
//                 {currState === "login" ? (
//                     <p>Create a new account? <span onClick={() => setCurrState("register")}>Click here</span></p>
//                 ) : (
//                     <p>Already have an account? <span onClick={() => setCurrState("login")}>Login here</span></p>
//                 )}
//                 <div className="message-content">
//                     {message && <p style={{ color: "red" }}>{message}</p>}
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default LoginPopup;


import React, { useState } from 'react';
import "./LoginPopup.css";
import { assets } from '../../assets/assets';
import axios from 'axios'; 

const LoginPopup = ({ setShowLogin, setIsLoggedIn, setUsername, setEmail }) => {
    const [message, setMessage] = useState('');
    const [currState, setCurrState] = useState("login");
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/api/${currState}`, formData);
            console.log("Response data:", response.data); // Debug log
            setMessage(response.data.message);
            if (currState === "login") {
                setIsLoggedIn(true);
                console.log("Username from response:", response.data.user.username); // Debug log
                setUsername(response.data.user.username);  // Update username
                setEmail(response.data.user.email); // Update email
            }
            setShowLogin(false);
        } catch (error) {
            setMessage(error.response ? error.response.data.message : "An error occurred");
            console.error('Error:', error.response);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className='login-popup'>
            <form action='/api/register' className='login-popup-container' onSubmit={handleSubmit}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "register" && (
                        <input
                            type="text"
                            name="username"
                            placeholder='Your username'
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder='Your email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type='submit'>{currState === "register" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "login" ? (
                    <p>Create a new account? <span onClick={() => setCurrState("register")}>Click here</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setCurrState("login")}>Login here</span></p>
                )}
                <div className="message-content">
                    {message && <p style={{ color: "red" }}>{message}</p>}
                </div>
            </form>
        </div>
    );
};

export default LoginPopup;



