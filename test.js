// test.js - ALTERNATE SOLUTION 3 (Advanced/Isolated Test Only)

const mongoose = require("mongoose");
const MONGO_URI = "mongodb://127.0.0.1:27017/myUserDB";

async function runTest() {
    // 1. Create a NAMED Connection
    const conn = await mongoose.createConnection(MONGO_URI).asPromise();

    // 2. Define Schema
    const UserSchema = new mongoose.Schema({ /* ... */ });

    // 3. Define Model on the NAMED Connection
    const User = conn.model('User', UserSchema); // ✅ Model defined on the connected instance

    // 4. Use the Model
    const user = new User({
        username: "TestUser_Alt3",
        email: "alt3_new@example.com",
        password: "hashedPassword123",
    });
    await user.save();
    console.log("User saved successfully! 💾");

    await conn.close(); // Close the named connection
}
runTest();