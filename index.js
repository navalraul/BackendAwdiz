// console.log("Hello World")
// console.log("Naval")

import express from "express";
import morgan from "morgan";
import { Naval,Navnath,Raul,Code } from "./controller/All-controllers.js";
import router, {} from './routes/UserRoutes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1', router);

// app.get('/naval',Naval);
// app.get('/navnath',Navnath);
// app.get('/raul',Raul);
// app.get('/code',Code);

app.listen(8000,()=> console.log("Working on port 8000"))