import userRoutes from "./user.routes.js";
import profileRoutes from "./profile.routes.js";
import postRoutes from "./post.routes.js";
import matterRoutes from "./materias.routes.js";
import testRoutes from "./examen.routes.js";
import careerRoutes from "./carreras.routes.js";
import asistRoutes from "./asistencias.routes.js";


export const Routes = () => ([
  userRoutes,
  profileRoutes,
  postRoutes,
  matterRoutes,
  testRoutes,
  careerRoutes,
  asistRoutes,
]);