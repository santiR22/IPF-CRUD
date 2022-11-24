// Importamos las configuraciones de "app" y las variables de entorno...
import app from "./app.js";
import { PORT } from "./src/config/config.js";
import { connectDB} from "./src/databases/mongodb.connection.js"


// Se inicializa la conexion a la base de datos...
connectDB()

// Se pone a correr el servidor...
app.listen(PORT, () => console.log(`App running on port ${PORT}!`));
