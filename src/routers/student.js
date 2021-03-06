const express   = require('express');
const router    = new express.Router();
const Students = require('./../models/students');
const commonhelper = require('./../helper/commonhelper');

// ================================ Create a new students (Using Promise) ===============================
/*router.post('/students', (req, res) => {
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
router.post('/student', async (req, res) => {
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
router.get('/student', async (req, res) => {
    try {
        const result = await Students.find();
        commonhelper.handleData(req, res, result);
    }
    catch(err) {
        commonhelper.handleError(err, res, 'Records not found, try again.');
    }
});

// ================================ Get data of specific user ===============================
router.get('/student/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Students.findById({_id: id}); //If you want to get by Phone or Email, use find instead of findById and replace _id with phone or email
        commonhelper.handleData(req, res, result);
    }
    catch(err) {
        commonhelper.handleError(err, res, 'Records not found, try again...');
    }
});

// ================================ Update data of specific user ===============================
router.patch('/student/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Students.findByIdAndUpdate({_id: id}, req.body, { //If you want to update by Phone or Email, use update instead of findByIdAndUpdate and replace _id with phone or email
            new: true //Return newly data to result variable
        });
        commonhelper.handleSuccess(req, res, 'Record updated successfully.');
    }
    catch(err) {
        commonhelper.handleError(err, res, 'Record not found, try again.');
    }
});

// ================================ Delete data of specific user ===============================
router.delete('/student/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Students.findByIdAndDelete({_id: id}); //If you want to delete by Phone or Email, use delete instead of findByIdAndDelete and replace _id with phone or email
        commonhelper.handleSuccess(req, res, 'Record deleted successfully.');
    }
    catch(err) {
        commonhelper.handleError(err, res, 'Records not deleted, try again.');
    }
});

module.exports = router;