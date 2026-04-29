import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowRight, X } from 'lucide-react';
import { projects } from '../data';

export default function Theme4() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-8 py-6 flex justify-between items-center">
          <h1 className="text-lg font-bold tracking-tighter uppercase">At First Sight</h1>
          <a href="#contact" className="text-sm font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">Contact</a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-20 px-8 min-h-[90vh] flex flex-col justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="max-w-5xl">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] uppercase">
            Less, <br/>But Better.
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-12 max-w-2xl leading-relaxed">
            본질에 집중하는 미니멀리즘 디자인으로<br/>
            브랜드의 핵심 가치를 가장 명확하게 전달합니다.
          </p>
          <a href="#portfolio" className="inline-flex items-center gap-4 text-black font-bold text-xl uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-50 transition-opacity">
            View Projects <ArrowRight size={24}/>
          </a>
        </motion.div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-32 px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {projects.map((p, i) => (
              <motion.div 
                key={p.id} 
                onClick={() => setSelectedProject(p)} 
                className="cursor-pointer group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100 mb-6">
                  <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-3xl font-bold tracking-tight mb-2">{p.title}</h4>
                    <p className="text-sm font-bold uppercase tracking-widest text-gray-500">{p.category}</p>
                  </div>
                  <ArrowRight size={28} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-40 px-8 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 uppercase">Let's Talk</h3>
          <p className="text-2xl md:text-4xl font-medium mb-16">afs_info@naver.com</p>
          <a href="https://pf.kakao.com/_xnBYVn" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 bg-white text-black font-bold text-xl uppercase tracking-widest px-12 py-6 hover:bg-gray-200 transition-colors">
            <MessageCircle size={28}/> Kakao Talk
          </a>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white p-4 md:p-12"
          >
            <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 p-2 text-black hover:opacity-50 transition-opacity z-[110]"><X size={40} strokeWidth={1.5}/></button>
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[500px] h-full flex flex-col relative"
            >
              <div className="w-full h-full overflow-y-auto phone-scroll pb-20">
                <div className="py-12 bg-white">
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">{selectedProject.category}</p>
                  <h2 className="text-4xl font-black tracking-tight">{selectedProject.title}</h2>
                </div>
                <img src={selectedProject.coverImage} className="w-full h-auto mb-8" referrerPolicy="no-referrer" />
                {selectedProject.details.map((img, i) => <img key={i} src={img} className="w-full h-auto mb-8" referrerPolicy="no-referrer" />)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
