const express = require("express")
const authMiddleware = require("../middleware/auth.middleware")
 
const interviewRouter = express.Router()
const interviewController = require("../controllers/interview.controller")
const upload = require("../middleware/file.middleware")

/**
 * @route POST /api/interview/
 * @description generate new interview report on
 *  the basis of user self description, resume pdf and job description
 * @access private
 */ 

interviewRouter.post("/", authMiddleware.authUser,upload.single("resume"), interviewController.generateInterViewReportController)
 

/**
 * 
 *@route get /api/interview
 @description get all interview reports of lagged in user.
 @access private
 */
interviewRouter.get("/", authMiddleware.authUser, interviewController.getInterviewReportByIdController)

/**
 * @route get /api/interview/
 * @description get all interview reports of logged in user.
 * @access private
 */
interviewRouter.get("/", authMiddleware.authUser, interviewController.getAllInterviewReoportsController)

module.exports = interviewRouter