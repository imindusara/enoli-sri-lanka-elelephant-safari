import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  message?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = '+94704544096', // User phone number
  message = 'Hi Ceylon Nest Journeys! I would like to enquire about your Sri Lankan tours.',
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Pulse ring animation */}
      <span className="absolute inline-flex h-14 w-14 rounded-full bg-[#25D366]/40 animate-ping"></span>
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-105 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        aria-label="Contact Ceylon Nest Journeys on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap text-sm font-semibold pl-0 group-hover:pl-2">
          Chat with us
        </span>
      </a>
    </div>
  );
};
