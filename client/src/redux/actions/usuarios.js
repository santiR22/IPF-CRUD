import axios from "axios";

import { GET_USUARIOS, LIMPIAR_USUARIO, ERROR_USUARIO } from "./types";

export const getAlumnos = () => async (dispatch) => {
  dispatch({ type: LIMPIAR_USUARIO });

  try {
    const res = await axios.get("http://localhost:5000/api/get-users");
    console.log(res);
    dispatch({
      type: GET_USUARIOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_USUARIO,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};
