var express = require('express');

var app = express();

app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

const users = [
    {
        "name": "John Smith",
        "email": "john.smith@fake.com"
    },
    {
        "name": "Matthew Jones",
        "email": "matthew.jones@fake.com"
    },
    {
        "name": "Jane Doe",
        "email": "jane.doe@fake.com"
    }
];


app.use('/', (req, res) => {
    let filteredUsers = users;
    const searchQuery = req.query.q;
    if (req.query.q) {
        filteredUsers = users.filter((u) => u.name.includes(searchQuery) || u.email.includes(searchQuery))
    }
    res.send({
        results: filteredUsers
    })
});


module.exports = app;
