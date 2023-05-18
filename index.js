// console.log("Hello World")
// console.log("Naval")

import express from "express";
import { Naval,Navnath,Raul,Code } from "./controller/All-controllers.js";

const app = express();

app.get('/naval',Naval);
app.get('/navnath',Navnath);
app.get('/raul',Raul);
app.get('/code',Code);

app.listen(8000)