const express=require('express')
const app=express()
const path=require('path');
const cors=require('cors');
const send = require('send');
const corsOptions=require('./config/corsOptions.js')
const errorHandler=require('./middleware/errorHandler.js');
const {logger} = require('./middleware/logEvents.js');
const { ca } = require('date-fns/locale/ca');
const PORT=process.env.PORT||3000;

app.use(logger)



app.use(cors(corsOptions))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',express.static(path.join(__dirname,'./public')))
app.use('/subdir',express.static(path.join(__dirname,'./public')))

app.use('/subdir',require('./routes/subdir'))

app.use('/',require('./routes/root'))
console.log("dines")
app.use('/employees',require('./routes/api/employees'))

app.use(errorHandler);




app.listen(PORT,()=>console.log(`server running on${PORT}`))

