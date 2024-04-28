import mongoose from "mongoose"

const connectDB = () => {
    try {
        mongoose.connect(`${process.env.MONGO_URI}`).then((e) => {
            console.log("Connection Successfull")
        }).catch((e) => {
            console.log("Failed")
        })
    } catch (e) {
        console.log(e)
    }
}

export default connectDB