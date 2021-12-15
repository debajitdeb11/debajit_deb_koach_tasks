import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { Navigate, Redirect, Route } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import CustomButton from "./CustomButton";
import { signin, register, authenticate, isAuthenticated } from "../authentication";

const CustomForm = () => {

  /************** Hooks ****************/ 
  const [values, setValues] = useState({
    email: "test@test.com",
    password: "123456",
    mobileNumber: "1234567890",
    error: "",
    loading: false,
    didRedirect: false,
  })


  const {email, password, error, mobileNumber, loading, didRedirect} = values;
  
  const { user } = isAuthenticated();

  const onLogin = (e) => {
    e.preventDefault();
    setValues({...values, error: false, loading: true});
    signin({
      email,
      password,
    }).then((data) => {
      console.log(data);

      if (data.error) {
        setValues({...values, error: data.error, loading: false});
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            didRedirect: true,
          })
        })
      }

    }).catch((err) => {
      console.log(error);
    })
  }

  const onRegister = (e) => {
    e.preventDefault();
    register({
      email,
      password,
      mobileNumber
    }).then((data) => {
      console.log(data.error[0].msg);

      if (data.error) {
        setValues({...values, error: data.error[0].msg, loading: false});
      } else {
        setValues({
          ...values,
          email: "",
          password: "",
          mobileNumber: "",
          loading: false,
          didRedirect: ""
        })
      }

    }).catch((err) => {
      console.log(err);
    })
  }

  const failureMessage = () => {
    return (
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div
                    className="alert alert-danger"
                    style={{ display: error ? "" : "none" }}
                >
                    {error}
                </div>
            </div>
        </div>
    );
};
  
const handleChange = (name) => (e) => {
  setValues({ ...values, error: false, [name]: e.target.value });
};

const redirect = () => {
  if (didRedirect) {
    return (<Redirect to="/welcome" />)

  }
}

  return (
    
    <div>
      <Container
        className="p-3 rounded"
        style={{
          backgroundColor: "white"
        }}
      >
        <Row>
          <Col className="px-4 py-4">
            <Form>
              <p className="h2 p-2">
                {" "}
                <u>Lo</u>gin
              </p>
              <p>{error}</p>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                type="email" 
                placeholder="Enter email id" 
                value={email} 
                onChange={handleChange("email")}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label></Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Enter password" 
                value={password} 
                onChange={handleChange("password")}
                />
              </Form.Group>

              <CustomButton buttonTitle="Login" onClick={onLogin} />
            </Form>
          </Col>

          <Col className="px-4 py-4">
            <Form>
              <p className="h2 p-2">
                {" "}
                <u>Re</u>gister
              </p>
              <p>{error}</p>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                type="email" 
                placeholder="Enter email id" 
                value={email}
                onChange={handleChange("email")}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label></Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Enter password" 
                value={password}
                onChange={handleChange("password")}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Mobile Number"
                  value={mobileNumber}
                  onChange={handleChange("mobileNumber")}
                />
              </Form.Group>

              <CustomButton buttonTitle="Register" onClick={onRegister} />
            </Form>
          </Col>
        </Row>
      </Container>
      {redirect()}
    </div>
  );
};

export default CustomForm;
