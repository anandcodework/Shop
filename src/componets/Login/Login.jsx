import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import swal from 'sweetalert';

const LoginRegister = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [username, setUsername] = useState(''); // Updated to username
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      swal('Redirecting...', 'You are already logged in.', 'info').then(() => {
        navigate('/profile'); // Redirect to profile if already logged in
      });
    }
  }, [navigate]);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { username, password }); // Updated to username
      localStorage.setItem('token', response.data.token);
      swal('Success!', 'Login successful! Redirecting to your profile...', 'success').then(() => {
        navigate('/profile'); // Redirect to profile after successful login
      });
    } catch (error) {
      console.error('Error logging in:', error);
      swal('Error!', error.response?.data.error || 'Login failed. Please check your username and password.', 'error');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      swal('Error!', 'Passwords do not match. Please try again.', 'error');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/register', { fullName, username, password }); // Updated to username
      swal('Success!', 'Registration successful! You can now log in.', 'success').then(() => {
        navigate('/'); // Redirect to home after successful registration
      });
    } catch (error) {
      console.error('Error registering user:', error);
      swal('Error!', error.response?.data.error || 'Registration failed. Please try again.', 'error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="mb-8 text-2xl font-bold text-center">Welcome!</h2>

      <div className={`relative w-full max-w-2xl min-h-[480px] bg-white shadow-2xl rounded-lg overflow-hidden transform transition-transform duration-700 ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">

        {/* Sign Up Container */}
        <div className={`absolute top-0 left-0 h-full w-1/2 transform transition-transform duration-700 ${isRightPanelActive ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100 z-20'}`}>
          <form onSubmit={handleRegister} className="flex flex-col items-center justify-center h-full p-12 bg-white text-center">
            <h1 className="text-2xl font-bold mb-4">Create an account</h1>

            <input 
              type="text" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
              placeholder="Full Name" 
              className="w-[250px] h-12 p-2 mb-4 bg-gray-200 rounded-lg border-none" 
              required 
            />
            <input 
              type="text" // Updated to text
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Username" // Updated placeholder
              className="w-[250px] h-12 p-2 mb-4 bg-gray-200 rounded-lg border-none" 
              required 
            />
            <div className="relative mb-4">
              <input 
                type={showPassword ? 'text' : 'password'} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                className="w-[250px] h-12 p-2 bg-gray-200 rounded-lg border-none" 
                required 
              />
              <span className="absolute right-3 top-2 cursor-pointer mt-2" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="relative mb-4">
              <input 
                type={showConfirmPassword ? 'text' : 'password'} 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                placeholder="Confirm Password" 
                className="w-[250px] h-12 p-2 bg-gray-200 rounded-lg border-none" 
                required 
              />
              <span className="absolute right-3 top-2 cursor-pointer mt-2" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button type="submit" className="px-6 py-2 text-white uppercase bg-secondary rounded-full transition-transform duration-100 transform hover:scale-95">Register</button>
          </form>
        </div>

        {/* Log In Container */}
        <div className={`absolute top-0 left-0 h-full w-1/2 transform transition-transform duration-700 ${isRightPanelActive ? 'translate-x-full opacity-100 z-20' : 'translate-x-0 opacity-100 z-10'}`}>
          <form onSubmit={handleLogin} className="flex flex-col items-center justify-center h-full p-12 bg-white text-center">
            <h1 className="text-3xl font-bold mb-4">Log In</h1>

            <input 
              type="text" // Updated to text
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Username" // Updated placeholder
              className="w-[250px] h-12 p-2 mb-4 bg-gray-200 rounded-lg border-none" 
              required 
            />
            <div className="relative mb-4">
              <input 
                type={showPassword ? 'text' : 'password'} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                className="w-[250px] h-12 p-2 bg-gray-200 rounded-lg border-none" 
                required 
              />
              <span className="absolute right-3 top-2 cursor-pointer mt-2" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button type="submit" className="px-6 py-2 text-white uppercase bg-secondary rounded-full transition-transform duration-100 transform hover:scale-95">Log In</button>
          </form>
        </div>

        {/* Overlay Container */}
        <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform ease-in-out duration-700 ${isRightPanelActive ? '-translate-x-full' : 'translate-x-0'}`}>
          <div className="relative flex items-center justify-center h-full bg-gradient-to-t from-secondary/70 to-secondary text-white transition-transform duration-700">
            {/* Overlay Left */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center px-10 text-center transition-transform duration-700 transform ${isRightPanelActive ? 'translate-x-0' : '-translate-x-full'}`}>
              <h1 className="text-3xl font-bold">Welcome Back!</h1>
              <p className="mb-4">To keep connected with us please login with your personal info</p>
              <button className="px-6 py-2 text-white uppercase bg-transparent border border-white rounded-full" onClick={handleSignInClick}>Register</button>
            </div>
            {/* Overlay Right */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center px-10 text-center transition-transform duration-700 transform ${isRightPanelActive ? 'translate-x-full' : 'translate-x-0'}`}>
              <h1 className="text-3xl font-bold">Hello, Friend!</h1>
              <p className="mb-4">Enter your personal details and start your journey with us</p>
              <button className="px-6 py-2 text-white uppercase bg-transparent border border-white rounded-full" onClick={handleSignUpClick}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
