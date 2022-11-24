import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBFile,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { LoadingBtn } from "./buttons/LoadingBtn";
import { SaveBtn } from "./buttons/SaveBtn";
import { crearAnuncio, limpiarAnuncios } from "../../redux/actions/anuncios.js";
import { connect } from "react-redux";

const PostForm = ({ crearAnuncio, limpiarAnuncios }) => {
  const navigate = useNavigate();
  const params = useParams();
  const values = {
    titulo: "",
    descripcion: "",
    imagen: null,
  };

  //   useEffect(() => {
  //     (async () => {
  //       if (params.id) {
  //         const data = await getPost(params.id);
  //         setPost(data);
  //       }
  //     })();
  //   }, [params.id]);

  return (
    <div>
      <Formik
        initialValues={values}
        validationSchema={yup.object({
          titulo: yup.string().required("Se require un titulo."),
          descripcion: yup.string().required("Se require una descripcion."),
        })}
        onSubmit={async (values, actions) => {
          console.log(values);
          await crearAnuncio(values);
          actions.setSubmitting(false);
          navigate("/");
          limpiarAnuncios();
        }}
        enableReinitialize={true}
      >
        {({ handleSubmit, setFieldValue, isSubmitting }) => (
          <MDBContainer className='mt-5'>
            <Form onSubmit={handleSubmit}>
              <MDBRow center>
                <MDBCol xs={8} xl={6} lg={8} sm={12} md={10}>
                  <MDBCard className='bg-dark' border='black' shadow='5'>
                    {/* Titulo... */}
                    <MDBCardBody>
                      <div className='mb-3'>
                        <MDBCardTitle className='text-white'>
                          Titulo
                        </MDBCardTitle>
                        <Field
                          name='titulo'
                          className='form-control'
                          placeholder='añada un titulo...'
                        />
                        <ErrorMessage
                          component='p'
                          name='titulo'
                          className='text-danger'
                        />
                      </div>

                      {/* Descripcion... */}
                      <div className='mb-3'>
                        <MDBCardTitle className='text-white'>
                          Descripcion
                        </MDBCardTitle>
                        <Field
                          name='descripcion'
                          className='form-control'
                          placeholder='añada una descripcion...'
                          component='textarea'
                          rows={3}
                        />
                        <ErrorMessage
                          component='p'
                          name='descripcion'
                          className='text-danger'
                        />
                      </div>

                      {/* Imagen (opcional)... */}
                      <div className='mb-3'>
                        <MDBCardTitle className='text-white'>
                          Imagen
                        </MDBCardTitle>
                        <MDBFile
                          name='image'
                          onChange={(e) =>
                            setFieldValue("imagen", e.target.files[1])
                          }
                        />
                      </div>

                      {/* submit buttons... */}
                      <div className='text-end'>
                        <MDBBtn
                          color='danger'
                          className='me-2'
                          onClick={() => navigate("/")}
                        >
                          cancelar <MDBIcon fas icon='times' className='mx-1' />
                        </MDBBtn>
                        <MDBBtn
                          type='submit'
                          color='success'
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? <LoadingBtn /> : <SaveBtn />}
                        </MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </Form>
          </MDBContainer>
        )}
      </Formik>
    </div>
  );
};

// FormAnuncios.propTypes = {
//   crearAnuncio: PropTypes.func.isRequired,
//   limpiarAnuncios: PropTypes.func.isRequired,
// };

export default connect(null, { crearAnuncio, limpiarAnuncios })(PostForm);
