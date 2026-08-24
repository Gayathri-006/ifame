import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';
import { INSIGHTS } from '../data/insights';
import { InsightArticle } from '../types';

interface InsightsEditorialSectionProps {
  onSelectArticle: (article: InsightArticle) => void;
}

export const InsightsEditorialSection: React.FC<InsightsEditorialSectionProps> = ({ onSelectArticle }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', 'AI & Data Strategy', 'Technology Consulting', 'Process Consulting'];
  
  const filteredInsights = activeCategory === 'All'
    ? INSIGHTS
    : INSIGHTS.filter(i => i.category === activeCategory);

  const featured = INSIGHTS.find(i => i.featured) || INSIGHTS[0];

  return (
    <section id="insights" className="bg-slate-50 text-slate-900 py-20 md:py-28 border-t border-slate-100 relative overflow-hidden">
      {/* Black rays fading into the background, top-right corner */}
      <div
        className="hidden md:block absolute -right-10 -top-10 w-[380px] h-[380px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'conic-gradient(from 160deg at 100% 0%, #0a0a0a 0deg 2deg, transparent 2deg 10deg, #0a0a0a 10deg 12deg, transparent 12deg 20deg, #0a0a0a 20deg 22deg, transparent 22deg 32deg, #0a0a0a 32deg 34deg, transparent 34deg 90deg)',
          maskImage: 'radial-gradient(circle at 100% 0%, black 0%, black 12%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 100% 0%, black 0%, black 12%, transparent 75%)',
          opacity: 0.05,
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
              THOUGHT LEADERSHIP
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight mt-3">
              Insights & Perspectives
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-2 max-w-xl">
              Strategic perspectives on technology strategy, artificial intelligence governance, and operational resilience.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0a0a0a] text-white'
                    : 'bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
                id={`insight-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Editorial Layout: Left Featured Article + Right Supporting Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Featured Article (Left 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onSelectArticle(featured)}
            className="lg:col-span-7 group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
            id="featured-insight-card"
          >
            <div className="h-64 sm:h-72 overflow-hidden relative">
              <img
                src={featured.imageUrl}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-[#0a0a0a] text-white shadow">
                  Featured Perspective
                </span>
              </div>
            </div>

            <div className="p-7 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span className="text-[#18181b] font-semibold">{featured.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featured.readTime}</span>
                  <span>•</span>
                  <span>{featured.date}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-950 group-hover:text-slate-600 transition-colors leading-snug">
                  {featured.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mt-4 line-clamp-3">
                  {featured.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div className="text-xs text-slate-500 font-medium">
                  By {featured.author.name}
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-[#18181b] group-hover:translate-x-1 transition-transform">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Supporting Articles (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            {filteredInsights.filter(i => i.id !== featured.id).map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => onSelectArticle(article)}
                className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-400 shadow-sm hover:shadow-md transition-all cursor-pointer flex gap-4 items-start"
                id={`insight-card-${article.id}`}
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 relative">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-1.5">
                    <span className="text-[#18181b] font-semibold">{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-950 group-hover:text-slate-600 transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h4>

                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                    {article.summary}
                  </p>

                  <div className="mt-2.5 flex items-center gap-1 text-[11.5px] font-semibold text-slate-600 group-hover:text-slate-950">
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};