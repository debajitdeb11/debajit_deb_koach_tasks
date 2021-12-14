const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require("dotenv").config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
const authRoutes = require("./routes/authentication");
const userRoutes = require("./routes/user");

// CustomRoutes
app.use("/api", authRoutes);
app.use("/api", userRoutes);

// Connect to Database
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		connectTimeoutMS: 15000,
	})
	.then(() => console.log("Database is successfully connected!"))
	.catch((err) => {
		console.error("Failed to connect to the database!", err.message);
	});

app.get("/", (req, res) => {
	res.send("<h1>Server is running!</h1>");
});


// listen
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));