const userModel = require('C:/Users/Admin/Desktop/SWAP/NODEJS/HowToWriteRestAPI/model/accountModel.js')

module.exports.account = (credentials,callback) => {
    userModel.account(credentials,(err,data) => {
        if(err){
            callback(err);
        }else{
            callback(null,data);  //it has two param first error is null and second is data
        }
    })
}
