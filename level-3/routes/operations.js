const express = require("express");
const router = express.Router();

const { insertCollegeData, insertGroupData, insertStudentData, opeationOne } = require("../controller/operations");

router.put("/insertCollege", insertCollegeData);
router.put("/insertGroup", insertGroupData);
router.put("/insertStudent", insertStudentData);


router.get("/operation1", opeationOne);

module.exports = router;