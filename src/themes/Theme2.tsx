import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { projects, processSteps } from '../data';

export default function Theme2() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-blue-600 uppercase">At First Sight</h1>
          <a href="#contact" className="text-sm font-semibold bg-blue-600 text-white px-6 py-2.5 rounded hover:bg-blue-700 transition-colors">프로젝트 문의</a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 min-h-[80vh] flex flex-col justify-center items-center text-center bg-gray-50">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-8">
            <CheckCircle2 size={16} /> 검증된 포트폴리오 에이전시
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-gray-900">
            신뢰를 구축하는<br/>
            <span className="text-blue-600">전문적인 디자인</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium mb-10 leading-relaxed max-w-2xl mx-auto">
            데이터와 사용자 경험에 기반한 체계적인 디자인 프로세스로<br className="hidden md:block"/>
            비즈니스의 성장을 돕는 최적의 결과물을 제공합니다.
          </p>
          <a href="#portfolio" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold text-lg px-8 py-4 rounded hover:bg-blue-700 transition-colors">
            포트폴리오 보기 <ArrowRight size={20}/>
          </a>
        </motion.div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-16 text-gray-900">체계적인 작업 프로세스</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-lg hover:border-blue-600 transition-colors">
                <div className="text-4xl font-black text-blue-100 mb-4">{step.num}</div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-16 text-gray-900">주요 프로젝트</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <motion.div 
                key={p.id} 
                onClick={() => setSelectedProject(p)} 
                className="cursor-pointer group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                  <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <p className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-wide">{p.category}</p>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{p.title}</h4>
                  <p className="text-gray-500 text-sm">자세히 보기 &rarr;</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 bg-blue-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-4xl font-bold mb-6">성공적인 프로젝트를 시작하세요</h3>
          <p className="text-blue-100 text-lg mb-12">
            귀사의 비즈니스 목표 달성을 위한 최적의 디자인 파트너가 되어드리겠습니다.
          </p>
          <div className="bg-white p-10 rounded-xl shadow-lg text-gray-900">
            <p className="text-2xl font-bold mb-8 text-blue-600">afs_info@naver.com</p>
            <a href="https://pf.kakao.com/_xnBYVn" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#FEE500] text-black font-bold text-lg px-8 py-4 rounded w-full hover:bg-[#F4DC00] transition-colors">
              <MessageCircle size={24}/> 카카오톡 빠른 상담
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/80 backdrop-blur-sm p-4 md:p-8"
          >
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 shadow-lg transition-colors z-[110]"><X size={24}/></button>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-[400px] h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-200 relative"
            >
              <div className="w-full h-full overflow-y-auto phone-scroll bg-gray-50">
                <div className="p-8 border-b border-gray-200 bg-white sticky top-0 z-10">
                  <p className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">{selectedProject.category}</p>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                </div>
                <img src={selectedProject.coverImage} className="w-full h-auto" referrerPolicy="no-referrer" />
                {selectedProject.details.map((img, i) => <img key={i} src={img} className="w-full h-auto border-t border-gray-200" referrerPolicy="no-referrer" />)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
