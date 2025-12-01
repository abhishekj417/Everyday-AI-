import React, { useState } from 'react';
import { SCENARIOS } from '../constants';
import ScenarioCard from '../components/ScenarioCard';
import { Briefcase, User, Book } from 'lucide-react';

type Category = 'Work' | 'Personal' | 'Industry Playbooks';

const Application: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Work');

  const filteredScenarios = SCENARIOS.filter(s => s.category === activeCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Prompt Library</h1>
        <p className="text-slate-600">Copy-paste templates for your daily tasks.</p>
      </div>

      {/* Category Tabs */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
        <button 
          onClick={() => setActiveCategory('Work')}
          className={`flex flex-col sm:flex-row items-center justify-center gap-2 p-4 rounded-xl border-2 transition ${activeCategory === 'Work' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-100 bg-white text-slate-500 hover:border-slate-300'}`}
        >
          <Briefcase size={20} />
          <span className="font-bold text-sm sm:text-base">Work</span>
        </button>
        <button 
          onClick={() => setActiveCategory('Personal')}
          className={`flex flex-col sm:flex-row items-center justify-center gap-2 p-4 rounded-xl border-2 transition ${activeCategory === 'Personal' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-100 bg-white text-slate-500 hover:border-slate-300'}`}
        >
          <User size={20} />
          <span className="font-bold text-sm sm:text-base">Personal</span>
        </button>
        <button 
          onClick={() => setActiveCategory('Industry Playbooks')}
          className={`flex flex-col sm:flex-row items-center justify-center gap-2 p-4 rounded-xl border-2 transition ${activeCategory === 'Industry Playbooks' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-100 bg-white text-slate-500 hover:border-slate-300'}`}
        >
          <Book size={20} />
          <span className="font-bold text-sm sm:text-base">Playbooks</span>
        </button>
      </div>

      {/* Results Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {filteredScenarios.length > 0 ? (
          filteredScenarios.map(scenario => (
            <ScenarioCard key={scenario.id} scenario={scenario} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-slate-400">
            <p>No scenarios found for this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Application;