const express = require('express');
const cookieParser = require('cookie-parser');
const assignUuid = require('./middlewares/assignUuid');
const app = express();
const path = require('path');
const port = 3000;
const route=require("./routes/routes.js")
app.use(cookieParser());
app.use(assignUuid);
app.use(express.json());
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:false}));
app.use("/",route);

app.listen(port,()=>console.log(`server started on port ${port}`));