import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    phone: '',
    address: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
      } else {
        try {
          const response = await axios.get('http://localhost:3000/profile', {
            headers: { Authorization: token },
          });
          setUserData(response.data.user);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };
    fetchUserData();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const token = localStorage.getItem('token');
    try {
      console.log('Updating user data:', userData);
      const response = await axios.put('http://localhost:3000/profile', userData, {
        headers: { Authorization: token },
      });
      console.log('Response after update:', response.data);
      setUserData(response.data.user);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error.response?.data || error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-secondary mb-12">Your Profile</h1>

        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-secondary">Personal Information</h2>
            <button
              onClick={() => {
                if (isEditing) handleSave();
                setIsEditing(!isEditing);
              }}
              className="btn-color px-4 py-2 rounded-lg"
            >
              {isEditing ? 'Save' : 'Edit'}
            </button>
          </div>

          <div className="space-y-6">
            {/* Username */}
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700">Username</label>
              {isEditing ? (
                <input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                  className="p-2 border rounded-lg mt-1 text-gray-700 focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-700 mt-1">{userData.username}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="p-2 border rounded-lg mt-1 text-gray-700 focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-700 mt-1">{userData.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700">Phone</label>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  maxLength={10}
                  value={userData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '');
                    setUserData((prevData) => ({
                      ...prevData,
                      phone: value,
                    }));
                  }}
                  className="p-2 border rounded-lg mt-1 text-gray-700 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter numbers only"
                />
              ) : (
                <p className="text-gray-700 mt-1">{userData.phone}</p>
              )}
            </div>

            {/* Address */}
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700">Address</label>
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={userData.address}
                  onChange={handleChange}
                  className="p-2 border rounded-lg mt-1 text-gray-700 focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-700 mt-1">{userData.address}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button onClick={handleLogout} className="btn-color px-4 py-2 rounded-lg">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
