const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema(
    {
        grp_name: {
            type: String,
        },
        
        grp_code: {
            type: String,
        },

        grp_id: {
            type: String,
        },

        status: {
            type: Boolean,
        },

        clg_id: {
            type: String,
        }

    }, {
        timestamps: true
    }
);

module.exports = mongoose.model("Group", groupSchema);