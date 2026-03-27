const mongoose = require('mongoose'); 

/* 
* job description schema
* resume text
* selfdescription
* matchScore: number
*
* technical questions
[{
  question: "", 
  intention: "", 
  answer: ""
}]
* behavioral questions 
[{
  question: "", 
  intentio: "", 
  answer: ""
}]
* skill gaps
[{
  skill: "", 
  severity: {
  type: string, 
  enum: ["low", "medium", "high"]
  }
}]
* preparation plan [{
     day: number,
     focus: String, 
     task:[String]
}]
*/

const technicalQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "technical question is required"]
    },
    intention: {
        type: String,
        required: [true, "intention is required"]
    }, 
     answer: {
        type: String,
        required: [true, "answer is required"]
    }
}, 
{
    _id: false
})

const behavioralQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "technical question is required"]
    },
    intention: {
        type: String,
        required: [true, "intention is required"]
    }, 
     answer: {
        type: String,
        required: [true, "answer is required"]
    }
}, 
{
    _id: false
})

const skillGapSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: [true, "Skill is required"]
    },
    severity: {
        type: String,
        enum: ["low", "medium", "high"],
        required: [ true, "severity is required"]
    }
}, {
    _id: false
})

const preparationPlanSchema = new mongoose.Schema({
    day:{
        type: Number,
        required: [true, "day is required"]
    }, 
    focus:{
        type: String, 
        required: [true, "Task is required"]
    },
    tasks:[{
        type: String, 
        required: [true, "task is required"]
    }]
})

const interviewReportSchema = new mongoose.Schema({
    jobDescription:{
      type: String,
      required: [true, "job description is required"]
    }, 
    resume: {
        type: String,        
    },
     selfDescription: {
        type: String,        
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100,
        
    },
    technicalQuestions: [technicalQuestionSchema],
    behavioralQuestions: [behavioralQuestionSchema],
    skillGaps: [skillGapSchema],
    preparationPlan: [preparationPlanSchema],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
}, {
    timestamps: true
})

const interviewReportModel = mongoose.model("interviewReport", interviewReportSchema)

module.exports = interviewReportModel;