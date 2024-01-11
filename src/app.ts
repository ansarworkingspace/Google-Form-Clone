import express, {Application,Request,Response,NextFunction} from 'express'

const app: Application = express()
const port:number = 4000

const add = (a:number,b:number):number => a+b


app.get('/',(req:Request,res:Response)=>{
    console.log(add(5,4))
    res.send("hi i am server")
})

app.listen(port,()=>{
    console.log(`server started on port : 5000`)
})