import React, { useState } from 'react';
import { Scenario } from '../types';
import { Copy, Check, ChevronDown, ChevronUp, AlertTriangle, ThumbsUp } from 'lucide-react';

interface ScenarioCardProps {
  scenario: Scenario;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2 py-1 rounded">
            {scenario.category} {scenario.industry && `• ${scenario.industry}`}
          </span>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{scenario.title}</h3>
        <p className="text-slate-600">{scenario.description}</p>
      </div>

      {/* Templates */}
      <div className="bg-slate-50 p-6 border-t border-slate-100">
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Prompt Templates</h4>
        <div className="space-y-3">
          {scenario.templates.map((template, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-slate-700 text-sm leading-relaxed font-mono shadow-sm">
                {template.split(/(\[.*?\])/).map((part, i) => (
                  <span key={i} className={part.startsWith('[') ? "text-indigo-600 font-bold bg-indigo-50 px-1 rounded" : ""}>
                    {part}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => handleCopy(template, idx)}
                className="absolute top-2 right-2 p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:text-indigo-600 hover:border-indigo-300 transition opacity-0 group-hover:opacity-100 focus:opacity-100"
                title="Copy template"
              >
                {copiedIndex === idx ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bad vs Good Accordion */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 bg-white border-t border-slate-100 text-slate-600 hover:bg-slate-50 transition"
      >
        <span className="font-semibold text-sm">See Bad vs. Improved Example</span>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isExpanded && (
        <div className="p-6 border-t border-slate-100 bg-white grid md:grid-cols-2 gap-6 animate-in slide-in-from-top-2">
          <div className="bg-red-50 p-4 rounded-xl border border-red-100">
            <div className="flex items-center gap-2 text-red-700 font-bold mb-2">
              <AlertTriangle size={18} />
              <span>Bad Prompt</span>
            </div>
            <p className="text-red-900 text-sm italic">"{scenario.badExample}"</p>
          </div>
          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
            <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
              <ThumbsUp size={18} />
              <span>Improved Prompt</span>
            </div>
            <p className="text-emerald-900 text-sm font-medium">"{scenario.goodExample}"</p>
            <p className="mt-3 text-xs text-emerald-700/80 pt-3 border-t border-emerald-200">
              <span className="font-bold">Why:</span> {scenario.explanation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScenarioCard;