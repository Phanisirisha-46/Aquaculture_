import React, { useState } from 'react';
import './QandA.css';

const QandA = () => {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [replyText, setReplyText] = useState('');

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
