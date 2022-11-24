import { combineReducers } from "redux";
import anuncios from "./anuncios";
import auth from "./auth";

export default combineReducers({
  auth,
  anuncios,
});
