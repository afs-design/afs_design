import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowRight, X } from 'lucide-react';
import { projects } from '../data';

export default function Theme1() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#333333] font-sans overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-serif font-bold tracking-tight text-[#333333]">At First Sight.</h1>
          <a href="#contact" className="text-sm font-medium bg-[#D4A373] text-white px-5 py-2 rounded-full hover:bg-[#c29262] transition-colors">프로젝트 문의</a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 min-h-[80vh] flex flex-col justify-center items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight mb-6 leading-tight text-[#222222]">
            당신의 브랜드에<br/>
            <span className="italic text-[#D4A373]">따뜻한 숨결</span>을 불어넣습니다.
          </h2>
          <p className="text-lg text-gray-500 font-light mb-10 leading-relaxed">
            단순히 보기 좋은 디자인을 넘어, 고객의 마음을 움직이고<br className="hidden md:block"/>
            신뢰를 쌓아가는 진정성 있는 포트폴리오를 만듭니다.
          </p>
          <a href="#portfolio" className="inline-flex items-center gap-2 text-[#D4A373] font-medium hover:gap-4 transition-all">
            작업물 살펴보기 <ArrowRight size={20}/>
          </a>
        </motion.div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-serif text-center mb-16 text-[#222222]">Our Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((p, i) => (
              <motion.div 
                key={p.id} 
                onClick={() => setSelectedProject(p)} 
                className="cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 bg-gray-100">
                  <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur-sm text-[#333333] px-6 py-3 rounded-full text-sm font-medium tracking-wide">자세히 보기</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-xs font-medium text-[#D4A373] mb-2 uppercase tracking-widest">{p.category}</p>
                  <h4 className="text-xl font-serif text-[#222222]">{p.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-serif mb-6 text-[#222222]">함께 이야기 나누고 싶습니다.</h3>
          <p className="text-gray-500 font-light mb-10">
            프로젝트에 대한 고민이 있으신가요?<br/>
            편하게 연락 주시면 정성껏 답변해 드리겠습니다.
          </p>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-2xl font-serif mb-8 text-[#D4A373]">afs_info@naver.com</p>
            <a href="https://pf.kakao.com/_xnBYVn" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#FEE500] text-black font-medium text-lg px-8 py-4 rounded-xl w-full hover:bg-[#F4DC00] transition-colors">
              <MessageCircle size={24}/> 카카오톡으로 편하게 문의하기
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 md:p-8"
          >
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 p-3 bg-white rounded-full text-gray-800 hover:bg-gray-100 shadow-lg transition-colors z-[110]"><X size={24}/></button>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-[400px] h-[85vh] bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col border-8 border-white relative"
            >
              <div className="w-full h-full overflow-y-auto phone-scroll bg-gray-50 rounded-[32px]">
                <div className="p-8 text-center bg-white border-b border-gray-100">
                  <p className="text-xs font-medium text-[#D4A373] mb-2 uppercase tracking-widest">{selectedProject.category}</p>
                  <h2 className="text-2xl font-serif text-[#222222]">{selectedProject.title}</h2>
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
