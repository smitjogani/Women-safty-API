const { connectDB } = require("./config/db");
const app = require("./index")
const dotenv = require('dotenv');
dotenv.config();

const PORT = 5000;

app.listen(PORT, async() => {
    await connectDB();
    console.log(`Server run on ${PORT}`);
})