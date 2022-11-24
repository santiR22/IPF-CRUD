import {
  GET_ANUNCIOS,
  LIMPIAR_ANUNCIOS,
  ERROR_ANUNCIO,
  AGREGAR_ANUNCIO,
  ELIMINAR_PUBLICACION,
} from "../actions/types";

const initialState = {
  anuncios: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ANUNCIOS:
      return {
        ...state,
        anuncios: payload,
        loading: false,
      };
    case LIMPIAR_ANUNCIOS:
      return {
        ...state,
        anuncios: payload,
        loading: false,
      };
    case ERROR_ANUNCIO:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case AGREGAR_ANUNCIO:
      return {
        ...state,
        anuncios: [payload, ...state.anuncios],
        loading: false,
      };
    case ELIMINAR_PUBLICACION:
      return {
        ...state,
        anuncios: state.anuncios.filter((item) => item._id != payload),
        loading: false,
      };
    default:
      return state;
  }
}
