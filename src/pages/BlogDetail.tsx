import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight, AlertCircle, Share2 } from 'lucide-react';

export const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="pt-32 pb-24 bg-cream min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-12 max-w-md w-full text-center border border-gray-150 shadow-md">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="font-serif font-bold text-2xl text-primary mb-2">Article Not Found</h2>
          <p className="text-charcoal-light text-sm mb-6">The blog post or article you are looking for does not exist.</p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Get other recommended articles
  const recommendations = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  // Simple renderer to turn double newlines into paragraphs, and lines starting with "###" or "-" into headers and lists
  const renderContent = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl sm:text-2xl font-serif font-bold text-primary mt-8 mb-4">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }
      if (paragraph.startsWith('- ')) {
        return (
          <ul key={index} className="list-disc pl-6 my-4 space-y-2 text-charcoal-light text-sm sm:text-base leading-relaxed">
            {paragraph.split('\n').map((line, idx) => (
              <li key={idx}>{line.replace('- ', '')}</li>
            ))}
          </ul>
        );
      }
      return (
        <p key={index} className="text-charcoal-light text-sm sm:text-base leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="pt-24 bg-cream min-h-screen pb-16">
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-charcoal hover:text-accent font-bold text-xs uppercase tracking-widest transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <article className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm p-6 sm:p-10 space-y-6">
          {/* Metadata Banner */}
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1 bg-accent/15 text-accent font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border border-accent/25">
              <Tag className="h-3 w-3" /> {post.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-primary leading-tight tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-xs text-gray-400 font-semibold border-b border-gray-100 pb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Cover Image */}
          <div className="h-72 sm:h-[450px] rounded-2xl overflow-hidden shadow-xs">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none prose-headings:font-serif pt-4">
            {renderContent(post.content)}
          </div>

          {/* Footer of the article */}
          <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="text-xs text-charcoal-light">
              Published by <span className="font-semibold text-primary">Ceylon Nest Journeys Editor</span>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Article link copied to clipboard!');
              }}
              className="inline-flex items-center gap-2 text-primary hover:text-accent font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
            >
              <Share2 className="h-4 w-4" /> Copy Link to Share
            </button>
          </div>
        </article>

        {/* Read More Section */}
        <div className="space-y-6">
          <h3 className="font-serif font-bold text-2xl text-primary">Recommended Reads</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {recommendations.map((rec) => (
              <Link
                key={rec.id}
                to={`/blog/${rec.id}`}
                className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent">{rec.category}</span>
                  <h4 className="font-serif font-bold text-lg text-primary group-hover:text-accent transition-colors line-clamp-2">
                    {rec.title}
                  </h4>
                  <p className="text-charcoal-light text-xs leading-relaxed line-clamp-2">{rec.excerpt}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-2 text-primary group-hover:text-accent font-bold text-xs uppercase tracking-widest pt-3 border-t border-gray-100">
                  Read Article <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
