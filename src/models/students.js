const mongoose  = require('mongoose');
const validator = require('validator');

// Schema
const studentsSchema = new mongoose.Schema({
    name:   { 
                type: String, 
                required: true,
                minlength: 4
            },
    email:  {
                type: String,
                required: true,
                unique: [true, "Email is already exists"],
                validate(value) {
                    if(!validator.isEmail(value)) {
                        throw new Error('Email not valid');
                    }
                }
            },
    password:   { 
                    type: String, 
                    required: true,
                    minLength: [4, 'Password should be at least four characters']
                },
    /*passwordConfirm:{
                        type: String,
                        required: [true, 'Retype your password.'],
                        validate:{
                                    validator: function(el) {
                                    return el === this.password;
                                },
                        message: 'Passwords don\'t match.'
                        }
                    },*/
    phone:  {
                type: Number,
                min: 10,
                // max: 10,
                required: true,
                unique: true
            },
    address:    {
                    type: String,
                    required: true
                },
    date:   { 
                type: Date, 
                default: Date.now 
            }
});

// Collection create
const Students = new mongoose.model('Students', studentsSchema);

module.exports = Students;