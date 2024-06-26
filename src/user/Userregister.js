import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import './Userregister.css';
import axios from 'axios';

const Userregister = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    mobileNo: Yup.string()
      .matches(/^[0-9]{10}$/, 'Invalid phone number')
      .required('Mobile number is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
      )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    userRole: Yup.string().required('User role is required'),
  });

  const initialValues = {
    userName: '',
    email: '',
    mobileNo: '',
    password: '',
    confirmPassword: '',
    userRole: '',
  };

  const postData = async (values) => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/user/register', values);
      console.log(response.data);
      localStorage.setItem('user', JSON.stringify(values));
      navigate('/Authentication');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const onSubmit = (values, { setSubmitting }) => {
    postData(values);
    setSubmitting(false);
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="card">
        <h3 className="text-center mt-3 User_head">User Registration</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="px-5">
              <div className="text-start mt-2">
                <Field
                  type="text"
                  id="userName"
                  name="userName"
                  className="form-control"
                  placeholder="Username"
                />
                <ErrorMessage name="userName" component="div" className="text-danger" />
              </div>

              <div className="text-start mt-2">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>

              <div className="text-start mt-2">
                <Field
                  type="number"
                  id="mobileNo"
                  name="mobileNo"
                  className="form-control"
                  placeholder="Mobile Number"
                />
                <ErrorMessage name="mobileNo" component="div" className="text-danger" />
              </div>

              <div className="text-start mt-2">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>

              <div className="text-start mt-2">
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Confirm Password"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
              </div>

              <div className="text-start mt-2">
                <Field as="select" id="userRole" name="userRole" className="form-control">
                  <option value="" label="Select role" />
                  <option value="ADMIN" label="ADMIN" />
                  <option value="USER" label="USER" />
                </Field>
                <ErrorMessage name="userRole" component="div" className="text-danger" />
              </div>

              <div className="mt-4">
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
        <div className="text-center mb-2">
          <p>
            Already have an account? <Link to="/Authentication">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Userregister;
