const College = require("../model/college");
const Group = require("../model/group");
const Student = require("../model/student");

const jsonCollegeData = require("../data/input1.json");
const jsonGroupData = require("../data/input2.json");
const jsonStudentData = require("../data/input3.json");

// insert
exports.insertCollegeData = (req, res) => {
  College.insertMany(jsonCollegeData)
    .then((data) => {
      console.log("College Data insertion success");
      return res.json(data).status(200);
    })
    .catch((err) => {
      console.log(err);
    });

};

exports.insertGroupData = (req, res) => {
  Group.insertMany(jsonGroupData)
    .then((data) => {
      console.log("Group Data insertion success");
      return res.json(data).status(200);

    })
    .catch((err) => {
      console.log(err);
    });

    
};

exports.insertStudentData = (req, res) => {
  Student.insertMany(jsonStudentData)
    .then((data) => {
      console.log("Student Data insertion success");
      return res.json(data).status(200);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Get Data
exports.opeationOne = (req, res) => {
  const activeCollege = () =>
    College.find({ status: true }).exec((err, colleges) => {
      if (err || !colleges) {
        return res.status(400).json({
          error: "Products not found",
        });
      }
      console.log(colleges)
      return colleges.length;
    });

    console.log(activeCollege)

  const activeGroup = () =>
    Group.find({ status: true }).exec((err, groups) => {
      if (err || !groups) {
        return res.status(400).json({
          error: "Groups not found",
        });
      }

      return groups.length;
    });

  const activeStudent = () =>
    Group.find({ status: true }).exec((err, students) => {
      if (err || !students) {
        return res.status(400).json({
          error: "Students not found",
        });
      }

      return students.length;
    });

    // return res.json(activeCollege(), activeGroup(), activeStudent());
    return activeStudent().length;

};
