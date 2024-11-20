import React, { useState, useEffect } from 'react';
import './QandA.css';

const QandA = () => {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  useEffect(() => {
    // Load questions and replies from localStorage when the component mounts
    const savedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
    setQuestions(savedQuestions);
  }, []);

  useEffect(() => {
    // Store questions and replies to localStorage whenever they change
    localStorage.setItem('questions', JSON.stringify(questions));
  }, [questions]);

  const handleQuestionChange = (e) => {
    setQuestionText(e.target.value);
  };

  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (questionText.trim()) {
      setQuestions([...questions, { text: questionText, replies: [] }]);
      setQuestionText('');
    }
  };

  const handleReplySubmit = (index) => {
    if (replyText.trim()) {
      const updatedQuestions = [...questions];
      updatedQuestions[index].replies.push(replyText);
      setQuestions(updatedQuestions);
      setReplyText('');
      setCurrentQuestionIndex(null);
    }
  };

  const handleDeleteQuestion = (index) => {
    const password = prompt('Enter admin password to delete this question:');
    if (password === 'saru') {
      const updatedQuestions = questions.filter((_, i) => i !== index);
      setQuestions(updatedQuestions);
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <div className="qna-container">
      <h1>Q&A Section</h1>
      <form onSubmit={handleQuestionSubmit} className="qna-form">
        <textarea
          value={questionText}
          onChange={handleQuestionChange}
          placeholder="Ask your question..."
          rows="4"
        />
        <button type="submit">Submit Question</button>
      </form>
      <div className="qna-list">
        <h2>Questions</h2>
        <ul>
          {questions.map((q, index) => (
            <li key={index} className="qna-item">
              <div className="question-text">{q.text}</div>
              <button
                onClick={() => setCurrentQuestionIndex(index)}
                className="reply-button"
              >
                Reply
              </button>
              <button
                onClick={() => handleDeleteQuestion(index)}
                className="delete-button"
              >
                🗑️  Delete 
              </button>
              {currentQuestionIndex === index && (
                <div className="reply-form">
                  <textarea
                    value={replyText}
                    onChange={handleReplyChange}
                    placeholder="Write your reply..."
                    rows="3"
                  />
                  <button
                    onClick={() => handleReplySubmit(index)}
                    className="submit-reply-button"
                  >
                    Submit Reply
                  </button>
                </div>
              )}
              <ul className="reply-list">
                {q.replies.map((reply, i) => (
                  <li key={i} className="reply-item">{reply}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QandA;
