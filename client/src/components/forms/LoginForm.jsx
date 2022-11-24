import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth";

const LoginForm = ({ login, isAuthenticated }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  if (isAuthenticated) return navigate("/");

  return (
    <MDBContainer>
      <MDBRow className='mt-5 justify-content-center'>
        <MDBCol lg='5'>
          <form
            onSubmit={(e) => {
              handleOnSubmit(e);
            }}
          >
            <MDBCard shadow='5' className='md-4' border='dark'>
              <MDBCardHeader
                className='text-center'
                border='dark'
                style={{ color: "black" }}
              >
                <h3>Bienvenido!!!</h3>
              </MDBCardHeader>
              <MDBCardBody>
                <div className='mb-3'>
                  <MDBInput
                    label='usuario...'
                    style={{ color: "black" }}
                    value={username}
                    name='username'
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className='mb-3'>
                  <MDBInput
                    label='constraseña...'
                    style={{ color: "black" }}
                    value={password}
                    name='password'
                    type='password'
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <MDBRow className='mb-2 mt-3'>
                  <MDBCol className='d-flex justify-content-center'>
                    <MDBCheckbox label='Recordarme' defaultChecked />
                  </MDBCol>
                  <MDBCol>
                    <Link to='#!'>Forgot password?</Link>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              <MDBCardFooter border='dark' className='text-center'>
                <MDBBtn type='submit'>Continuar</MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginForm);
