import { MDBRow } from "mdb-react-ui-kit";
import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/post/PostCard";
import { getPosts } from "../redux/actions/anuncios";

export const Home = () => {
  const anuncios = useSelector((state) => state.anuncios);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const renderMain = () => {
    if (anuncios.length === 0) {
      return (
        <h3 className='text-black text-center mt-5'>
          No se ha encontrado ninguna publicacion &#x1F610;
        </h3>
      );
    }

    return <PostCard posts={anuncios} />;
  };

  return (
    <MDBContainer className='mt-2 w-auto'>
      <h2 className='text-center text-black mb-3'>
        Publicaciones actuales: {anuncios.length}
      </h2>
      <MDBRow>{renderMain()}</MDBRow>
    </MDBContainer>
  );
};
