import mongoose from "mongoose";

export const  connectDB = async () =>{
    const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://ramaelberry_db_user:mFYxFfqEV6d572ZN@version1.9bnnvce.mongodb.net/food-del?appName=version1';
    await mongoose.connect(mongoURI).then(()=>console.log("DB Connected"));
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.