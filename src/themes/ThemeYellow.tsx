import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowRight, X, Star } from 'lucide-react';
import { projects, processSteps } from '../data';

export default function ThemeYellow() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-[#FEE500] selection:text-black font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-black">엣 퍼스트 사이트</h1>
          <a href="#contact" className="text-sm font-bold bg-[#FEE500] text-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition-colors">프로젝트 문의</a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 min-h-[80vh] flex flex-col justify-center items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
          <div className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            Conversion-Focused Design
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black break-keep leading-tight">
            예쁜 쓰레기는 그만.<br/>매출을 끌어올리는 진짜 디자인.
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-medium">단순히 보기 좋은 디자인은 고객을 머물게 할 수 없습니다.</p>
          <a href="#portfolio" className="inline-flex items-center gap-2 bg-black text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#FEE500] hover:text-black transition-colors shadow-xl">결과물 확인하기 <ArrowRight size={20}/></a>
        </motion.div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <h3 className="text-4xl font-bold mb-16 text-center text-black">포트폴리오</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {projects.map(p => (
              <div key={p.id} onClick={() => setSelectedProject(p)} className="cursor-pointer group flex flex-col items-center">
                <div className="relative w-[280px] h-[560px] rounded-[3rem] border-[8px] border-gray-200 bg-white p-2 shadow-xl group-hover:border-[#FEE500] transition-colors duration-300">
                  <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-gray-100 relative">
                    <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#FEE500] rounded-full flex items-center justify-center text-black">
                        <ArrowRight size={24} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <h4 className="text-xl font-bold text-black">{p.title}</h4>
                  <p className="text-sm font-medium text-gray-500 mt-2">{p.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-4xl font-bold mb-12 text-black">프로젝트 문의</h3>
          <div className="bg-gray-50 p-12 rounded-[2rem] shadow-sm border border-gray-100">
            <p className="text-sm font-bold text-gray-500 mb-4">고객 센터</p>
            <p className="text-3xl font-bold mb-8 text-black">afs_info@naver.com</p>
            <a href="https://pf.kakao.com/_xnBYVn" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#FEE500] text-black font-bold text-lg px-8 py-4 rounded-xl w-full justify-center hover:bg-black hover:text-white transition-colors">
              <MessageCircle size={24}/> 카카오톡 빠른 상담
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 text-white p-2 bg-white/10 rounded-full hover:bg-white hover:text-black transition-colors"><X size={24}/></button>
            <div className="w-full max-w-[400px] h-[85vh] rounded-[3rem] border-[8px] border-white bg-white p-2 shadow-2xl flex flex-col">
              <div className="w-full h-full overflow-y-auto phone-scroll rounded-[2.5rem] bg-gray-50">
                <div className="p-8 text-center bg-white border-b border-gray-100">
                  <p className="text-xs font-bold text-gray-500 mb-2">{selectedProject.category}</p>
                  <h2 className="text-2xl font-bold text-black">{selectedProject.title}</h2>
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
