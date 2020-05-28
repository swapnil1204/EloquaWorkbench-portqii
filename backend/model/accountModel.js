const groupSchema = require('C:/Users/Admin/Desktop/SWAP/NODEJS/HowToWriteRestAPI/schema/ApiGroup.js');

const userSchemaInstance = mongoose.model('APIGROUP',groupSchema);

module.exports.register = (credential,callback) => {

    const credentialParam = new userSchemaInstance({ });

    console.log('credential param from register ',credential.email,credential.password);

    credentialParam.save((err,data)=>{

        let result = {}
        
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }       

    });

}



