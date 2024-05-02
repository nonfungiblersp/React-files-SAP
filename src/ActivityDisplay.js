import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActivityDisplay = () => {
  const [userId, setUserId] = useState(1); // Default user ID is 1
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${userId}`);
        setUserEmail(response.data.data.email); // Accessing the email property directly
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function
      setUserEmail(null);
    };
  }, [userId]);

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  return (
    <div>
      <input
        type="number"
        value={userId}
        onChange={handleInputChange}
        min="1"
        max="12"
      />
      <div>
        {userEmail ? (
          <div>
            <h2>User Email</h2>
            <p>Email: {userEmail}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ActivityDisplay;
