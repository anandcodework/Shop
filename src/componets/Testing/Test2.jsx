import React, { useState } from 'react';
import axios from 'axios';
import { MdFacebook } from 'react-icons/md';
import 'tailwindcss/tailwind.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginRegister = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      localStorage.setItem('token', response.data.token); // Store token
      navigate('/'); // Redirect to profile after successful login
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  // Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/register', { username, email, password });
      navigate('/login'); // Redirect to login after successful registration
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="mb-8 text-2xl font-bold text-center">Welcome!</h2>
      <div className={`relative w-full max-w-2xl min-h-[480px] bg-white shadow-2xl rounded-lg overflow-hidden transform transition-transform duration-700 ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">

        {/* Sign Up Container */}
        <div className={`absolute top-0 left-0 h-full w-1/2 transform transition-transform duration-700 ${isRightPanelActive ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100 z-20'}`}>
          <form onSubmit={handleRegister} className="flex flex-col items-center justify-center h-full p-12 bg-white text-center">
            <h1 className="text-3xl font-bold mb-4">Account Register</h1>
            <div className="flex justify-center my-5">
              {/* Add social media icons here if needed */}
            </div>
            <span className="text-sm mb-4">or use your email for registration</span>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="w-full p-3 mb-2 bg-gray-200 rounded-lg border-none" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 mb-2 bg-gray-200 rounded-lg border-none" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-3 mb-4 bg-gray-200 rounded-lg border-none" required />
            <button type="submit" className="px-6 py-3 text-white uppercase bg-secondary rounded-full transition-transform duration-100 transform hover:scale-95">Register</button>
          </form>
        </div>

        {/* Log In Container */}
        <div className={`absolute top-0 left-0 h-full w-1/2 transform transition-transform duration-700 ${isRightPanelActive ? 'translate-x-full opacity-100 z-20' : 'translate-x-0 opacity-100 z-10'}`}>
          <form onSubmit={handleLogin} className="flex flex-col items-center justify-center h-full p-12 bg-white text-center">
            <h1 className="text-3xl font-bold mb-4">Log In</h1>
            <div className="flex justify-center my-5">
              {/* Add social media icons here if needed */}
            </div>
            <span className="text-sm mb-4">or use your account</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 mb-2 bg-gray-200 rounded-lg border-none" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-3 mb-4 bg-gray-200 rounded-lg border-none" required />
            <Link to="#" className="text-sm mb-4">Forgot your password?</Link>
            <button type="submit" className="px-6 py-3 text-white uppercase bg-secondary rounded-full transition-transform duration-100 transform hover:scale-95">Log In</button>
          </form>
        </div>

        {/* Overlay Container */}
        <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform ease-in-out duration-700 ${isRightPanelActive ? '-translate-x-full' : 'translate-x-0'}`}>
          <div className="relative flex items-center justify-center h-full bg-gradient-to-t from-secondary/70 to-secondary text-white transition-transform duration-700">
            {/* Overlay Left */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center px-10 text-center transition-transform duration-700 transform ${isRightPanelActive ? 'translate-x-0' : '-translate-x-full'}`}>
              <h1 className="text-3xl font-bold">Welcome Back!</h1>
              <p className="mb-4">To keep connected with us please login with your personal info</p>
              <button className="px-6 py-3 text-white uppercase bg-transparent border border-white rounded-full" onClick={handleSignInClick}>Register</button>
            </div>
            {/* Overlay Right */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center px-10 text-center transition-transform duration-700 transform ${isRightPanelActive ? 'translate-x-full' : 'translate-x-0'}`}>
              <h1 className="text-3xl font-bold">Hello, Friend!</h1>
              <p className="mb-4">Enter your personal details and start your journey with us</p>
              <button className="px-6 py-3 text-white uppercase bg-transparent border border-white rounded-full" onClick={handleSignUpClick}>Log In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
