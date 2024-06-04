//Imported values
import express from "express";
import mongoose from "mongoose";
import config from './core/config.js';
import userRouter from "./entities/users/router.js";
import itemRouter from "./entities/items/router.js";
import enemyRouter from "./entities/enemies/router.js";

import cors from 'cors'

const app = express();

mongoose.connect(config.DB_URL)
  .then(() => {
    console.log("Conectado a la base de datos");
  })

  .catch((err) => {
    console.log(err, "Problemas para conectar a la base de datos");
});


let corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  // methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  preflightContinue: false,
  // allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
  optionsSuccessStatus: 204
};

app.use(express.json());
app.use(cors(corsOptions));
app.use('/user', userRouter);
app.use('/items', itemRouter);
app.use('/enemies', enemyRouter);
app.get('/',(req, res)=>(res.send('/////OK/////')))


app.listen(config.PORT, () => console.log(`Servidor levantado en ${config.PORT}`));