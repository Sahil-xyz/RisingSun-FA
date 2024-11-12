import { User } from '../models/user-model.js'
import { Team } from '../models/team-model.js';
import { Admission } from '../models/admission-model.js'

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({},{password:0});
        if(!users || users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }
         return res.status(200).json({
            users,
            status: 'success',
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}


// controllers/teamController.js
export const createTeam = async (req, res) => {
  try {
    const { name, coach, formation, establishedYear, achievements, players, display } = req.body;

    // Create a new team document
    const newTeam = new Team({
      name,
      coach,
      formation,
      establishedYear,
      achievements,
      players,
      display,
    });

    // Save the team to the database
    const savedTeam = await newTeam.save();
    
    res.status(201).json({
      success: true,
      message: 'Team created successfully',
      data: savedTeam,
    });
  } catch (error) {
    console.error("Error creating team:", error);
    res.status(500).json({
      success: false,
      message: 'Failed to create team',
      error: error.message,
    });
  }
};

// controllers/teamController.js
export const getDisplayedTeams = async (req, res) => {
    try {
      const displayedTeams = await Team.find({});
      res.status(200).json({
        success: true,
        data: displayedTeams,
      });
    } catch (error) {
      console.error("Error fetching displayed teams:", error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch displayed teams',
        error: error.message,
      });
    }
  };
  
  // controllers/teamController.js

export const updateTeam = async (req, res) => {
  try {
    const { id } = req.params;  // Get the team ID from request parameters
    const updateData = req.body;  // Get the update data from request body

    // Check if admissions are being added (using admission IDs)
    if (updateData.admissions && Array.isArray(updateData.admissions)) {
      const playersToAdd = await Admission.find({
        _id: { $in: updateData.admissions }
      });

      // Extract player IDs from Admissions data (assuming each admission has a unique ID)
      const playerIds = playersToAdd.map(player => player._id);
      
      // Add these player IDs to the `players` array in the team document
      updateData.players = playerIds;
    }

    // Find the team by ID and update it with the provided data
    const updatedTeam = await Team.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation rules are applied
    });

    if (!updatedTeam) {
      return res.status(404).json({
        success: false,
        message: 'Team not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Team updated successfully',
      data: updatedTeam,
    });
  } catch (error) {
    console.error("Error updating team:", error);
    res.status(500).json({
      success: false,
      message: 'Failed to update team',
      error: error.message,
    });
  }
};

// controllers/teamController.js

export const getTeamById = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id);

    if (!team) {
      return res.status(404).json({ success: false, message: 'Team not found' });
    }

    res.status(200).json({ success: true, data: team });
  } catch (error) {
    console.error('Error fetching team:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch team', error: error.message });
  }
};


export const searchAdmissions = async (req, res) => {
  try {
    const { name } = req.query;  // Extract the `name` query parameter

    // Perform the search operation based on the `name`
    const admissions = await Admission.find({ name: new RegExp(name, 'i') });

    if (!admissions.length) {
      return res.status(404).json({
        success: false,
        message: 'No admissions found with the given name',
      });
    }

    res.status(200).json({
      success: true,
      data: admissions,
    });
  } catch (error) {
    console.error('Error searching for admissions:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to search for admissions',
      error: error.message,
    });
  }
};