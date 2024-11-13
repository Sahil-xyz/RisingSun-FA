import express from "express" 
import { getAllUsers, createTeam, getDisplayedTeams, updateTeam, getTeamById, searchAdmissions } from "../controllers/admin-controller.js";
import authMiddleware from "../middlewares/auth-middleware.js";
import adminMiddleware from "../middlewares/admin-middleware.js";
import { createAdmission, deleteAdmission, updateAdmission, getAdmissionUsers } from "../controllers/admission-controller.js";
// import { createPlayer, createTeam } from "../controllers/team-controller.js";
const router = express.Router();

// Get users routes in Admin
router.route("/users").get(authMiddleware,adminMiddleware, getAllUsers);

// Admission Routes in Admin
router.route("/admission").post(authMiddleware,adminMiddleware, createAdmission)
router.route("/admission").get(authMiddleware, adminMiddleware, searchAdmissions)
// router.route("/admission").get(authMiddleware, adminMiddleware, getAdmissionUsers)
router.route("/admission/:id").put(authMiddleware,adminMiddleware, updateAdmission)
router.route("/admission/:id").delete(authMiddleware,adminMiddleware, deleteAdmission)
router.route("/teams/create-team").post(authMiddleware, adminMiddleware, createTeam)
router.route("/teams").get(authMiddleware, adminMiddleware, getDisplayedTeams)
router.route("/teams/:id").put(authMiddleware, adminMiddleware, updateTeam)
router.route("/teams/:id").get(authMiddleware, adminMiddleware, getTeamById);

export default router;