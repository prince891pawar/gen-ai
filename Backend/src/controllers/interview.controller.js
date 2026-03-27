const pdfParse = require("pdf-parse")
const generateInterviewReport = require("../services/ai.service")
const interviewReportModel = require("../models/interviewReport.model")


async function generateInterViewReportController(req, res){
        
        const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
        const {selfDescription, jobDescription} = req.body

        const interviewReportByAi = await generateInterviewReport({
                resume: resumeContent.text,
                selfDescription,
                jobDescription
        })
        const interviewReport = await interviewReportModel.create({
                user: req.user.id,
                resume: resumeContent.text,
                selfDescription,
                jobDescription,
                ...interviewReportByAi
        })
        res.status(201).json({
                message:"Interview report generated successfully",
                interviewReport
        })
}

async function getInterviewReportByIdController(req, res) {
        const {interviewId} = req.params

        const interviewReport = await interviewReportModel.findOne({ _id: interviewId, user: req.user.id})

        if(!interviewReport){
                return res.status(400).json({
                        message: "iterview report not found"
                })
        }

        res.status(200).json({
                message: "interview report fetched successfully",
                interviewReport
        })
}

/**
 * @description controllerr to get all interview reports of logged in user.
 */
async function getAllInterviewReoportsController(req, res){
        const interviewReports = (await interviewReportModel.find({user: req.user.id})).sort({createAt: -1}).select("-resume -selfDescription -jobDescription -_v -technicalQuestions -behaviraQuestions -skillGaps")
}

module.exports = {generateInterViewReportController,
                  getInterviewReportByIdController,
                getAllInterviewReoportsController}