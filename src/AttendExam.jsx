import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AttendExam = () => {
    const { examid } = useParams();
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            if (examid) {
                try {
                    examid=2;
                    const response = await axios.get(`https://localhost:7208/api/ExamDownload/readQst?paperId=${examid}`);
                    setQuestions(response.data);
                } catch (error) {
                    console.error('Error fetching questions:', error);
                }
            }
        };

        fetchQuestions();
    }, [examid]);

    return (
        <div>
            <h1>Attend Exam</h1>
            <p>Welcome to the exam page. Please follow the instructions to attend the exam.</p>
            <ul>
                {questions.map((question, index) => (
                    <li key={index}>{question}</li>
                ))}
            </ul>
        </div>
    );
};

export default AttendExam;