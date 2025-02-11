import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AttendExam from './AttendExam';
import AttendExamstr from './AttendExamstr';

const PrevPapers = () => {
    const [exams, setExams] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:7208/api/ExamDownload/view')
            .then(response => {
                setExams(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the exam data!', error);
            });
    }, []);
    return (
        <div>
            <h1>Previous Papers</h1>
            
            <ul>
                {exams.map((exam, index) => (

                    <li key={index}>
                        {exam.name}
                        <label>{exam.serialCode}</label>
                        <label>{exam.examName}</label>
                        {/* <button onClick={() => window.location.href = `/AttendExam/${exam.paperId}`}>Attend</button> */}
                    
                       <button onClick={() => window.location.href = `/AttendExamstr/${exam.paperId}`}>Attendstr</button>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PrevPapers;