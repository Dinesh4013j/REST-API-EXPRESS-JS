const express=require('express')
const app=express()
const path=require('path');
const cors=require('cors');
const send = require('send');
const errorHandler=require('./middleware/errorHandler.js');
const {logger} = require('./middleware/logEvents.js');
const { ca } = require('date-fns/locale/ca');
const PORT=process.env.PORT||3000;

app.use(logger)


const whitelist=['https://www.g.com','http://127.0.0.1:5500','http://localhost:3500']
const corsOptions={

    origin:(origin,callback)=>{
        if(whitelist.indexOf(origin)!==-1 || !origin){
            callback(null,true)
        }
        else{
            callback(new Error('not allowed by CORS'))
        }
    },
    optionsSuccessStatus:200
}
app.use(cors(corsOptions))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',express.static(path.join(__dirname,'./public')))
app.use('/subdir',express.static(path.join(__dirname,'./public')))

app.use('/subdir',require('./routes/subdir'))

app.use('/',require('./routes/root'))

app.use(errorHandler);




app.listen(PORT,()=>console.log(`server running on${PORT}`))

