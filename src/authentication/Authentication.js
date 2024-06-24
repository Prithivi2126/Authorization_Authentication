import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
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

  const onSubmit = (values, { setSubmitting }) => {
    const registeredUser = JSON.parse(localStorage.getItem('user'));

    if (
      registeredUser &&
      registeredUser.userName === values.userName &&
      registeredUser.password === values.password
    ) {
      navigate('/admin');
    } else {
      alert('Invalid username or password');
    }

    setSubmitting(false);
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="login_form p-5">
        <h3 className="text-center mb-3 mt-2 text-white fw-bold">LOGIN</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='p-3 '>
              <div className="text-start mt-1">
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

              <div className="text-start mt-4">
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
