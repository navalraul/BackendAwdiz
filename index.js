// console.log("Hello World")
// console.log("Naval")

import express from "express";
import morgan from "morgan";
import { Naval,Navnath,Raul,Code } from "./controller/All-controllers.js";
import router, {} from './routes/UserRoutes.js';
import mongoose from "mongoose";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1', router);

mongoose.connect('mongodb+srv://naval1305:naval1234@cluster0.k0bgc2r.mongodb.net/navalDB?retryWrites=true&w=majority')
.then(() => console.log("DB connected"))
.catch((err) => console.log("DB Error =>", err));

// app.get('/naval',Naval);
// app.get('/navnath',Navnath);
// app.get('/raul',Raul);
// app.get('/code',Code);

app.listen(8000,() => console.log("Working on port 8000"));