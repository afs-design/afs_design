import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowRight, X, Heart } from 'lucide-react';
import { projects } from '../data';

export default function Theme11() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#C8102E] text-white font-serif selection:bg-white selection:text-[#C8102E] overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-[#C8102E]/90 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            At First Sight <Heart size={22} fill="currentColor" className="text-white" />
          </h1>
          <a href="#contact" className="text-sm font-sans font-bold tracking-wide bg-white text-[#C8102E] px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors shadow-sm">
            프로젝트 문의
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 min-h-[85vh] flex flex-col justify-center items-center text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-4xl">
          <Heart size={48} fill="currentColor" className="mx-auto mb-8 text-white opacity-90" />
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
            마음을 사로잡는<br/>
            <span className="italic font-light">단 한 번의 시선</span>
          </h2>
          <p className="text-lg md:text-2xl font-sans font-light text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            브랜드의 진정성을 담아, 첫눈에 반할 수밖에 없는<br className="hidden md:block"/>
            매력적인 디자인과 경험을 설계합니다.
          </p>
          <a href="#portfolio" className="inline-flex items-center gap-3 font-sans text-lg border-b-2 border-white pb-1 hover:opacity-70 transition-opacity font-medium">
            포트폴리오 보기 <ArrowRight size={20}/>
          </a>
        </motion.div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-32 px-6 bg-[#A80D26]">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-20 italic">Our Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((p, i) => (
              <motion.div 
                key={p.id} 
                onClick={() => setSelectedProject(p)} 
                className="cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-white/5 mb-6 rounded-t-full border border-white/20 shadow-lg">
                  <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="text-center">
                  <p className="text-xs font-sans font-bold uppercase tracking-widest text-white/70 mb-2">{p.category}</p>
                  <h4 className="text-2xl font-bold">{p.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-8">Let's Create Together</h3>
          <p className="text-xl font-sans font-light text-white/90 mb-12">
            당신의 브랜드가 사랑받을 수 있도록,<br/>
            엣 퍼스트 사이트가 함께하겠습니다.
          </p>
          <div className="p-12 border border-white/30 rounded-3xl bg-white/5 backdrop-blur-sm shadow-xl">
            <p className="text-3xl font-bold mb-10 font-sans">afs_info@naver.com</p>
            <a href="https://pf.kakao.com/_xnBYVn" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-white text-[#C8102E] font-sans font-bold text-lg px-10 py-4 rounded-full w-full sm:w-auto hover:bg-gray-100 transition-colors shadow-lg">
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#C8102E]/95 backdrop-blur-md p-4 md:p-8"
          >
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 p-3 bg-white rounded-full text-[#C8102E] hover:bg-gray-200 transition-colors z-[110] shadow-lg"><X size={24}/></button>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-[500px] h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col relative"
            >
              <div className="w-full h-full overflow-y-auto phone-scroll">
                <div className="p-10 text-center bg-white border-b border-gray-100">
                  <p className="text-xs font-sans font-bold text-[#C8102E] mb-3 uppercase tracking-widest">{selectedProject.category}</p>
                  <h2 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h2>
                </div>
                <img src={selectedProject.coverImage} className="w-full h-auto" referrerPolicy="no-referrer" />
                {selectedProject.details.map((img, i) => <img key={i} src={img} className="w-full h-auto" referrerPolicy="no-referrer" />)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
