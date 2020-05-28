const userServices = require('C:/Users/Admin/Desktop/SWAP/NODEJS/HowToWriteRestAPI/services/userServices.js');

module.exports.account = (req,res) =>{

    userServices.register(credentials,(err,data)=>{

        let response = {};
        
        if(err){
            response.success = false;
            response.message = 'account creation unsuccessful';
            response.error = err;
            res.send(response).status(500);
        }else{
            response.success = true;
            response.message = 'account creation successful';
            response.result = data;
            res.send(response).status(200);
        }       

    })    

}

