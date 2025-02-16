import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AttendExam from '../components/AttendExam';

const Instructions = () => {
    const { examid } = useParams();
    const [gmailId, setGmailId] = useState(() => {
        return localStorage.getItem('gmailId') || '';
    });

    const handleInputChange = (e) => {
        const email = e.target.value;
        setGmailId(email);
        localStorage.setItem('gmailId', email);
    };
   // const [gmailId, setGmailId] = useState('');

    // const handleInputChange = (e) => {
    //     setGmailId(e.target.value);
    // };

    const handleStartClick = () => {
        if (gmailId) {  
                    const emailPattern = /^[^\s@]+@[gmail]+\.[^\s@]+$/;
                    if (!emailPattern.test(gmailId)) {
                        alert('Please enter a valid Gmail ID');
                        return;
                    }
            window.location.href = `/AttendExam/${examid}`;
        } else {
            alert('Please enter your Gmail ID');
        }
    };

    return (
        <div>
            <h1>Exam Instructions</h1>
            <ul>
                <li>Read all the questions carefully.</li>
                <li>Manage your time efficiently.</li>
                <li>Do not refresh the page during the exam.</li>
                <li>Submit your answers before the time runs out.</li>
            </ul>
            <div>
                <label htmlFor="gmailId">Enter your Gmail ID: </label>
                <input
                    type="email"
                    id="gmailId"
                    value={gmailId}
                    onChange={handleInputChange}
                    required
                />
                                <label > example@gmail.com </label>

            </div>
            <button onClick={handleStartClick}>Start Exam</button>
        </div>
    );
};

export default Instructions;