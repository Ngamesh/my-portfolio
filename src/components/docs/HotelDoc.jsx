import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Smartphone,
  Layout,
  Target,
  Search,
  Filter,
  CreditCard,
  Zap,
  ArrowRight,
  TrendingUp,
  Users,
  Compass
} from "lucide-react";

const Section = ({ children, className = "", innerClassName = "" }) => (
  <section className={`w-full py-16 md:py-24 ${className}`}>
    <div className={`max-w-7xl mx-auto px-6 md:px-12 ${innerClassName}`}>
      {children}
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
    <div className="w-12 h-12 rounded-xl bg-[#bc1616]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="text-[#bc1616]" size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function HotelDoc() {
  return (
    <div className="w-full mx-auto overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex-1 space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#bc1616]/10 text-[#bc1616] text-sm font-semibold tracking-wider uppercase mb-6">
              Hospitality & Leisure
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Grand Luxury <br />
              <span className="text-[#bc1616] italic">Booking Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              A premium, multi-page hospitality platform designed to elevate the digital presence of luxury hotels in Pokhara, Lakeside. Focusing on seamless booking flows and immersive visual storytelling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap gap-8 md:gap-12"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Role</p>
              <p className="font-semibold text-sm md:text-base">Frontend Developer & UI/UX Designer</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Technologies</p>
              <div className="flex gap-3 mt-1 flex-wrap">
                <span className="text-sm font-medium">HTML</span>
                <span className="text-sm font-medium text-gray-300">•</span>
                <span className="text-sm font-medium">CSS</span>
                <span className="text-sm font-medium text-gray-300">•</span>
                <span className="text-sm font-medium">JavaScript</span>
                <span className="text-sm font-medium text-gray-300">•</span>
                <span className="text-sm font-medium">jQuery</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a href="#" className="btn-primary group text-sm md:text-base">
              Live Demo <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="flex items-center gap-3 px-5 py-3 rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm md:text-base">
              <Github size={20} /> <span className="font-semibold">View Source Code</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 relative w-full perspective-1000px"
        >
          <div className="relative group">
            <img
              src="/assets/hotel-desktop.avif"
              alt="Project Hero Mockup"
              className="w-full rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute -bottom-12 -right-6 w-[28%] hidden md:block group-hover:translate-y-2 transition-transform duration-700">
              <img
                src="/assets/hotel-mobile.avif"
                alt="Mobile Preview"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. PROJECT OVERVIEW */}
      <Section>
        <div 
          className="relative w-full rounded-[2rem] overflow-hidden bg-cover bg-center min-h-[650px] flex items-center" 
          style={{ backgroundImage: "url('/assets/blog.avif')" }}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 w-full p-6 md:p-12 lg:p-16 flex justify-center">
            <div className="max-w-4xl bg-black/20 backdrop-blur-lg py-6 px-8 md:py-8 md:px-10 rounded-2xl border border-white/10 shadow-2xl">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight !text-gray-50 dark:!text-white">Crafting a Digital <br /> Sanctuary</h2>
                <p className="!text-gray-200 dark:!text-gray-200 text-base leading-relaxed">
                  The project was born from the need to bridge the gap between traditional hospitality and modern digital expectations. For luxury hotels, the website is the "first room" a guest enters.
                </p>
                <p className="!text-gray-200 dark:!text-gray-200 text-base leading-relaxed">
                  I focused on creating an interface that feels as serene as a lakeside resort, while maintaining high conversion rates through a simplified booking funnel and clear information hierarchy.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-2">
                  <div>
                    <p className="text-3xl font-bold text-[#bc1616]">10+</p>
                    <p className="text-sm !text-gray-300 dark:!text-gray-300 uppercase tracking-widest font-bold">Custom Pages</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#bc1616]">60FPS</p>
                    <p className="text-sm !text-gray-300 dark:!text-gray-300 uppercase tracking-widest font-bold">Smooth UI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. PROBLEM STATEMENT */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">The Friction Points</h2>
          <p className="text-gray-600 dark:text-gray-400">Identifying and solving key UX challenges in the traditional hospitality digital experience.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard
            icon={Smartphone}
            title="Mobile Friction"
            description="Traditional booking forms often fail on mobile. I implemented a responsive-first reservation system that feels native to touch devices."
          />
          <FeatureCard
            icon={Layout}
            title="Info Overload"
            description="Hotels often overwhelm users with data. I used a clean grid system and progressive disclosure to keep the focus on the experience."
          />
          <FeatureCard
            icon={Zap}
            title="Interaction Lag"
            description="Slow transitions kill the premium feel. I utilized optimized asset delivery and lightweight animations to ensure instant feedback."
          />
        </div>
      </Section>

      {/* 4. GOALS & OBJECTIVES */}
      <Section className="bg-white/5 backdrop-blur-sm dark:!bg-black dark:!text-white" innerClassName="py-12 md:py-20 px-0">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="grid gap-10 md:gap-12">
              {[
                { title: "Immersive Storytelling", desc: "Using high-resolution imagery and parallax to sell the experience.", icon: Compass },
                { title: "Conversion Optimized", desc: "Simplifying the reservation form to just three essential steps.", icon: TrendingUp },
                { title: "Reusable Architecture", desc: "Building a component-based system for easy scalability.", icon: Users }
              ].map((goal, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center text-[#bc1616] group-hover:bg-[#bc1616] group-hover:text-white transition-all duration-300">
                    <goal.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 tracking-tight text-gray-900 dark:text-white">{goal.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">{goal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase tracking-tighter text-gray-900 dark:text-white">Strategic <br /> Vision</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              The goal wasn't just to build a website, but to create a digital product that communicates luxury through every pixel and interaction.
            </p>
            <div className="pt-8">
              <Target className="text-[#bc1616] mb-4" size={40} />
              <p className="text-sm font-mono text-gray-500 tracking-widest uppercase">Targeting Excellence</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. RESEARCH & INSPIRATION */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Research & <br /> Visual Inspiration</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Instead of generic research, I analyzed top-tier hospitality platforms like Airbnb, Booking.com, and luxury resort sites to identify patterns that evoke trust and desire.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Minimalism", "High-Contrast", "Visual Breathing Room", "Serene Palette"].map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] perspective-1000px">
            {/* Creative Moodboard Collage */}
            <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl rotate-[-5deg] z-10 border border-white/10">
              <img src="/assets/luxury.png" alt="Inspiration 1" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gray-300 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl rotate-[5deg] z-20 border border-white/10">
              <img src="/assets/food.png" alt="Inspiration 2" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-[#bc1616]/20 backdrop-blur-md border border-white/20 rounded-2xl z-30 p-6 flex items-center justify-center text-center shadow-2xl">
              <p className="font-heading font-bold text-xl md:text-2xl italic tracking-tighter text-[#bc1616] drop-shadow-sm leading-tight">Luxury is <br /> in the details.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. USER FLOW */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 italic">The User Journey</h2>
          <p className="text-gray-500 uppercase tracking-widest text-xs font-mono">Seamless Navigation Flow</p>
        </div>

        <div className="w-full overflow-x-auto pb-8 custom-scrollbar">
          <div className="flex items-center justify-between min-w-[800px] relative px-10">
            {/* Animated Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#bc1616]/30 to-transparent -translate-y-1/2 z-0" />

            {[
              { label: "Landing", icon: Layout },
              { label: "Search", icon: Search },
              { label: "Details", icon: Smartphone },
              { label: "Form", icon: CreditCard },
              { label: "Confirm", icon: CheckCircle2 }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center group">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-[#bc1616] transition-all duration-300">
                  <step.icon className="text-gray-400 group-hover:text-[#bc1616] transition-colors" size={24} />
                </div>
                <span className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors tracking-tighter">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 7. WIREFRAMES & ITERATIONS */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-[4/5] rounded-2xl bg-gray-100 dark:bg-white/5 border border-dashed border-gray-400 dark:border-white/20 p-6 flex flex-col justify-between">
                <div className="w-full h-2 bg-gray-300 dark:bg-white/10 rounded" />
                <div className="space-y-3">
                  <div className="w-full h-32 bg-gray-200 dark:bg-white/5 rounded-lg" />
                  <div className="w-2/3 h-2 bg-gray-300 dark:bg-white/10 rounded" />
                </div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Lo-Fi Sketch</span>
              </div>
              <div className="aspect-[4/5] rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 overflow-hidden shadow-2xl translate-y-12 relative group">
                <img src="/assets/simple.png" alt="Hi-Fi Result" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[#bc1616]/10 pointer-events-none" />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">From Sketch <br /> to Screen</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Every layout was meticulously planned. I started with low-fidelity wireframes to finalize the information hierarchy before moving into high-fidelity design and frontend implementation.
            </p>
            <div className="p-8 rounded-2xl border border-[#bc1616]/10 bg-[#bc1616]/[0.02] backdrop-blur-sm">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Zap size={18} className="text-[#bc1616]" /> Iterative Thinking
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed italic">"Adjusted the booking form layout 3 times based on mobile usability testing to reduce input friction and maximize conversion."</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. DESIGN SYSTEM */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 italic uppercase tracking-tighter">Design System</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Built upon a foundation of consistency, accessibility, and modern aesthetics.</p>
          </div>
          <div className="flex gap-8 px-6 py-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-white/10">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold font-heading tracking-tighter">Aa</span>
              <span className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-widest">Nunito</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-light tracking-tighter">Aa</span>
              <span className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-widest">Sans Serif</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-2 h-64 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="flex justify-between items-start z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">COLOR PALETTE</span>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-[#bc1616] shadow-lg shadow-[#bc1616]/20" />
                <div className="w-10 h-10 rounded-full bg-black dark:bg-white shadow-lg" />
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md" />
              </div>
            </div>
            <div className="space-y-2 z-10 text-left">
              <h4 className="text-2xl font-bold italic">Luxury Primary</h4>
              <p className="text-sm text-gray-500">Focused on high-contrast and refined readability.</p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 border border-[#bc1616]/10 rounded-full group-hover:scale-110 transition-transform duration-700" />
          </div>

          <div className="h-64 rounded-2xl bg-[#bc1616] p-8 flex flex-col justify-between text-white shadow-xl shadow-[#bc1616]/20 group overflow-hidden relative">
            <Layout size={32} className="relative z-10 group-hover:rotate-12 transition-transform duration-500" />
            <h4 className="text-xl font-bold relative z-10 italic text-left leading-tight">12-Column <br /> Grid System</h4>
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '12.5% 100%' }} />
          </div>

          <div className="h-64 rounded-2xl border border-dashed border-gray-300 dark:border-white/20 p-8 flex flex-col justify-between items-center text-center group hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Smartphone size={28} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Responsive <br /> System</span>
            <div className="flex gap-1.5 items-end h-8">
              {[20, 35, 25, 45, 30].map((h, i) => (
                <div key={i} className="w-1.5 bg-[#bc1616]/30 dark:bg-[#bc1616]/20 rounded-full group-hover:bg-[#bc1616] transition-all duration-300" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 9. FRONTEND DEVELOPMENT */}
      <Section className="bg-white/5 backdrop-blur-sm dark:!bg-[#0a0a0a] dark:!text-white">
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-8 text-left">
            <span className="text-[#bc1616] font-mono tracking-widest uppercase text-xs mb-4 block">The Engineering Phase</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight italic text-gray-900 dark:text-white uppercase tracking-tighter">Modular <br /> Architecture</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Leveraging React and a component-based approach, I built a scalable UI library that allows for rapid page construction without compromising on performance or design fidelity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: CheckCircle2, title: "Clean SCSS", desc: "Maintainable architecture" },
                { icon: CheckCircle2, title: "Asset Opt", desc: "Fast lazy-loading" },
                { icon: CheckCircle2, title: "Smooth Scroll", desc: "AOS implementation" },
                { icon: CheckCircle2, title: "Form Val", desc: "Dynamic feedback" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                  <item.icon size={18} className="text-[#bc1616] mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm text-gray-900 dark:text-white">{item.title}</h5>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group perspective-1000px">
            <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/10 group-hover:rotate-y-[-5deg] transition-transform duration-700">
              {/* VS Code Style Header */}
              <div className="bg-[#2d2d2d] px-4 py-2.5 flex items-center gap-2 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="text-[10px] text-gray-500 ml-4 font-mono italic tracking-widest uppercase">RoomCard.jsx</span>
              </div>
              <div className="p-6 md:p-8 font-mono text-[10px] md:text-[12px] text-gray-300 leading-relaxed overflow-x-auto whitespace-pre custom-scrollbar">
                {`const RoomCard = ({ title, image, price }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileHover={{ y: -15 }}
      className="room-card group"
    >
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <img src={image} className="group-hover:scale-110 transition" />
        <div className="price-tag">\${price}/Night</div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <h3 className="text-xl font-bold">{title}</h3>
        <Button size="sm" variant="outline">
           Book Now
        </Button>
      </div>
    </motion.div>
  );
};`}
              </div>
            </div>
            <div className="absolute -top-10 -right-5 p-6 rounded-2xl glass shadow-2xl hidden md:block border border-white/20 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-gray-800 dark:text-gray-200 tracking-widest uppercase block">Frontend Health</span>
                  <div className="flex gap-1 h-1.5 w-24 md:w-32 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="w-[98%] bg-green-500 h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 opacity-0 dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </Section>

      {/* 10. KEY FEATURES SHOWCASE */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic tracking-tighter text-gray-900 dark:text-white uppercase">Signature Features</h2>
          <div className="w-24 h-1.5 bg-[#bc1616] mx-auto rounded-full shadow-sm shadow-[#bc1616]/20" />
        </div>

        <div className="space-y-32 md:space-y-48">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-8 text-left">
              <span className="text-[#bc1616] font-bold text-xs tracking-[0.3em] uppercase block">Smart Selection</span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Intuitive Filtering <br /> System</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Finding the right room should be effortless. I designed a multi-criteria filter that updates in real-time, allowing users to find their perfect stay based on amenities, price, and group size.
              </p>
              <div className="flex gap-4 md:gap-6 pt-4 justify-start">
                <div className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-xs md:text-sm font-bold">
                  <Filter size={18} className="text-[#bc1616]" /> Dynamic Sorting
                </div>
                <div className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-xs md:text-sm font-bold">
                  <Search size={18} className="text-[#bc1616]" /> Fast Indexing
                </div>
              </div>
            </div>
            <div className="flex-1 relative group w-full">
              <img src="/assets/simple.png" alt="Filtering UI" className="rounded-3xl group-hover:rotate-2 transition-transform duration-700 w-full" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-8 text-left">
              <span className="text-[#bc1616] font-bold text-xs tracking-[0.3em] uppercase block">Safe & Swift</span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight uppercase tracking-tighter">Secure Booking <br /> Funnel</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                The checkout process is the most critical part of the user journey. I simplified the reservation flow into a single, cohesive interface that builds trust through transparency and clear visual feedback.
              </p>
              <div className="flex gap-4 md:gap-6 pt-4 justify-start">
                <div className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-xs md:text-sm font-bold">
                  <CreditCard size={18} className="text-[#bc1616]" /> Multi-Payment
                </div>
                <div className="flex items-center gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-xs md:text-sm font-bold">
                  <Zap size={18} className="text-[#bc1616]" /> Instant Confirm
                </div>
              </div>
            </div>
            <div className="flex-1 relative group w-full">
              <img src="/assets/luxury.png" alt="Booking UI" className="rounded-3xl group-hover:-rotate-2 transition-transform duration-700 w-full" />
            </div>
          </div>
        </div>
      </Section>

      {/* 11. CHALLENGES & SOLUTIONS */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 italic uppercase tracking-tighter">The Hurdles</h2>
          <p className="text-gray-500 uppercase tracking-widest text-xs font-mono tracking-[0.4em]">Problem Solving in Real-Time</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { q: "Managing information-heavy layouts?", a: "Implemented a card-based grid system with progressive disclosure to keep the UI clean while providing all necessary data." },
            { q: "Maintaining 60FPS with heavy imagery?", a: "Used modern image formats (AVIF) and optimized lazy-loading techniques to ensure smooth scroll performance." },
            { q: "Creating a truly responsive booking flow?", a: "Designed a bottom-sheet inspired modal for mobile users that makes selection feel like a native app experience." }
          ].map((item, i) => (
            <div key={i} className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/10 flex flex-col md:flex-row gap-6 md:gap-8 items-start group hover:border-[#bc1616]/50 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#bc1616]/10 flex items-center justify-center text-[#bc1616] font-bold">0{i + 1}</div>
              <div className="text-left">
                <h4 className="text-xl font-bold mb-3 tracking-tight">{item.q}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 12. REFLECTION & OUTCOME */}
      <Section className="border-t border-black/5 dark:border-white/10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4 text-left">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight italic tracking-tighter uppercase">Final <br /> Thoughts</h2>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6 text-left">
              <h4 className="text-xl font-bold flex items-center gap-3">
                <Target className="text-[#bc1616]" size={20} /> Interaction Design
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic text-sm md:text-base">
                "I learned how subtle animations can drastically change the perceived quality of a product. Motion isn't just decoration; it's a powerful tool for guidance and feedback."
              </p>
            </div>
            <div className="space-y-6 text-left">
              <h4 className="text-xl font-bold flex items-center gap-3">
                <Zap className="text-[#bc1616]" size={20} /> Technical Growth
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic text-sm md:text-base">
                "Building a 10+ page site required a very disciplined approach to component architecture and CSS organization. It taught me the value of scalability from day one."
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 13. FINAL SHOWCASE */}
      <Section className="text-center pt-32 pb-48 relative overflow-hidden">
        <div>
          <h2 className="text-5xl md:text-9xl font-black mb-12 tracking-tighter uppercase">THE <br /> <span className="text-[#bc1616] italic">MASTERPIECE</span></h2>
          <p className="text-lg md:text-xl text-gray-500 mb-16 max-w-2xl mx-auto font-medium">
            A harmonious blend of high-end aesthetics and modern frontend performance.
          </p>

          <div className="relative mt-24 md:mt-32 scale-100 md:scale-110">
            <div className="flex justify-center items-end gap-6 md:gap-16 relative z-10">
              {/* Mobile */}
              <motion.div
                whileHover={{ y: -30 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-1/3 md:w-1/5 rounded-[2.5rem] border-[8px] md:border-[10px] border-gray-900 overflow-hidden shadow-2xl translate-y-16 relative group"
              >
                <img src="/assets/luxury.png" alt="Mobile Showcase" className="w-full" />
                <div className="absolute inset-0 bg-[#bc1616]/10 group-hover:opacity-0 transition-opacity" />
              </motion.div>
              {/* Desktop */}
              <motion.div
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="w-full md:w-[70%] rounded-3xl border-[10px] md:border-[15px] border-gray-900 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative group"
              >
                <img src="/assets/simple.png" alt="Desktop Showcase" className="w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#bc1616]/20 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity" />
              </motion.div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] bg-[#bc1616]/[0.03] blur-[150px] -z-10 rounded-full" />
            <div className="absolute top-0 left-1/4 w-[1px] h-64 bg-gradient-to-b from-[#bc1616]/40 to-transparent" />
            <div className="absolute bottom-0 right-1/4 w-[1px] h-64 bg-gradient-to-t from-[#bc1616]/40 to-transparent" />
          </div>

          <div className="mt-32 md:mt-48">
            <button className="btn-primary flex items-center gap-6 px-12 py-5 md:px-16 md:py-6 text-xl md:text-2xl rounded-full hover:px-20 transition-all duration-700 shadow-2xl shadow-[#bc1616]/20 group">
              Experience the Live Build <ArrowRight size={28} className="group-hover:translate-x-3 transition-transform duration-500" />
            </button>
            <p className="mt-8 text-gray-500 font-mono text-[10px] uppercase tracking-[0.5em]">Crafted with passion • Built for excellence</p>
          </div>
        </div>
      </Section>

    </div>
  );
}
