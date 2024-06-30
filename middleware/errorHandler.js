const {logEvents}=require('./logEvents');

const errorHandler=(err,req,res,next)=>{
    console.log("dinesh")
    logEvents(`${err.name}:${err.message}`,'errLog.txt')
    console.log(err.stack)
    res.status(500).send(err.message);
}
module.exports=errorHandler;
