import React, { useState } from 'react';
import axios from 'axios';
import { useNavigation, Route } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      // Send the user data to the server's endpoint using axios
      const response = await axios.post('/api/signup', {
        username,
        email,
        password,
      });

      console.log('User registered successfully:', response.data);

      // Redirect to the Home page after successful registration
      history.push('/home');
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error and display appropriate error messages to the user.
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <form className="
          flex flex-col
          bg-gray-100
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          w-50
          max-w-md
        " onSubmit={handleSignUp}>
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">Sign up
        </div>
        <div className="mt-10">
        <div className="flex flex-col mb-5">
          <label className="mb-1 text-xs tracking-wide text-gray-600" htmlFor="firstName">First Name:</label>
          <input className="text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-red-400"
            placeholder="First Name"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="mb-1 text-xs tracking-wide text-gray-600" htmlFor="lastName">Last Name:</label>
          <input className="text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-red-400"
            placeholder="Last Name"
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="mb-1 text-xs tracking-wide text-gray-600" htmlFor="email">Email:</label>
          <input className="text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-red-400"
            placeholder="Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="mb-1 text-xs tracking-wide text-gray-600" htmlFor="username">Username:</label>
          <input className="text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-red-400"
            placeholder="Username"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="mb-1 text-xs tracking-wide text-gray-600" htmlFor="password">Password:</label>
          <input className="text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-red-400"
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-red-500
                  hover:bg-red-600
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in" type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
    
  );
};

export default SignUp;