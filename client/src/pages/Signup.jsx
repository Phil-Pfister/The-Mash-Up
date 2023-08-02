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
    <div className="bg-gray-300 h-screen flex flex-col items-center justify-center">
      <h2 className="	flex justify-center bg-gray-300 text-white text-4xl py-10">Sign Up</h2>
      <form className="flex flex-col bg-white items-center justify-center space-between w-full h-[800px]" onSubmit={handleSignUp}>
        <div className="w-full h-full flex flex-col justify-center items-center space-around">
        <div className="bg-white text-left">
          <label className="text-left" htmlFor="firstName">First Name:</label>
          <input className="bg-gray-100"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="bg-white space-between">
          <label className="text-left" htmlFor="lastName">Last Name:</label>
          <input className="bg-gray-100"
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="bg-white w-100 space-between">
          <label htmlFor="email">Email:</label>
          <input className="bg-gray-100"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="bg-white">
          <label htmlFor="username">Username:</label>
          <input className="bg-gray-100"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="bg-white">
          <label htmlFor="password">Password:</label>
          <input className="bg-gray-100"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-red-500 text-white rounded-lg my-0.5 w-1/3" type="submit">Submit</button>
      </div>
      </form>
    </div>
  );
};

export default SignUp;