import React, { useEffect, useState } from 'react';
import axios from 'axios';
import attendExam from './AttendExam';

const PrevPapers = () => {
    const [exams, setExams] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost:7208/api/ExamDownload/view');
                const data = await response.json();
                setExams(data);
            } catch (error) {
                console.error('There was an error fetching the exam data!', error);
            }
        };

        fetchData();

        // axios.get('https://localhost:7208/api/ExamDownload/view')
        //     .then(response => {
        //         setExams(response.data);
        //     })
        //     .catch(error => {
        //         console.error('There was an error fetching the exam data!', error);
        //     });
    }, []);

    return (
        <div>
            <h1>Previous Papers</h1>
            <p>List of previous exam papers will be displayed here.</p>
            <ul>
                {exams.map((exam, index) => (

                    <li key={index}>
                        {exam.name}
                        <button onClick={() => window.location.href = `/AttendExam/${exam.id}`}>Attend Now</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PrevPapers;