import React, { useState } from 'react';
import { Lesson, QuizQuestion } from '../types';
import { X, Check, CheckCircle, AlertCircle, ArrowRight, RefreshCcw } from 'lucide-react';

interface QuizModalProps {
  lesson: Lesson;
  onClose: () => void;
  onComplete: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ lesson, onClose, onComplete }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = lesson.quiz[currentQuestionIdx];
  const isCorrect = selectedOption === currentQuestion?.correctAnswer;

  const handleOptionSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === currentQuestion.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < lesson.quiz.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
      if (score === lesson.quiz.length - 1 || selectedOption === currentQuestion.correctAnswer) { 
        // Logic check: if last question was correct, score updates asynchronously? No, calculated above.
        // Actually, let's just use score.
        onComplete();
      }
    }
  };

  // Re-calculate completion logic for the last question transition
  const handleFinish = () => {
     onComplete();
     onClose();
  };

  if (showResults) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl w-full max-w-md p-8 text-center animate-in fade-in zoom-in duration-200">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            {score === lesson.quiz.length ? <Check size={32} /> : <RefreshCcw size={32} />}
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Quiz Complete!</h2>
          <p className="text-slate-600 mb-6">You got {score} out of {lesson.quiz.length} correct.</p>
          <button 
            onClick={handleFinish}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Back to Lessons
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-2xl flex flex-col max-h-[90vh] shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-800">Quiz: {lesson.title}</h2>
            <p className="text-sm text-slate-500">Question {currentQuestionIdx + 1} of {lesson.quiz.length}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition">
            <X size={24} className="text-slate-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <h3 className="text-xl font-medium text-slate-800 mb-6">{currentQuestion.question}</h3>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              let btnClass = "w-full text-left p-4 rounded-xl border-2 transition flex items-center justify-between ";
              if (isAnswered) {
                if (idx === currentQuestion.correctAnswer) btnClass += "border-emerald-500 bg-emerald-50 text-emerald-800";
                else if (idx === selectedOption) btnClass += "border-red-400 bg-red-50 text-red-800";
                else btnClass += "border-slate-100 text-slate-400 opacity-50";
              } else {
                btnClass += "border-slate-200 hover:border-indigo-400 hover:bg-slate-50 text-slate-700";
              }

              return (
                <button 
                  key={idx} 
                  onClick={() => handleOptionSelect(idx)}
                  disabled={isAnswered}
                  className={btnClass}
                >
                  <span className="font-medium">{option}</span>
                  {isAnswered && idx === currentQuestion.correctAnswer && <Check size={20} className="text-emerald-600" />}
                  {isAnswered && idx === selectedOption && idx !== currentQuestion.correctAnswer && <X size={20} className="text-red-500" />}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {isAnswered && (
            <div className={`mt-6 p-4 rounded-xl flex gap-3 ${isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-indigo-50 text-indigo-800'}`}>
              <div className="shrink-0 mt-0.5">
                {isCorrect ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
              </div>
              <div>
                <p className="font-bold text-sm mb-1">{isCorrect ? 'Correct!' : 'Explanation:'}</p>
                <p className="text-sm leading-relaxed">{currentQuestion.explanation}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 flex justify-end">
          <button 
            onClick={handleNext}
            disabled={!isAnswered}
            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {currentQuestionIdx === lesson.quiz.length - 1 ? 'Finish Quiz' : 'Next Question'}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;