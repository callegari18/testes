const multer = require ("multer");
const path = require ("path");


const multerConfig = multer.diskStorage ({
    destination:(req,file,callback)=>{
        callback(null,path.resolve(__dirname,"./../upload"));
    },
    filename:function(req,file,callback){
        callback(null,file.fieldname +"_"+ Date.now() +"_"+ file.originalname);
    }
})
module.exports={storage:multerConfig};