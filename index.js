const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./database");
require("./src/models/Post");

const app = express();

// // middlewares
app.use(express.json());

////este se usa para para que lo reconozca porque lo mando desde un formulario
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

// // para configurar en donde va a estar la carpeta de views
app.set("views", __dirname + "/src/views");

// // para configurar en donde va a estar la carpeta public
app.use(express.static("public"));

// // // para configurar el motor de plantillas
app.set("view engine", "ejs");


//utilizo el enrutador
app.use("/post", require("./routes/posts.routes"));

app.listen(4000, () => {
  //verificar la conxion
  // sequelize.authenticate();
  //creo la tabla en la base de datos
  sequelize.sync({ force: false });

  console.log("server on port 4000");
});
