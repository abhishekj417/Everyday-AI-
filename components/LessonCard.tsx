import React from 'react';
import { Lesson } from '../types';
import { BookOpen, CheckCircle } from 'lucide-react';

interface LessonCardProps {
  lesson: Lesson;
  onSelect: (lesson: Lesson) => void;
  isCompleted?: boolean;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, onSelect, isCompleted }) => {
  return (
    <div 
      onClick={() => onSelect(lesson)}
      className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition cursor-pointer group flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${
          lesson.track === 'Beginner' ? 'bg-green-100 text-green-700' :
          lesson.track === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
          'bg-purple-100 text-purple-700'
        }`}>
          {lesson.track}
        </span>
        {isCompleted && <CheckCircle className="text-emerald-500" size={20} />}
      </div>
      
      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
        {lesson.title}
      </h3>
      <p className="text-slate-600 text-sm mb-4 flex-grow">
        {lesson.description}
      </p>

      <div className="flex items-center text-indigo-600 font-medium text-sm mt-auto">
        <BookOpen size={16} className="mr-2" />
        Start Lesson
      </div>
    </div>
  );
};

export default LessonCard;