import React, { useState } from 'react';
import './Forum.css';

const Forum = () => {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');

  const handleQuestionChange = (e) => {
    setQuestionText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (questionText.trim()) {
      setQuestions([...questions, questionText]);
      setQuestionText('');
    }
  };

  return (
    <div className="qna-container">
      <h1>Q&A Section</h1>
      <form onSubmit={handleSubmit} className="qna-form">
        <textarea
          value={questionText}
          onChange={handleQuestionChange}
          placeholder="Ask your question..."
          rows="4"
        />
        <button type="submit">Submit</button>
      </form>
      <div className="qna-list">
        <h2>Questions</h2>
        <ul>
          {questions.map((q, index) => (
            <li key={index}>{q}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Forum;
