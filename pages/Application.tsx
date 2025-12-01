import React, { useState } from 'react';
import { SCENARIOS, AI_TOOLS } from '../constants';
import ScenarioCard from '../components/ScenarioCard';
import { Briefcase, User, Book, Wrench, Sparkles, ExternalLink, Lightbulb, Box } from 'lucide-react';

type Tab = 'Prompts' | 'Tools';
type Category = 'Work' | 'Personal' | 'Industry Playbooks';

const Application: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Prompts');
  const [activeCategory, setActiveCategory] = useState<Category>('Work');

  const filteredScenarios = SCENARIOS.filter(s => s.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Application Hub</h1>
        <p className="text-slate-600">Practical tools and templates to apply AI in your daily life.</p>
      </div>

      {/* Main Tab Switcher */}
      <div className="flex justify-center mb-10">
        <div className="bg-slate-100 p-1.5 rounded-xl inline-flex shadow-inner">
          <button
            onClick={() => setActiveTab('Prompts')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${
              activeTab === 'Prompts'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Sparkles size={18} />
            Prompt Library
          </button>
          <button
            onClick={() => setActiveTab('Tools')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${
              activeTab === 'Tools'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Box size={18} />
            AI Toolbox (Extensions)
          </button>
        </div>
      </div>

      {/* VIEW: PROMPT LIBRARY */}
      {activeTab === 'Prompts' && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 max-w-2xl mx-auto">
            <button 
              onClick={() => setActiveCategory('Work')}
              className={`flex flex-col sm:flex-row items-center justify-center gap-2 p-3 sm:p-4 rounded-xl border-2 transition ${activeCategory === 'Work' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-100 bg-white text-slate-500 hover:border-slate-300'}`}
            >
              <Briefcase size={20} />
              <span className="font-bold text-sm">Work</span>
            </button>
            <button 
              onClick={() => setActiveCategory('Personal')}
              className={`flex flex-col sm:flex-row items-center justify-center gap-2 p-3 sm:p-4 rounded-xl border-2 transition ${activeCategory === 'Personal' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-100 bg-white text-slate-500 hover:border-slate-300'}`}
            >
              <User size={20} />
              <span className="font-bold text-sm">Personal</span>
            </button>
            <button 
              onClick={() => setActiveCategory('Industry Playbooks')}
              className={`flex flex-col sm:flex-row items-center justify-center gap-2 p-3 sm:p-4 rounded-xl border-2 transition ${activeCategory === 'Industry Playbooks' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-100 bg-white text-slate-500 hover:border-slate-300'}`}
            >
              <Book size={20} />
              <span className="font-bold text-sm">Playbooks</span>
            </button>
          </div>

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
      )}

      {/* VIEW: AI TOOLBOX */}
      {activeTab === 'Tools' && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_TOOLS.map(tool => (
              <div key={tool.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-indigo-200 transition group flex flex-col h-full overflow-hidden">
                <div className={`h-2 ${tool.logoColor} w-full`} />
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 ${tool.logoColor} rounded-lg flex items-center justify-center text-white shadow-md`}>
                       <Wrench size={24} />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                      tool.pricing === 'Free' ? 'bg-green-100 text-green-700' :
                      tool.pricing === 'Paid' ? 'bg-slate-100 text-slate-600' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {tool.pricing}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">{tool.name}</h3>
                  <p className="text-indigo-600 text-sm font-medium mb-3">{tool.tagline}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{tool.description}</p>

                  <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                    <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-2">
                      <Lightbulb size={14} /> Coach's Tip
                    </div>
                    <p className="text-slate-700 text-sm italic">"{tool.coachTip}"</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <div className="flex gap-2">
                       {tool.bestFor.slice(0, 2).map((persona, i) => (
                         <span key={i} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                           {persona}
                         </span>
                       ))}
                    </div>
                    <a 
                      href={tool.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      Visit <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Application;