const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
    {
        clg_name: {
            type: String,
        },
        
        clg_code: {
            type: String,
        },

        clg_id: {
            type: String,
        },

        status: {
            type: Boolean,
        },

    }, {
        timestamps: true
    }
);

module.exports = mongoose.model("College", collegeSchema);