const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        std_name: {
            type: String,
        },
        
        std_code: {
            type: String,
        },

        std_id: {
            type: String,
        },

        status: {
            type: Boolean,
        },

        grp_id: {
            type: String,
        }

    }, {
        timestamps: true
    }
);

module.exports = mongoose.model("Student", studentSchema);