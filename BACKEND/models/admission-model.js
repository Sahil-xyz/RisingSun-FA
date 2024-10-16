import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['Striker', 'Defender', 'Midfielder', 'Goalkeeper'],
        default: 'Striker'
    },
    mode: {
        type: String,
        required: true,
        enum: ['Online', 'Offline'],
        default: 'Offline'
    },
    dateOfAdmission: {
        type: Date,
        required: true,
        default: Date.now // Automatically sets the current date as the admission date
    }
},{timestamps: true})

export const Admission = mongoose.model('Admission', admissionSchema);