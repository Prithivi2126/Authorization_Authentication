import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Adminregister.css';

const Adminregister = () => {
  const validationSchema = Yup.object().shape({
    userName: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    mobileNo: Yup.string()
      .matches(/^[0-9]{10}$/, 'Invalid mobile number')
      .required('Mobile number is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const initialValues = {
    userName: '',
    email: '',
    mobileNo: '',
    password: '',
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center" >
      <div className="admin_form p-4 ">
        <h3 className="text-center mb-4 text-white fw-bold">Admin Registration</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='p-3'>
              <div className=" text-start mt-1">
                <Field
                  type="text"
                  id="userName"
                  name="userName"
                  className="form-control card"
                  placeholder="Username"
                  style={{ borderColor: "#ced4da" }}
                />
                <ErrorMessage name="userName" component="div" className="text-danger mt-1" />
              </div>

              <div className=" text-start mt-3">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-control card"
                  placeholder="Email"
                  style={{ borderColor: "#ced4da" }}
                />
                <ErrorMessage name="email" component="div" className="text-danger mt-1" />
              </div>

              <div className=" text-start mt-3">
                <Field
                  type="text"
                  id="mobileNo"
                  name="mobileNo"
                  className="form-control card"
                  placeholder="Mobile Number"
                  style={{ borderColor: "#ced4da" }}
                />
                <ErrorMessage name="mobileNo" component="div" className="text-danger mt-1" />
              </div>

              <div className=" text-start mt-3">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="form-control card"
                  placeholder="Password"
                  style={{ borderColor: "#ced4da" }}
                />
                <ErrorMessage name="password" component="div" className="text-danger mt-1" />
              </div>

              <div className="mt-4 mb-2">
                <button
                  className="btn w-100 fw-bold text-white"
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

export default Adminregister;
