import { GET_USUARIOS, LIMPIAR_USUARIO, ERROR_USUARIO } from "../actions/types";

const initialState = {
  usuarios: [],
  usuario: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USUARIOS:
      return {
        ...state,
        usuarios: payload,
        loading: false,
      };
    case LIMPIAR_USUARIO:
      return {
        ...state,
        usuario: null,
        loading: false,
      };
    case ERROR_USUARIO:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
