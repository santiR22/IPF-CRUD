import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <MDBContainer>
      <MDBRow className='mt-5 justify-content-center'>
        <MDBCol size='auto'>
          <form>
            <MDBCard
              shadow='5'
              className='md-4'
              border='dark'
              background='beige'
            >
              <MDBCardHeader
                className='text-center'
                border='dark'
                style={{ color: "black" }}
              >
                <h3>Registrese!!!</h3>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBRow className='mb-3'>
                  <MDBCol xs={12} md={6}>
                    <MDBInput
                      label='Nombre...'
                      style={{ color: "black" }}
                      // labelStyle={{ color: "black" }}
                      className='mb-3'
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      label='Apellido...'
                      style={{ color: "black" }}
                      // labelStyle={{ color: "black" }}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  className='mb-3'
                  type='email'
                  id='form3Example3'
                  label='correo electronico...'
                  style={{ color: "black" }}
                  // labelStyle={{ color: "black" }}
                />
                <MDBInput
                  className='mb-3'
                  type='password'
                  id='form3Example4'
                  label='contraseña...'
                  style={{ color: "black" }}
                  // labelStyle={{ color: "black" }}
                />
              </MDBCardBody>
              <MDBCardFooter border='dark' className='text-center'>
                <MDBBtn onClick={handleSubmit}>Terminar</MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
