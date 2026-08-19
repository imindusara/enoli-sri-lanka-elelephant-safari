import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { Calendar, Clock, ArrowRight, FileText } from 'lucide-react';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL POSTS');

  const categories = [
    'ALL POSTS',
    'TRAVEL TIPS',
    'DESTINATIONS',
    'CULTURE & FOOD',
    'SAFARI & WILDLIFE',
    'BEACH & SURF'
  ];

  const filteredPosts = selectedCategory === 'ALL POSTS'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-24 bg-cream min-h-screen pb-16">
      {/* Header Banner */}
      <div className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
        {/* Background Image overlay */}
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-15" style={{ backgroundImage: `url('/poswiecie-sigiriya-459197_1920.jpg')` }}></div>
        <div className="relative max-w-4xl mx-auto z-10 space-y-4">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.25em] block">JOURNEY LOGS</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight">Travel Blog</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Expert travel tips, local cuisine guides, destination breakdowns, and wildlife safari insights from Ceylon Nest Journeys.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Category Filters Bar */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl bg-white p-3 rounded-3xl border border-gray-150 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'text-charcoal-light hover:text-charcoal bg-gray-50 hover:bg-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-150 shadow-sm flex flex-col items-center">
            <FileText className="h-12 w-12 text-gray-300 mb-3" />
            <p className="text-charcoal-light font-medium">No posts found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-primary font-bold text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full border border-gray-150">
                    {post.category}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs text-gray-400 font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-primary leading-snug group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-charcoal-light text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="mt-6 inline-flex items-center gap-2 text-primary hover:text-accent font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer border-t border-gray-100 pt-4"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
