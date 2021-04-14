//npm run dev
const express   = require('express');
const Students  = require('./../models/students');
const app       = express();
const port      = process.env.PORT || 3000;
require('./../db/conn');
require('./../models/students');
const commonhelper = require('./../helper/commonhelper');

app.use(express.json());
// ================================ Create a new students (Using Promise) ===============================
/*app.post('/students', (req, res) => {
    const user = new Students(req.body);
    user.save()
    .then(() => {
        commonhelper.handleSuccess(req, res, 'Student created successfully.');
    })
    .catch(err => {
        commonhelper.handleError(err, res, 'Student not created, try again.');
    })
});*/

// ================================ Create a new student (Using Async Await) ===============================
app.post('/student', async (req, res) => {
    try {
        const user = new Students(req.body);
        const result = await user.save();
        commonhelper.handleSuccess(req, res, 'Student created successfully.');
    }
    catch(err) {
        commonhelper.handleError(err, res, 'Student not created, try again.');
    }
});

// ================================ Get data of all students ===============================
app.get('/student', async (req, res) => {
    try {
        const result = await Students.find();
        commonhelper.handleData(req, res, result);
    }
    catch(err) {
        commonhelper.handleError(err, res, 'Records not found, try again.');
    }
});

// ================================ Get data of specific user ===============================
app.get('/student/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Students.findById({_id: id});
        commonhelper.handleData(req, res, result);
    }
    catch(err) {
        commonhelper.handleError(err, res, 'Records not found, try again.');
    }
});

// ================================ Update data of specific user ===============================
/*app.patch('/student/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Students.findByIdAndUpdate(id, req.body, {
            new: true
        });
        commonhelper.handleSuccess(req, res, 'Record updated successfully.');
    }
    catch(err) {
        commonhelper.handleError(err, res, 'Records not found, try again.');
    }
});*/

// ================================ Delete data of specific user ===============================
app.delete('/student/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Students.findByIdAndDelete({_id: id});
        commonhelper.handleSuccess(req, res, 'Record deleted successfully.');
    }
    catch(err) {
        commonhelper.handleError(err, res, 'Records not deleted, try again.');
    }
});

app.listen(port, () => {
    console.log('connected to server');
});