import {
  MDBCardImage,
  MDBCardFooter,
  MDBBtn,
  MDBCard,
  MDBCol,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
} from "mdb-react-ui-kit";
import toast from "react-hot-toast";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { eliminarAnuncio } from "../../redux/actions/anuncios";

const PostCard = ({ posts, eliminarAnuncio }) => {
  const anuncios = posts.anuncios;
  const navigate = useNavigate();
  console.log(anuncios)

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div className={`${t.visible ? "animate-enter" : "animate-leave"}`}>
          <p className='text-white'>Deseas eliminar esta publicacion?</p>
          <div className='text-center'>
            <MDBBtn
              className='me-2'
              color='success'
              onClick={() => toast.dismiss(t.id)}
            >
              Cancelar
            </MDBBtn>
            <MDBBtn
              color='danger'
              onClick={() => {
                eliminarAnuncio(id);
                toast.dismiss(t.id);
              }}
            >
              Eliminar
            </MDBBtn>
          </div>
        </div>
      ),
      {
        style: {
          background: "#202020",
        },
        position: "top-center",
      }
    );
  };

  return (
    <>
      {anuncios?.length > 0 &&
        anuncios?.map((item) => (
          <MDBCol xs={8} md={6} xl={3} lg={4} key={item._id} className='mb-3'>
            <MDBCard className='md-4 text-black' border='dark' shadow='5'>
              {item.imagen && (
                <MDBCardImage
                  style={{ borderBottom: "2px solid black" }}
                  position='top'
                  height='200'
                  alt='img'
                  src={item.imagen.url}
                />
                
              )}
              <MDBCardBody>
                <MDBCardTitle>{item.titulo}</MDBCardTitle>
                <MDBCardText>{item.descripcion}</MDBCardText>
              </MDBCardBody>
              <MDBCardFooter
                className='d-flex justify-content-center'
                border='dark'
              >
                <MDBBtn
                  className='me-2'
                  color='warning'
                  onClick={() => navigate(`/post/${item._id}`)}
                >
                  editar
                </MDBBtn>
                <MDBBtn
                  color='danger'
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(item._id);
                  }}
                >
                  eliminar
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  anuncio: state.anuncios,
  auth: state.auth,
});

export default connect(mapStateToProps, { /* getPosts, */ eliminarAnuncio })(
  PostCard
);