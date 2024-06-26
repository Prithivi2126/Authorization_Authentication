// Authentication.js

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Authentication.css';

const Authentication = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required('Username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const initialValues = {
    userName: '',
    password: '',
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/user/login', {
        userName: values.userName,
        password: values.password,
      });

      console.log('Login response:', response.data); 

      if (response.data.success) {
   
        localStorage.setItem('loggedInUser', values.userName);

        
        localStorage.setItem('password', values.password);

        localStorage.setItem('accessToken', response.data.accessToken);

        if (response.data.userRole === 'ADMIN') {
          navigate('/Admindetails');
        } else {
          navigate('/Userdetails');
        }
      } else {
        alert('Incorrect username or password. Try entering your information again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Error occurred during login. Please try again.');
    }

    setSubmitting(false);
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="login_form p-3">
        <h3 className="text-center mb-3 mt-2 text-white fw-bold">LOGIN!!</h3>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="p-4">
              <div className="text-start mt-1">
                <Field
                  type="text"
                  id="userName"
                  name="userName"
                  className="form-control card"
                  placeholder="Username"
                  style={{ borderColor: "#ced4da" }}
                />
                <ErrorMessage name="userName">
                  {(msg) => (
                    <div className="text-white mt-1">
                      {msg}
                      <span className=" fw-bold " style={{ color: 'white', marginLeft: '3px' }}>*</span>
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div className="text-start mt-4">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="form-control card"
                  placeholder="Password"
                  style={{ borderColor: "#ced4da" }}
                />
                <ErrorMessage name="password">
                  {(msg) => (
                    <div className="text-white mt-1">
                      {msg}
                      <span className=" fw-bold " style={{ color: 'white', marginLeft: '3px' }}>*</span>
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div className="mt-4 mb-2">
                <button
                  className="btn w-100 fw-bold text-white"
                  type="submit"
                  disabled={isSubmitting}
                  style={{ backgroundColor: "#B4C398" }}
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Authentication;
