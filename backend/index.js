const express = require('express')

const app = express()
const port = 8000

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Connect DB success")
})
.catch((err) => {
    console.log(err)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', async (req, res) => {
    // await User.find({}, function (err, users) {
    //     var data = []
    //     users.forEach(function (user) {
    //         data.push(user.email);
    //     });
    //     res.send(data)
    // }).clone().catch(function (err) { console.log("getAllUserEmail Error : " + e); })
    res.send("Test")
})

app.post('/', async (req, res) => {
    // await User.find({}, function (err, users) {
    //     var data = []
    //     users.forEach(function (user) {
    //         data.push(user.email);
    //     });
    //     res.send(data)
    // }).clone().catch(function (err) { console.log("getAllUserEmail Error : " + e); })
    res.send("Test")
})