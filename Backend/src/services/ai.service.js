const {GoogleGenAI} = require("@google/genai")
const { z } = require("zod")
const { zodToJsonSchema } = require("zod-to-json-schema")


const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY        
})                    



const interviewReportSchema = z.object({

    matchScore: z.number().min(0).max(100)
        .describe("Score between 0-100 indicating candidate-job fit"),

    summary: z.string()
        .describe("Short overall evaluation of the candidate"),

    strengths: z.array(z.string())
        .min(2)
        .describe("Key strengths of the candidate"),

    weaknesses: z.array(z.string())
        .min(2)
        .describe("Weak areas or improvement points"),

    technicalQuestions: z.array(
        z.object({
            question: z.string(),
            difficulty: z.enum(["easy", "medium", "hard"]),
            intention: z.string(),
            answerStrategy: z.string()
        })
    ).min(5)
     .describe("List of technical interview questions with strategy"),

    behavioralQuestions: z.array(
        z.object({
            question: z.string(),
            intention: z.string(),
            sampleAnswer: z.string()
        })
    ).min(3)
     .describe("Behavioral questions with answers"),

    skillGaps: z.array(
        z.object({
            skill: z.string(),
            severity: z.enum(["low", "medium", "high"]),
            recommendation: z.string()
        })
    ).min(3)
     .describe("Missing skills and how to improve them"),

    preparationPlan: z.array(
        z.object({
            day: z.number(),
            focus: z.string(),
            tasks: z.array(z.string()).min(2)
        })
    ).min(7)
     .describe("7-day preparation roadmap"),

    projectSuggestions: z.array(z.string())
        .min(2)
        .describe("Projects candidate should build"),

    confidenceLevel: z.enum(["low", "medium", "high"])
        .describe("Overall interview readiness level")

})

async function generateInterviewReport({ resume, selfDescription, jobDescription }) {

    const prompt = `Generate an interview report for a candidate with the following details:
         Resume: ${resume}
         selfDescription: ${selfDescription}
         Job jobDescription: ${jobDescription}
    `

    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config:{
            responseMimeType:"application/json",
            responseSchema: zodToJsonSchema(interviewReportSchema),

        }
    })
    return JSON.parse(response.text)
}

module.exports = generateInterviewReport