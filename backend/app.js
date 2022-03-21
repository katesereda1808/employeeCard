const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
res.set('Access-Control-Allow-Origin', '*');
res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
res.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
res.set('Access-Control-Allow-Credentials', true);
next();
});

app.get('/',(req,res)=>{
    res.status(200).send();
})
app.post('/',(req, res)=>{
    console.log(req);
    res.status(200).send();
})
app.listen(5000,()=>{
    console.log('App on port 5000');
})


