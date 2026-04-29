import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowRight, X } from 'lucide-react';
import { projects } from '../data';

export default function ThemeLuxury() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-light">
      <header className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-lg tracking-[0.2em] uppercase font-medium">At First Sight</h1>
          <a href="#contact" className="text-xs tracking-widest uppercase border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">Contact</a>
        </div>
      </header>

      <section className="pt-40 pb-20 px-6 min-h-[85vh] flex flex-col justify-center items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8 leading-[1.3] break-keep">
            예쁜 쓰레기는 그만.<br/>매출을 끌어올리는 진짜 디자인.
          </h2>
          <p className="text-lg text-gray-400 mb-16 font-light tracking-wide break-keep">단순히 보기 좋은 디자인은 고객을 머물게 할 수 없습니다.</p>
          <a href="#portfolio" className="inline-flex items-center gap-4 border-b border-white pb-2 hover:text-gray-400 hover:border-gray-400 transition-colors uppercase tracking-widest text-sm">View Projects <ArrowRight size={16}/></a>
        </motion.div>
      </section>

      <section id="portfolio" className="py-32 border-t border-white/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <h3 className="text-2xl tracking-[0.2em] uppercase mb-20 text-center">Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {projects.map(p => (
              <div key={p.id} onClick={() => setSelectedProject(p)} className="cursor-pointer group flex flex-col items-center">
                <div className="relative w-[280px] h-[560px] rounded-[2.5rem] border border-white/20 bg-black p-2 group-hover:border-white/50 transition-colors duration-500">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden bg-zinc-900 relative">
                    <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="mt-10 text-center">
                  <h4 className="text-lg font-light tracking-wide">{p.title}</h4>
                  <p className="text-xs text-gray-500 tracking-widest uppercase mt-3">{p.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-2xl tracking-[0.2em] uppercase mb-16">Contact Us</h3>
          <div className="border border-white/10 p-16 rounded-3xl bg-white/[0.02]">
            <p className="text-3xl font-light mb-12 tracking-wider">afs_info@naver.com</p>
            <a href="https://pf.kakao.com/_xnBYVn" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-sm">
              <MessageCircle size={18}/> Kakao Talk
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 text-white p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors"><X size={24}/></button>
            <div className="w-full max-w-[400px] h-[85vh] rounded-[2.5rem] border border-white/20 bg-black p-2 flex flex-col">
              <div className="w-full h-full overflow-y-auto phone-scroll rounded-[2rem] bg-zinc-950">
                <div className="p-8 text-center border-b border-white/10">
                  <h2 className="text-xl font-light tracking-wide">{selectedProject.title}</h2>
                </div>
                <img src={selectedProject.coverImage} className="w-full h-auto" referrerPolicy="no-referrer" />
                {selectedProject.details.map((img, i) => <img key={i} src={img} className="w-full h-auto" referrerPolicy="no-referrer" />)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
