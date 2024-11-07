import { Admission } from "../models/admission-model.js";

// Create new admission
export const createAdmission = async (req, res) => {
  try {
    const { name, dateOfBirth, gender, role, mode } = req.body;

    const newAdmission = new Admission({
      name,
      dateOfBirth,
      gender,
      role,
      mode,
      dateOfAdmission: Date.now() // Set the current date as date of admission
    });

    await newAdmission.save();
    res.status(201).json({ message: 'Admission created successfully', admission: newAdmission });
  } catch (error) {
    console.log(error)
    res.status(400).json({
      error
    })
  }
};

// Update an admission
export const updateAdmission = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, dateOfBirth, gender, role, mode } = req.body;

    const updatedAdmission = await Admission.findByIdAndUpdate(
      id,
      { name, dateOfBirth, gender, role, mode },
      { new: true, runValidators: true } // Return the updated document
    );

    if (!updatedAdmission) {
      return res.status(404).json({ message: 'Admission not found' });
    }

    res.status(200).json({ message: 'Admission updated successfully', admission: updatedAdmission });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an admission
export const deleteAdmission = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAdmission = await Admission.findByIdAndDelete(id);

    if (!deletedAdmission) {
      return res.status(404).json({ message: 'Admission not found' });
    }

    res.status(200).json({ message: 'Admission deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAdmissionUsers = async(req, res) => {
  try {
    const admissionUsers = await Admission.find();
    
    if(!admissionUsers || admissionUsers.length == 0) {
      res.status(404).json({
        message: "No users found"
      })
    }

    res.status(200).json({
      admissionUsers,
      success: true
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
}