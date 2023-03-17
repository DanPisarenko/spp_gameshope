const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(`mongodb+srv://dan:dan@cluster0.jll2j6z.mongodb.net/?retryWrites=true&w=majority`)
        app.listen(PORT, () => {
            console.log("Сервер начал свою работу. порт: localhost:", PORT)
        })
    }catch (e){
        console.log("ошибка стоп 00000 \n", e)
    }
}
start()