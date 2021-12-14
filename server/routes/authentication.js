const express = require("express");
const { register, signin } = require("../controller/authentication");
const router = express.Router();
const { check } = require("express-validator");

router.post(
	"/register",
	[
		check("name").isLength({ min: 3 }),
		check("email").isEmail().withMessage("Please Provide a valid email"),
		check("password").isLength({ min: 5 }).withMessage("Password is too short"),
	],
	register
);

router.post(
	"/signin",
	[
		check("email").isEmail().withMessage("Please Provide a valid email"),
		check("password").isLength({ min: 5 }).withMessage("Password is required!"),
	],
	signin
);

module.exports = router;