

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
                    const response = await axios.get(`https://localhost:7208/api/ExamDownload/readQst?paperId=${examid}`);
                    setQuestions(response.data);
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
                        <h4>{question.qustionId }. {question.text}</h4>
                        <div>
                            <input
                                type="radio" name={`question-${index}`}
                                checked={questions[startIndex + index].selectedOption === 'A'}
                                value="A" onChange={() => {
                                    const updatedQuestions = [...questions];
                                    updatedQuestions[startIndex + index].selectedOption = 'A';
                                    setQuestions(updatedQuestions);
                                }}
                            />
                            <label>{question.optionA}</label>
                        </div>

                
                        

                        <div>
                            <input
                                type="radio"
                                name={`question-${index}`}
                                value="B"
                                onChange={() => {
                                    const updatedQuestions = [...questions];
                                    updatedQuestions[startIndex + index].selectedOption = 'B';
                                    setQuestions(updatedQuestions);
                                }}
                            />
                            <label>{question.optionB}</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name={`question-${index}`}
                                value="C"
                                onChange={() => {
                                    const updatedQuestions = [...questions];
                                    updatedQuestions[startIndex + index].selectedOption = 'C';
                                    setQuestions(updatedQuestions);
                                }}
                            />
                            <label>{question.optionC}</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name={`question-${index}`}
                                value="D"
                                onChange={() => {
                                    const updatedQuestions = [...questions];
                                    updatedQuestions[startIndex + index].selectedOption = 'D';
                                    setQuestions(updatedQuestions);
                                }}
                            />
                            <label>{question.optionD}</label>
                        </div>
                        {/* <h4>{index+1}{question.text}</h4>
                        <label>{question.optionA}</label><br />
                        <label>{question.optionB}</label><br />
                        <label>{question.optionC}</label><br />
                        <label>{question.optionD}</label><br /> */}
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
