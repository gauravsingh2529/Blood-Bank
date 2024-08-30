const mongoose=require('mongoose')
const colors=require('colors')

const connectDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Database ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`Mongo db database Error ${error}`.bgRed.white)
    }
}
module.exports=connectDB