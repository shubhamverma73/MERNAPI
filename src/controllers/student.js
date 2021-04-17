//npm run dev
const express   = require('express');
const app       = express();
const port      = process.env.PORT || 3000;
require('./../db/conn');
require('./../models/students');
const stdRouter = require('./../routers/student');

// =================================== Methods use by our system ===========================================
app.use(express.json());
app.use(stdRouter);

app.listen(port, () => {
    console.log('connected to server');
});