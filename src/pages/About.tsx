import React from 'react';
import { Compass, Users, Heart, Target, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const team = [
    {
      name: 'Nalinda Perera',
      role: 'Founder & Head of Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
    },
    {
      name: 'Chaminda Silva',
      role: 'Senior English-Speaking Guide',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80',
    },
    {
      name: 'Priyanthi Fernando',
      role: 'Tour Coordinator',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80',
    },
  ];

  return (
    <div className="pt-24 bg-cream min-h-screen">
      {/* Banner */}
      <div className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80')` }}></div>
        
        <div className="relative max-w-4xl mx-auto z-10 space-y-4">
          <span className="inline-flex items-center gap-1 bg-accent/20 border border-accent/40 text-accent-light px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
            <Users className="h-3.5 w-3.5" /> Our Story
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">About Us</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discover the team and values driving our commitment to genuine Sri Lankan hospitality.
          </p>
        </div>
      </div>

      {/* Narrative Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 reveal-on-scroll">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block">Welcome to Ceylon Nest Journeys</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
              Your Trusted Travel Partner in Sri Lanka
            </h2>
            <p className="text-charcoal-light text-sm sm:text-base leading-relaxed font-sans">
              Welcome to **Ceylon Nest Journeys**, your trusted travel partner for discovering the beauty of Sri Lanka. We specialize in creating personalized tours that showcase the island's breathtaking landscapes, rich cultural heritage, diverse wildlife, and pristine beaches.
            </p>
            <p className="text-charcoal-light text-sm sm:text-base leading-relaxed font-sans">
              Our experienced team is dedicated to providing safe, comfortable, and unforgettable travel experiences with genuine Sri Lankan hospitality. Whether you're seeking adventure, relaxation, cultural exploration, or a luxury getaway, we carefully design every journey to match your interests and exceed your expectations.
            </p>
            <p className="text-charcoal-light text-sm sm:text-base font-semibold leading-relaxed font-sans">
              At Ceylon Nest Journeys, we don't just plan holidays — we create memories that last a lifetime.
            </p>
          </div>
          <div className="reveal-on-scroll">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3">
              <img
                src="/logo.jpeg"
                alt="Ceylon Nest Journeys Logo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Block */}
      <section className="bg-white py-16 px-4 border-y border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-cream rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4 reveal-on-scroll flex flex-col justify-between">
            <div className="space-y-4">
              <div className="bg-primary/5 w-12 h-12 rounded-xl flex items-center justify-center">
                <Compass className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-charcoal">Our Vision</h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                To inspire the world to discover the true beauty of Sri Lanka through extraordinary travel experiences. We strive to be the leading boutique tour operator recognized for personalization, excellence, and authenticity.
              </p>
            </div>
            <div className="border-t border-gray-200/50 pt-4 flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
              <Sparkles className="h-4 w-4" /> Inspiring Travel
            </div>
          </div>

          {/* Mission */}
          <div className="bg-cream rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4 reveal-on-scroll flex flex-col justify-between">
            <div className="space-y-4">
              <div className="bg-primary/5 w-12 h-12 rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-charcoal">Our Mission</h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Crafting exceptional journeys with genuine hospitality, personalized service, and unforgettable memories. We protect our guest safety, promote local culture, and support sustainable ecotourism.
              </p>
            </div>
            <div className="border-t border-gray-200/50 pt-4 flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
              <Heart className="h-4 w-4" /> Hospitality First
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">Our People</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
            Meet Our Dedicated Team
          </h2>
          <p className="text-charcoal-light text-sm max-w-md mx-auto mt-2">
            Our experts are committed to ensuring a safe, seamless, and hospitality-first experience in Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center space-y-4 reveal-on-scroll hover:shadow-md transition-shadow"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto shadow-inner bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-charcoal">{member.name}</h4>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
