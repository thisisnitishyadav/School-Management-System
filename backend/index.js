const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// const bodyParser = require("body-parser")
const Routes = require("./routes/route.js")
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

//middleware
app.use(express.json({ limit: '10mb' }))
app.use(cors())


app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})