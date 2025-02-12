

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Stepper, Step, StepLabel, Button } from '@mui/material';

const AttendExam = () => {
    const { examid } = useParams();
    const [questions, setQuestions] = useState([]);
    const [activeStep, setActiveStep] = useState(0);
    const questionsPerPage = 5;

    useEffect(() => {
        const fetchQuestions = async () => {
            if (examid) {
                try {
                    const response = await axios.get(`https://localhost:7208/api/questionpaper/${examid}/questions`);
                    setQuestions(response.data.map(question => ({
                        ...question,
                        selectedOption: null
                    })));
                } catch (error) {
                    console.error('Error fetching questions:', error);
                }
            }
        };
        fetchQuestions();
    }, [examid]);

    const totalPages = Math.ceil(questions.length / questionsPerPage);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, totalPages - 1));
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
    };

    const startIndex = activeStep * questionsPerPage;
    const endIndex = Math.min(startIndex + questionsPerPage, questions.length);

    debugger
    const currentQuestions = questions.slice(startIndex, endIndex);

    const calculateScore = () => {
        let score = 0;
        questions.forEach((question) => {
            if (question.selectedOption === question.correctAnswer) {
                score += 1;
            }
        });
        return score;
    };

    return (
        <div>
            <h1>Attend Exam</h1>
            <Stepper activeStep={activeStep} alternativeLabel>
                {Array.from({ length: totalPages }, (_, index) => (
                    <Step key={index}>
                        <StepLabel>Page {index + 1}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {currentQuestions.length > 0 && currentQuestions.map((question, index) => (
                    <div key={index}>
                        <h4>{question.id}. {question.questionText}</h4>
                        {['A', 'B', 'C', 'D'].map(option => (
                            <div key={option}>
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    checked={questions[startIndex + index].selectedOption === option}
                                    value={option}
                                    onChange={() => {
                                        const updatedQuestions = [...questions];
                                        updatedQuestions[startIndex + index].selectedOption = option;
                                        setQuestions(updatedQuestions);
                                    }}
                                />
                                <label>{question[`option${option}`]}</label>
                            </div>
                        ))}
                    </div>
                ))}


                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={activeStep === 0}
                        onClick={handleBack}>
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        disabled={activeStep === totalPages - 1}>
                        Next
                    </Button>
                    <br /> <br />
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                            const score = calculateScore();
                            alert(`Your score is: ${score}`);
                        }}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AttendExam;
