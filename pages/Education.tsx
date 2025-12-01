
import React, { useState } from 'react';
import { LESSONS } from '../constants';
import { TrackLevel, Lesson } from '../types';
import LessonCard from '../components/LessonCard';
import QuizModal from '../components/QuizModal';
import { BookOpen, CheckCircle2, Play, AlertCircle, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown';

const Education: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<TrackLevel>(TrackLevel.Beginner);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const filteredLessons = LESSONS.filter(l => l.track === activeTrack);

  const handleLessonComplete = () => {
    if (selectedLesson && !completedLessons.includes(selectedLesson.id)) {
      setCompletedLessons([...completedLessons, selectedLesson.id]);
    }
  };

  // Custom Markdown Components
  const MarkdownComponents: Components = {
    // Custom Image Renderer
    img: ({ node, ...props }) => (
      <div className="my-6 relative group">
        <img 
          {...props} 
          className="rounded-xl shadow-md w-full object-cover max-h-[400px] border border-slate-100 group-hover:shadow-xl transition-all duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-xl pointer-events-none" />
      </div>
    ),
    
    // Custom Link Renderer (Handles Video syntax: [Label](video:url))
    a: ({ node, href, children, ...props }) => {
      if (href?.startsWith('video:')) {
        const videoUrl = href.replace('video:', '');
        return (
          <div className="my-6 bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-800 relative group">
             <video 
               src={videoUrl} 
               controls 
               className="w-full aspect-video"
               disablePictureInPicture={false}
               poster="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
             >
               Your browser does not support the video tag.
             </video>
             <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-md opacity-0 group-hover:opacity-100 transition">
               Picture-in-Picture enabled
             </div>
          </div>
        );
      }
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-1"
          {...props}
        >
          {children} <ExternalLink size={12} />
        </a>
      );
    },

    // Interactive Keyword Styling
    strong: ({ node, ...props }) => (
      <span className="font-bold text-indigo-900 bg-indigo-50 px-1 rounded cursor-help border-b-2 border-indigo-200 hover:bg-indigo-100 transition-colors" title="Key AI Term">
        {props.children}
      </span>
    ),

    // Pro Tip Styling
    blockquote: ({ node, ...props }) => (
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 my-6 rounded-r-xl italic text-slate-700 flex gap-3">
        <div className="text-indigo-500 shrink-0 mt-1">
          <AlertCircle size={20} />
        </div>
        <div>
           <span className="block font-bold text-indigo-800 not-italic text-sm mb-1 uppercase tracking-wider">Coach's Note</span>
           {props.children}
        </div>
      </div>
    ),

    // Header styling
    h3: ({ node, ...props }) => (
      <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4 flex items-center gap-2">
        <span className="w-2 h-6 bg-indigo-500 rounded-full inline-block"></span>
        {props.children}
      </h3>
    ),
    
    // List styling
    ul: ({ node, ...props }) => (
      <ul className="space-y-2 my-4 list-none" {...props} />
    ),
    li: ({ node, ...props }) => (
      <li className="flex gap-3 text-slate-700">
        <span className="text-indigo-500 font-bold mt-1.5">•</span>
        <span className="leading-relaxed">{props.children}</span>
      </li>
    ),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">AI Academy</h1>
        <p className="text-slate-600">Interactive lessons designed for everyone.</p>
      </div>

      {/* Track Tabs */}
      <div className="flex justify-center mb-10">
        <div className="bg-slate-100 p-1 rounded-xl inline-flex overflow-x-auto max-w-full">
          {Object.values(TrackLevel).map((track) => (
            <button
              key={track}
              onClick={() => setActiveTrack(track)}
              className={`px-6 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                activeTrack === track 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {track}
            </button>
          ))}
        </div>
      </div>

      {/* Lesson Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map(lesson => (
          <LessonCard 
            key={lesson.id} 
            lesson={lesson} 
            onSelect={setSelectedLesson}
            isCompleted={completedLessons.includes(lesson.id)}
          />
        ))}
      </div>

      {/* Lesson Detail View (Modal-ish overlay) */}
      {selectedLesson && !isQuizOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-3xl h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10 rounded-t-2xl">
              <div>
                <button 
                  onClick={() => setSelectedLesson(null)} 
                  className="text-slate-500 hover:text-slate-800 flex items-center gap-1 text-sm font-medium transition"
                >
                  ← Back to Library
                </button>
              </div>
              <div className="flex items-center gap-2">
                 <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    selectedLesson.track === 'Beginner' ? 'bg-green-100 text-green-700' :
                    selectedLesson.track === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {selectedLesson.track}
                 </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">{selectedLesson.title}</h2>
              
              <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-p:leading-relaxed prose-p:text-slate-600">
                <ReactMarkdown components={MarkdownComponents}>
                  {selectedLesson.content}
                </ReactMarkdown>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl mt-12 border border-indigo-100">
                <h4 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-indigo-600" />
                  Key Takeaways
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {selectedLesson.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700 text-sm bg-white p-3 rounded-lg border border-indigo-50 shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50 rounded-b-2xl flex justify-between items-center shrink-0">
              <span className="text-slate-500 text-sm hidden sm:block">Mastered this topic?</span>
              <button 
                onClick={() => setIsQuizOpen(true)}
                className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-200"
              >
                Start Quiz
                <BookOpen size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quiz Modal */}
      {selectedLesson && isQuizOpen && (
        <QuizModal 
          lesson={selectedLesson}
          onClose={() => {
            setIsQuizOpen(false);
            setSelectedLesson(null);
          }}
          onComplete={handleLessonComplete}
        />
      )}
    </div>
  );
};

export default Education;
