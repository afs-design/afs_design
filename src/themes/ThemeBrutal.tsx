import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowRight, X } from 'lucide-react';
import { projects } from '../data';

export default function ThemeBrutal() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#0a0a0a] selection:bg-[#0033FF] selection:text-white font-sans">
      <header className="fixed top-0 w-full z-40 bg-[#F4F4F0] brutal-border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-tight uppercase">엣 퍼스트 사이트</h1>
          <a href="#contact" className="text-sm font-bold bg-[#0033FF] text-white px-6 py-2 brutal-border hover:bg-[#0a0a0a] transition-colors">프로젝트 문의</a>
        </div>
      </header>

      <section className="pt-40 pb-20 px-6 min-h-[85vh] flex flex-col justify-center items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl">
          <h2 className="text-5xl md:text-7xl lg:text-[90px] font-black tracking-tight mb-8 leading-[1.1] break-keep">
            예쁜 쓰레기는 그만.<br/><span className="text-[#0033FF]">매출을 끌어올리는</span><br/>진짜 디자인.
          </h2>
          <p className="text-xl font-bold text-gray-700 mb-12">단순히 보기 좋은 디자인은 고객을 머물게 할 수 없습니다.</p>
          <a href="#portfolio" className="inline-flex items-center gap-3 bg-[#0033FF] text-white font-black text-xl px-10 py-5 brutal-border brutal-shadow-black hover:bg-[#0a0a0a] transition-all">결과물 확인하기 <ArrowRight size={24} strokeWidth={3}/></a>
        </motion.div>
      </section>

      <div className="marquee-container font-black text-2xl md:text-4xl tracking-tight uppercase bg-[#0033FF] text-white brutal-border-t brutal-border-b py-4">
        <div className="marquee-content">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-4 flex items-center gap-8">
              <span>🔥 전환율 300% 상승</span>
              <span>🔥 이탈률 50% 감소</span>
              <span>🔥 체류시간 2배 증가</span>
              <span>🔥 압도적인 시각적 경험</span>
            </span>
          ))}
        </div>
      </div>

      <section id="portfolio" className="py-32 brutal-border-b">
        <div className="container mx-auto px-6 max-w-7xl">
          <h3 className="text-6xl font-black mb-20 text-center uppercase">포트폴리오</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {projects.map(p => (
              <div key={p.id} onClick={() => setSelectedProject(p)} className="cursor-pointer group flex flex-col items-center">
                <div className="relative w-[300px] h-[600px] brutal-border bg-white p-4 brutal-shadow-black group-hover:bg-[#0033FF] transition-colors duration-300">
                  <div className="w-full h-full brutal-border overflow-hidden bg-[#F4F4F0]">
                    <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="mt-10 text-center w-full brutal-border p-4 bg-white group-hover:bg-[#0033FF] group-hover:text-white transition-colors">
                  <h4 className="text-2xl font-black">{p.title}</h4>
                  <p className="text-sm font-bold mt-1 uppercase">{p.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-6xl font-black mb-16 uppercase">프로젝트 문의</h3>
          <div className="brutal-border p-12 bg-[#F4F4F0] brutal-shadow-black">
            <p className="text-4xl font-black mb-8">afs_info@naver.com</p>
            <a href="https://pf.kakao.com/_xnBYVn" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#FEE500] text-[#0a0a0a] font-black text-xl px-10 py-5 brutal-border w-full justify-center hover:bg-[#0a0a0a] hover:text-[#FEE500] transition-colors">
              <MessageCircle size={24}/> 카카오톡 빠른 상담
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]/90 backdrop-blur-sm p-4">
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 p-4 bg-[#0033FF] brutal-border text-white hover:bg-white hover:text-[#0a0a0a] brutal-shadow-black transition-all"><X size={32} strokeWidth={3}/></button>
            <div className="w-full max-w-[450px] h-[85vh] brutal-border bg-white p-4 brutal-shadow-black flex flex-col">
              <div className="w-full h-full overflow-y-auto phone-scroll bg-[#F4F4F0] brutal-border">
                <div className="bg-[#0033FF] p-8 text-center brutal-border-b">
                  <p className="text-sm font-bold tracking-widest text-white mb-2 uppercase">{selectedProject.category}</p>
                  <h2 className="text-3xl font-black text-white">{selectedProject.title}</h2>
                </div>
                <img src={selectedProject.coverImage} className="w-full h-auto border-b-2 border-[#0a0a0a]" referrerPolicy="no-referrer" />
                {selectedProject.details.map((img, i) => <img key={i} src={img} className="w-full h-auto border-b-2 border-[#0a0a0a]" referrerPolicy="no-referrer" />)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
