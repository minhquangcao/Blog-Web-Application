import express from 'express';
import bodyParser from "body-parser";

var app = express();
const port = 3000;



app.listen(port, () => {
    console.log('Server is running on port 3000');
});