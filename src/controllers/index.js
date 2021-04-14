//npm run dev
const express   = require('express');
const Students  = require('./../models/students');
const app       = express();
const port      = process.env.PORT || 3000;
require('./../db/conn');
require('./../models/students');
const commonhelper = require('./../helper/commonhelper');

app.use(express.json());
// ================================ Create a new students ===============================
app.post('/students', (req, res) => {
    const user = new Students(req.body);
    user.save()
    .then(() => {
        console.log('done');
        res.setHeader('Content-Type', 'application/json');
        res.status(201).send(JSON.stringify({ status: 200, data: [], message: 'Student created successfully' }));
    })
    .catch(err => {
        commonhelper.handleError(err, res);
    })
});

app.listen(port, () => {
    console.log('connected to server');
})