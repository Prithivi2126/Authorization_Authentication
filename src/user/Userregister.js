import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Userregister.css';

const Userregister = () => {
  const validationSchema = Yup.object().shape({
    userId: Yup.string().required('User ID is required'),
    userName: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    mobileNo: Yup.string()
      .matches(/^[0-9]{10}$/, 'Invalid mobile number')
      .required('Mobile number is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    userRole: Yup.string().required('User role is required'),
  });

  const initialValues = {
    userId: '',
    userName: '',
    email: '',
    mobileNo: '',
    password: '',
    confirmPassword: '',
    userRole: '',
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="card ">
        <h3 className="text-center mt-3 User_head">User Registration</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='px-5'>
              <div className="text-start mt-2">
                <Field
                  type="text"
                  id="userId"
                  name="userId"
                  className="form-control "
                  placeholder="User ID"
                />
                <ErrorMessage name="userId" component="div" className="text-danger mt-1" />
              </div>
              
              <div className="text-start mt-2">
                <Field
                  type="text"
                  id="userName"
                  name="userName"
                  className="form-control "
                  placeholder="Username"
                />
                <ErrorMessage name="userName" component="div" className="text-danger mt-1" />
              </div>

              <div className="text-start mt-2">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-control "
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" className="text-danger mt-1" />
              </div>

              <div className="text-start mt-2">
                <Field
                  type="text"
                  id="mobileNo"
                  name="mobileNo"
                  className="form-control "
                  placeholder="Mobile Number"
                />
                <ErrorMessage name="mobileNo" component="div" className="text-danger mt-1" />
              </div>

              <div className="text-start mt-2">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="form-control "
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="text-danger mt-1" />
              </div>

              <div className="text-start mt-2">
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control "
                  placeholder="Confirm Password"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-danger mt-1" />
              </div>

              <div className="text-start mt-2">
                <Field as="select" id="userRole" name="userRole" className="form-control ">
                  <option value="" label="Select role" />
                  <option value="admin" label="Admin" />
                  <option value="user" label="User" />
                </Field>
                <ErrorMessage name="userRole" component="div" className="text-danger mt-1" />
              </div>

              <div className="mt-4 mb-2">
                <button
                  className="btn w-100 fw-bold text-white mb-3"
                  type="submit"
                  disabled={isSubmitting}
                  style={{ backgroundColor: "#B4C398" }}
                >
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Userregister;
