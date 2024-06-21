import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Authentication.css'; 

const Authentication = () => {
  const validationSchema = Yup.object().shape({
   userName: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const initialValues = {
   userName: '',
    password: '',
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="card p-4" style={{ width: '400px', backgroundColor: "#F6F7FC" }}>
        <h2 className="text-center mt-2 mb-2 text-secondary">LOGIN</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='text-start mt-2'>
                <label htmlFor="username" >Username</label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  className="form-control mb-3 mt-2 custom-input"
                  placeholder="EnteruserName"
                />
                <ErrorMessage name="username" component="div" className="text-danger mt-1" />
              </div>
              <div className='text-start mt-2'>
                <label htmlFor="password" >Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="form-control mb-3 mt-2 custom-input"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="text-danger mt-1" />
              </div>
              <button
                className="btn btn-primary w-100 btn-block mb-3 mt-3"
                type="submit"
                disabled={isSubmitting}
                style={{ backgroundColor: "#4E6376", borderColor: "#4E6376" }}
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Authentication;
