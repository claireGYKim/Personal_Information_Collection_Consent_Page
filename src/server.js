// //express 모듈 호출
// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 5000;
//
// //http://localhost:5000/으로 접속 시 응답메시지 출력
// app.get('/',(req,res) => {
//     res.send('Server Response Success');
// })
//
// app.listen(PORT, () => {
//     console.log('Server run : http://localhost:${PORT}/')
// })

const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql')

var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Gyeongyeon2!!@",
    database : "dusrntlf",
});

connection.connect();

app.use(bodyParser.urlencoded({extende: false}));
app.use(bodyParser.json());
app.use(cors());
