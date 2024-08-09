// src/components/Quiz.js
import React, { useState } from 'react';
import { Container, Typography, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';

const Quiz = ({ quizData }) => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    const correctAnswers = quizData.questions.filter(
      question => answers[question.id] === question.correctAnswer
    ).length;
    setScore(correctAnswers);
  };

  return (
    <Container>
      <Typography variant="h5">{quizData.title}</Typography>
      {quizData.questions.map((question) => (
        <div key={question.id}>
          <Typography variant="body1">{question.question}</Typography>
          <RadioGroup
            name={`question-${question.id}`}
            value={answers[question.id] || ''}
            onChange={(e) => handleChange(question.id, e.target.value)}
          >
            {question.options.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </div>
      ))}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Тексеру
      </Button>
      {score !== null && <Typography variant="h6">Сіздің ұпайыңыз: {score}/{quizData.questions.length}</Typography>}
    </Container>
  );
};

export default Quiz;
