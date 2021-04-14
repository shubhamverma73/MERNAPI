const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mernapi', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to database');
}).catch(err => {
    console.log('Error'+err);
});