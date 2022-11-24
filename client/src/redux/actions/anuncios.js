import axios from "axios";
import {
  GET_ANUNCIOS,
  LIMPIAR_ANUNCIOS,
  ERROR_ANUNCIO,
  ELIMINAR_PUBLICACION,
  AGREGAR_ANUNCIO,
} from "./types";

//Get posts
export const getPosts = () => async (dispatch) => {
  dispatch({ type: LIMPIAR_ANUNCIOS });

  try {
    const res = await axios.get("http://localhost:5000/api/get-posts");

    dispatch({
      type: GET_ANUNCIOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_ANUNCIO,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

//Agregar Anuncio
export const crearAnuncio = (formData) => async (dispatch) => {
  const config = { headers: { "Content-Type": "application/json" } };

  try {
    const res = await axios.post(
      `http://localhost:5000/api/create-post`,
      formData,
      config
    );
    console.log(res);

    dispatch({
      type: AGREGAR_ANUNCIO,
      payload: res.data,
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: ERROR_ANUNCIO,
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      });
    }
  }
};

//Eliminar Publicacion
export const eliminarAnuncio = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/api/delete-post/${id}`);

    dispatch({
      type: ELIMINAR_PUBLICACION,
      payload: id,
    });

    /* dispatch(setAlert('Post eliminado', 'success'))    */
  } catch (err) {
    dispatch({
      type: ERROR_ANUNCIO,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const limpiarAnuncios = () => {
  dispatch({
    type: LIMPIAR_ANUNCIOS,
    payload: null,
  });
};
