import React from 'react';
import { Footer } from '../Home/Footer';
import { motion } from "framer-motion";
import myLOGO from '../Home/Artizz_Dev_Bg_Removed.png'
const Registertion = () => {

    function handleRegs(event) {
        event.preventDefault(); // Prevent default form submission behavior
        // Access form inputs using event.target
        const name = event.target.name.value;
        const designation = event.target.designation.value;
        const username = event.target.username.value;
        const password = event.target.password.value;
        const confirmPassword = event.target['Conform-password'].value; // Access confirm password field
    
        // Check if any field is empty
        if (!name || !designation || !username || !password || !confirmPassword) {
            // Find the first empty field
            const emptyField = !name ? 'Name' : !designation ? 'Designation' : !username ? 'Username' : !password ? 'Password' : 'Confirm Password';
            // Show an alert with the name of the empty field
            alert(`${emptyField} is not filled`);
            return; // Stop further execution
        }
    
        // Check if password and confirm password match
        if (password !== confirmPassword) {
            alert('Password and Confirm Password do not match');
            return; // Stop further execution
        }
    
        const data = {
            name: name,
            designation: designation,
            username: username,
            password: password
        };
    
        fetch('http://localhost:4000/api/register', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(async res => {
            if (!res.ok) {
                try {
                    const errorData = await res.json();
                    alert(errorData.message);
                } catch (error) {
                    if (res.status === 409) { // Check the status code directly
                        alert('Username already exists');
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
            console.log('Registration successful:', data);
            document.cookie = `token=${data.token}`;
        })
        .catch(error => {
            // Handle errors here
            console.error('Error during registration:', error);
        });
    }
    


    return (
    <div>
            <section className="flex justify-center relative " style={{ zIndex: "999999999" }}>
                <img src="https://pagedone.io/asset/uploads/1702362010.png" alt="gradient background image" className="w-full h-full object-cover fixed" />
                <div className="mx-auto max-w-lg absolute">
                    <img src={myLOGO} alt="pagedone logo" className="mx-auto lg:mb-11 mb-8" />
                <motion.div

      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >      <div className="rounded-2xl bg-white shadow-xl " >
                  
                        <form onSubmit={handleRegs} className="lg:p-11 p-7 mx-auto">
                            <div className="">
                                <h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">Haven't Register Register Here</h1>
                                <p className="text-gray-500 text-center text-base font-medium leading-6">Let’s get started With Artizz, to make Online presence better </p>
                            </div>
                            <input type="text" name="name" className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1" placeholder="Name" />
                            <input type="text" name="designation" className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1" placeholder="Designation" />
                            <input type="text" name="username" className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1" placeholder="Username" />
                            <input type="text" name="password" className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1" placeholder="Password" />
                            <input type="text" name="Conform-password" className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1" placeholder="ConformPassword" />
                            <a className="flex justify-end mb-6">
                                <span className="text-indigo-600 text-right text-base font-normal leading-6">Already have Account</span>
                            </a>
                            <button type="submit" className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-indigo-800 transition-all duration-700 bg-indigo-600 shadow-sm mb-11">Login</button>
                        </form>
                   
                    </div>     </motion.div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Registertion;
