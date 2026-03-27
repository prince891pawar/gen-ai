import { useState } from "react";
import { Children } from "react";
import {cretaeCotext} from "react"; 

export const InterviewContext = cretaeCotext()

export const InterviewProvider = ({Children}) => {
const [loading, setLoading] = useState(false)
const [report, setReport] = useState(null)
const [reports, setReports] = useState([])

return (
    <InterviewContext.Provider value={{ loading, setLoading, report, setReport, reports, setReports}}>
        {Children}
    </InterviewContext.Provider>
)
}