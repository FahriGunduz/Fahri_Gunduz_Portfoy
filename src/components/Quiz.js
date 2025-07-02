import React, { useEffect, useState } from 'react';
import './Quiz.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        fetch('/questions.json')
            .then(res => res.json())
            .then(data => {
                setQuestions(data.questions);
                const cats = Array.from(new Set(data.questions.map(q => q.category)));
                setCategories(cats);
            });
    }, []);

    const startQuiz = () => {
        let filtered;
        if (selectedCategory === 'all') {
            filtered = questions;
        } else {
            filtered = questions.filter(q => q.category === selectedCategory);
        }
        const selected = shuffleArray(filtered).slice(0, 20);
        setQuizQuestions(selected);
        setAnswers({});
        setShowResults(false);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleOptionChange = (qIdx, option) => {
        setAnswers({ ...answers, [qIdx]: option });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowResults(true);
    };

    const correctCount = quizQuestions.reduce((acc, q, idx) => {
        if (answers[idx] && answers[idx] === q.answer) return acc + 1;
        return acc;
    }, 0);

    return (
        <div className="quiz-main-container">
            <div className="quiz-header">
                <h2>Sınav</h2>
            </div>
            {quizQuestions.length === 0 ? (
                <div className="quiz-category-select">
                    <label htmlFor="category">Kategori Seçin:</label>
                    <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="">-- Seçiniz --</option>
                        <option value="all">Tüm Kategoriler (Karma)</option>
                        {categories.map(cat => (
                            <option key={cat} value={cat}>Kategori {cat}</option>
                        ))}
                    </select>
                    <button className="quiz-btn" disabled={!selectedCategory} onClick={startQuiz}>Sınava Başla</button>
                </div>
            ) : showResults ? (
                <div className="quiz-results">
                    <h3>Sonuçlar</h3>
                    <p>Doğru Sayısı: <span className="quiz-score">{correctCount} / {quizQuestions.length}</span></p>
                    <ol className="quiz-results-list">
                        {quizQuestions.map((q, idx) => {
                            const isCorrect = answers[idx] === q.answer;
                            return (
                                <li key={idx} className={`quiz-result-item ${isCorrect ? 'correct' : 'wrong'}`}>
                                    <div className="quiz-result-question">
                                        <span className="quiz-result-icon">{isCorrect ? <FaCheckCircle color="#2ecc40" /> : <FaTimesCircle color="#e74c3c" />}</span>
                                        <b>{idx + 1}. {q.question}</b>
                                    </div>
                                    <div className="quiz-result-answer">
                                        <span className={isCorrect ? 'correct' : 'wrong'}>
                                            Senin Cevabın: {answers[idx] ? q.options.find(opt => opt.startsWith(answers[idx])) : 'Boş'}
                                        </span>
                                    </div>
                                    <div className="quiz-result-correct">
                                        Doğru Cevap: <b>{q.options.find(opt => opt.startsWith(q.answer))}</b>
                                    </div>
                                    <div className="quiz-result-explanation">{q.explanation}</div>
                                </li>
                            );
                        })}
                    </ol>
                    <button className="quiz-btn" onClick={() => setQuizQuestions([])}>Tekrar Sınava Gir</button>
                </div>
            ) : (
                <form className="quiz-form" onSubmit={handleSubmit}>
                    {quizQuestions.map((q, idx) => (
                        <div key={idx} className="quiz-question-card">
                            <div className="quiz-question-header">
                                <span className="quiz-question-number">{idx + 1}.</span>
                                <span className="quiz-question-category">Kategori: {q.category}</span>
                            </div>
                            <div className="quiz-question-text">{q.question}</div>
                            <div className="quiz-options">
                                {q.options.map(opt => (
                                    <label key={opt} className={`quiz-option-label ${answers[idx] === opt[0] ? 'selected' : ''}`}>
                                        <input
                                            type="radio"
                                            name={`q${idx}`}
                                            value={opt[0]}
                                            checked={answers[idx] === opt[0]}
                                            onChange={() => handleOptionChange(idx, opt[0])}
                                            disabled={showResults}
                                        />
                                        <span className="quiz-option-text">{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button className="quiz-btn quiz-submit-btn" type="submit">Sınavı Bitir</button>
                </form>
            )}
        </div>
    );
};

export default Quiz; 