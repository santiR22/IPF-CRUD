import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import navLogo from "../../assets/nav-logo.png";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";

const Navbar = ({ logout/* , auth: { user } */, isAuthenticated }) => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logout()
    navigate("/login")
  }
  // if (isAuthenticated) return navigate("/login");

  return (
    <MDBNavbar expand='lg' dark style={{ backgroundColor: "#252525" }}>
      <MDBContainer fluid>
        <MDBNavbarBrand tag={Link} to='/'>
          <img src={navLogo} alt='logo' width={30} />
          IPF-devs
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBContainer fluid className='d-flex justify-content-end'>
            {isAuthenticated ? (
              <>
                <MDBBtn
                  tag={Link}
                  to='/new'
                  style={{ backgroundColor: "orangered" }}
                >
                  crear publicacion
                  <MDBIcon far icon='edit' className='mx-1' />
                </MDBBtn>
                <MDBBtn
                  tag={Link}
                  to='/login'
                  onClick={handleLogoutClick}
                  className='mx-2'
                  color='warning'
                >
                  cerrar sesion
                  <MDBIcon fas icon='sign-out-alt' className='mx-1' />
                </MDBBtn>
              </>
            ) : (
              <MDBBtn tag={Link} to='/login' className='me-2'>
                Iniciar sesion
              </MDBBtn>
            )}
          </MDBContainer>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);