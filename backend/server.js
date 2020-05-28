const app = require('C:/Users/Admin/Desktop/SWAP/NODEJS/HowToWriteRestAPI/app.js');
const routes = require('C:/Users/Admin/Desktop/SWAP/NODEJS/HowToWriteRestAPI/routes/routes.js');
const bodyparser = require('body-parser');
require('dotenv').config();

app.use(bodyparser.urlencoded({ extended:true }));

app.use(bodyparser.json());

app.use('/api/REST/1.0/data/',routes);

const port = process.env.port;

app.listen(port,()=>{
    console.log("server is up and running on : ",port);
});
