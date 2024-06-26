// Userdetails.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Userdetails = () => {
  const [userData, setUserData] = useState([]);
  const userName = localStorage.getItem('loggedInUser'); 

  useEffect(() => {
    const fetchData = async () => {
      if (!userName) {
        console.error('No userName found in localStorage');
        return;
      }

      try {
        console.log(`Fetching data for user: ${userName}`);
        const response = await axios.get(`http://localhost:8080/api/user/getuser/${userName}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Assuming you store the access token in localStorage
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [userName]);

  return (
    <div>
      <div className='list'>
        <h3 className='mt-3 fw-bold'>User Details</h3>
        <div className="table_change">
          <table className="table mt-4 container border-1">
            <thead>
              <tr>
                <th scope="col">SI.NO</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile No</th>
                <th scope="col">Password</th>
                <th scope="col">Confirm Password</th>
                <th scope="col">User Role</th>        
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.mobileNo}</td>
                  <td>{user.password}</td>
                  <td>{user.confirmPassword}</td>
                  <td>{user.userRole}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Userdetails;
