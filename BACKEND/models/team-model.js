import mongoose from 'mongoose';

const { Schema } = mongoose;

const TeamSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  coach: {
    type: String,
    required: true,
  },
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admission', // Referencing Admission model
    },
  ],
  formation: {
    type: String,
    default: '4-4-2',
  },
  establishedYear: {
    type: Number,
  },
  achievements: [
    {
      title: String,
      year: Number,
      description: String,
    },
  ],
  display: {
    type: Boolean,
    default: false, // By default, team won't be displayed on frontend
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

export const Team = mongoose.model('Team', TeamSchema);
