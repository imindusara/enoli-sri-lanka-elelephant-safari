import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Calendar } from 'lucide-react';

export const BottomActionBar: React.FC = () => {
  const whatsappNumber = '94763586686';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Ceylon%20Nest%20Journeys!%20I%20would%20like%20to%20enquire%20about%20your%20Sri%20Lankan%20private%20tours.`;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200/80 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] px-4 py-3 pb-safe flex gap-3">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-98"
      >
        <MessageSquare className="h-4.5 w-4.5" />
        <span>WhatsApp</span>
      </a>

      {/* Book Now Button */}
      <Link
        to="/book-now"
        className="flex-1 bg-accent hover:bg-accent-dark text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-98"
      >
        <Calendar className="h-4.5 w-4.5" />
        <span>Book Now</span>
      </Link>
    </div>
  );
};
