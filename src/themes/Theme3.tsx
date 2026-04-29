import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowRight, X } from 'lucide-react';
import { projects } from '../data';

export default function Theme3() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans overflow-x-hidden selection:bg-[#CCFF00] selection:text-black">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-white">At First Sight</h1>
          <a href="#contact" className="text-sm font-semibold bg-[#CCFF00] text-black px-5 py-2.5 rounded-full hover:bg-[#b3e600] transition-colors shadow-[0_0_15px_rgba(204,255,0,0.3)]">
            프로젝트 문의
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 min-h-[80vh] flex flex-col justify-center items-center text-center relative">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CCFF00]/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-4xl relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-white">
            Digital Experiences<br/>
            <span className="text-zinc-600">Designed to Convert.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            시선을 사로잡는 네온 포인트와 정돈된 다크 레이아웃.<br/>
            눈이 편안하면서도 트렌디한 감각을 잃지 않는 디자인을 제안합니다.
          </p>
          <a href="#portfolio" className="inline-flex items-center gap-3 text-white font-semibold text-lg hover:text-[#CCFF00] transition-colors group">
            포트폴리오 보기 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
          </a>
        </motion.div>
      </section>

      {/* Sleek Neon Marquee */}
      <div className="relative z-20 bg-[#CCFF00] text-black font-bold text-lg py-3 overflow-hidden flex whitespace-nowrap shadow-[0_0_30px_rgba(204,255,0,0.15)]">
        <div className="flex animate-[marquee_20s_linear_infinite]">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-6 flex items-center gap-6 uppercase tracking-wider">
              <span>Creative Studio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              <span>High-End Design</span>
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            </span>
          ))}
        </div>
      </div>

      {/* Portfolio */}
      <section id="portfolio" className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white">Selected Works</h3>
            <p className="text-zinc-500 hidden md:block">2023 — 2024</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <motion.div 
                key={p.id} 
                onClick={() => setSelectedProject(p)} 
                className="cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 mb-6">
                  <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-2xl font-bold text-white group-hover:text-[#CCFF00] transition-colors">{p.title}</h4>
                    <ArrowRight size={20} className="text-zinc-600 group-hover:text-[#CCFF00] transform -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                  </div>
                  <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{p.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 border-t border-white/5 bg-zinc-950">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">Ready to start?</h3>
          <p className="text-xl text-zinc-400 mb-12">
            새로운 프로젝트를 계획 중이신가요?<br/>
            언제든 편하게 문의해 주세요.
          </p>
          <div className="p-10 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
            <p className="text-2xl font-medium mb-8 text-white">afs_info@naver.com</p>
            <a href="https://pf.kakao.com/_xnBYVn" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#CCFF00] text-black font-bold text-lg px-8 py-4 rounded-full w-full sm:w-auto hover:bg-[#b3e600] transition-colors shadow-[0_0_20px_rgba(204,255,0,0.2)]">
              <MessageCircle size={24}/> 카카오톡으로 문의하기
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
          >
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 p-3 bg-zinc-900 rounded-full text-white hover:bg-zinc-800 hover:text-[#CCFF00] border border-white/10 transition-colors z-[110]"><X size={24}/></button>
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full max-w-[500px] h-[85vh] bg-zinc-950 rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-white/10 relative"
            >
              <div className="w-full h-full overflow-y-auto phone-scroll">
                <div className="p-8 border-b border-white/5 bg-zinc-950/90 sticky top-0 z-10 backdrop-blur-md">
                  <p className="text-xs font-bold text-[#CCFF00] mb-2 uppercase tracking-widest">{selectedProject.category}</p>
                  <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                </div>
                <img src={selectedProject.coverImage} className="w-full h-auto" referrerPolicy="no-referrer" />
                {selectedProject.details.map((img, i) => <img key={i} src={img} className="w-full h-auto border-t border-white/5" referrerPolicy="no-referrer" />)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
