import express from "express" 
import { getAllUsers } from "../controllers/admin-controller.js";
import authMiddleware from "../middlewares/auth-middleware.js";
import adminMiddleware from "../middlewares/admin-middleware.js";
import { createAdmission, deleteAdmission, updateAdmission, getAdmissionUsers } from "../controllers/admission-controller.js";
const router = express.Router();

// Get users routes in Admin
router.route("/users").get(authMiddleware,adminMiddleware, getAllUsers);

// Admission Routes in Admin
router.route("/admission").post(authMiddleware,adminMiddleware, createAdmission)
router.route("/admission").get(authMiddleware, adminMiddleware, getAdmissionUsers)
router.route("/admission/:id").put(authMiddleware,adminMiddleware, updateAdmission)
router.route("/admission/:id").delete(authMiddleware,adminMiddleware, deleteAdmission)

export default router;