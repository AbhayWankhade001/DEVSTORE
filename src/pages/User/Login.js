import React from 'react';
import {  useNavigate  } from 'react-router';
import logoimg from '../Home/Artizz_Dev_Bg_Removed.png'
import { Footer } from '../Home/Footer';
import { motion } from "framer-motion";

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate
   
    function handleLogin(event) {
        event.preventDefault(); // Prevent default form submission behavior
        // Access form inputs using event.target
        const username = event.target.username.value;
        const password = event.target.password.value;

        // Check if any field is empty
        if (!username || !password) {
            // Find the first empty field
            const emptyField = !username ? 'Username' : 'Password';
            // Show an alert with the name of the empty field
            alert(`${emptyField} is not filled`);
            return; // Stop further execution
        }

        const data = {
            username: username,
            password: password
        };

        fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(async res => {
            if (!res.ok) {
                try {
                    const errorData = await res.json();
                    alert(errorData.message);
                } catch (error) {
                    if (res.status === 401) {
                        alert('Invalid username or password');
                    } else {
                        alert('An error occurred while processing your request.');
                    }
                }
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            // Handle the response data here
            alert(data.message);
            console.log('Login successful:', data);
            document.cookie = `token=${data.token}`;
            // Redirect to another page or update the UI as needed
            checkTokenAndNavigate()
        })
        .catch(error => {
            // Handle errors here
            console.error('Error during login:', error);
        });
    }
    
    const checkTokenAndNavigate = () => {
        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
        const tokenCookie = cookies.find(cookie => cookie.startsWith('token='));
        if (tokenCookie) {
            // If token is present in cookies, navigate to the desired location
            navigate('/ReviewForm');
        }
    };

    return (
        <div >
            <section className="flex justify-center relative " style={{ zIndex: "999999999" }}>
                <img src="https://pagedone.io/asset/uploads/1702362010.png" alt="gradient background image" className="w-full h-full object-cover fixed" />
                <div className="mx-auto max-w-lg px-6 lg:px-8 absolute py-20">
                    
                    <motion.div

initial={{ opacity: 0, scale: 0.5 }}
animate={{ opacity: 1, scale: 1 }}
transition={{
  duration: 0.8,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01]
}}
>   
<img src={logoimg} alt="pagedone logo" className="mx-auto lg:mb-2 lg:mt-4 mb- w-16 h-16" />
                    <div className="rounded-2xl bg-white shadow-xl">
                        <form onSubmit={handleLogin} className="lg:p-11 p-7 mx-auto">
                            <div className="mb-8">
                                <h1 className="text-gray-900 text-center font-manrope text-2 font-bold leading-5 mb-2">We're glad you're here! We've been waiting for someone as awesome as you.</h1>
                                <p className="text-gray-500 text-center text-base font-medium leading-6">Let’s get started With Artizz, to make Online presence better </p>
                            </div>
                            <input type="text" name="username" className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6" placeholder="Username" />
                            <input type="text" name="password" className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1" placeholder="Password" />
                            <a className="flex justify-end mb-6">
                                <span className="text-indigo-600 text-right text-base font-normal leading-6">Forget password</span>
                            </a>
                            <button type="submit" className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-indigo-800 transition-all duration-700 bg-indigo-600 shadow-sm mb-11">Login</button>
                        </form>
                    </div>
                    </motion.div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Login;
