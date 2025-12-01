import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAS } from '../constants';
import { ArrowRight, Zap, Shield, Smile } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-6 inline-block">
            For Non-Tech Professionals
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Make AI simple for <br/> <span className="text-indigo-600">everyone, every day.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto">
            No jargon. No complex code. Just simple lessons and copy-paste templates to help you work smarter.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/education" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 flex items-center justify-center gap-2">
              Start Learning
              <ArrowRight size={20} />
            </Link>
            <Link to="/application" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-indigo-300 hover:text-indigo-600 transition flex items-center justify-center gap-2">
              Get Templates
              <Zap size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Why use Everyday AI?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4">
              <Smile size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Jargon-Free Zone</h3>
            <p className="text-slate-600">We explain "Generative Models" using chefs and recipes. 8th-grade reading level guaranteed.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center text-purple-600 mb-4">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Copy & Paste</h3>
            <p className="text-slate-600">Don't know what to type? Use our "Fill-in-the-blank" templates for emails, plans, and more.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Safety First</h3>
            <p className="text-slate-600">Learn what NOT to share with AI. Best practices for privacy and data security built-in.</p>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Built for people like you</h2>
          <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">Select your role to see how AI can help.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {PERSONAS.map((p) => (
              <div key={p.id} className="bg-white p-4 rounded-xl border border-slate-200 text-center hover:border-indigo-400 cursor-default transition">
                <div className="bg-indigo-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-indigo-600">
                  <p.icon size={20} />
                </div>
                <h4 className="font-bold text-sm text-slate-800 mb-1">{p.role}</h4>
                <p className="text-xs text-slate-500 leading-tight">{p.goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;