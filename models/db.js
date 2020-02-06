const mongoose = require('mongoose');

mongooose.connect('mongodb://localhost:27017/EmployeeDB', {
    useNewUrlParser: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeed.')
    }
});

require('./employee.model');