import mongoose from "mongoose"

const connectDB = () => {
    try {
        mongoose.connect("mongodb+srv://mohitbhandari852:f6FAiynqSEsZ95Ra@todos.rjcstoi.mongodb.net/todos").then((e) => {
            console.log("Connection Successfull")
        }).catch((e) => {
            console.log("Failed")
        })
    } catch (e) {
        console.log(e)
    }
}

export default connectDB