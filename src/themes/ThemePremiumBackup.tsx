import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowRight, X, Zap, TrendingUp, Target, Layout, Star, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: '오가닉 뷰티 브랜드',
    category: '상세페이지 기획 + 디자인',
    coverImage: 'https://picsum.photos/seed/beauty1/400/800',
    details: [
      'https://picsum.photos/seed/beauty_detail1/800/1200',
      'https://picsum.photos/seed/beauty_detail2/800/1200',
    ],
  },
  {
    id: 2,
    title: '프리미엄 디저트 카페',
    category: 'AI 홈페이지 제작',
    coverImage: 'https://picsum.photos/seed/cafe1/400/800',
    details: [
      'https://picsum.photos/seed/cafe_detail1/800/1200',
      'https://picsum.photos/seed/cafe_detail2/800/1200',
    ],
  },
  {
    id: 3,
    title: '라이프스타일 편집숍',
    category: '상세페이지 기획 + 디자인',
    coverImage: 'https://picsum.photos/seed/shop1/400/800',
    details: [
      'https://picsum.photos/seed/shop_detail1/800/1200',
      'https://picsum.photos/seed/shop_detail2/800/1200',
    ],
  },
];

const processSteps = [
  { num: '01', title: '상담 접수', desc: '프로젝트 목표 및 타겟 확인' },
  { num: '02', title: '브랜드 분석', desc: '시장 조사 및 경쟁사 분석' },
  { num: '03', title: '구조 기획안', desc: '전환율 중심의 와이어프레임 설계' },
  { num: '04', title: '디자인 제작', desc: '시각적 매력과 가독성 극대화' },
  { num: '05', title: '수정 및 보완', desc: '피드백 반영 및 디테일 최적화' },
  { num: '06', title: '최종 납품', desc: '완성된 결과물 및 원본 전달' },
];

export default function ThemePremiumBackup() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert('문의 접수에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error(error);
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="bg-grid absolute inset-0 opacity-40"></div>
        <div className="bg-glow-purple top-[-20%] left-[-10%]"></div>
        <div className="bg-glow-blue bottom-[-20%] right-[-10%]"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-40 glass-nav">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600"></div>
            엣 퍼스트 사이트
          </h1>
          <a 
            href="#contact" 
            className="text-sm font-medium tracking-wide bg-white/10 text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 border border-white/10"
          >
            프로젝트 문의
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 min-h-[90vh] flex flex-col justify-center items-center text-center">
        <div className="container mx-auto max-w-5xl relative px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-zinc-300 mb-8 font-medium text-sm tracking-wide border border-white/10">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span>Conversion-Focused Design</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-[90px] font-bold tracking-tighter leading-[1.1] mb-8 text-white break-keep">
              예쁜 쓰레기는 그만.<br />
              <span className="text-gradient-accent">매출을 끌어올리는</span><br />
              진짜 디자인.
            </h2>
            
            <p className="text-lg md:text-2xl text-zinc-400 font-medium max-w-3xl leading-relaxed mb-12 break-keep">
              단순히 보기 좋은 디자인은 고객을 머물게 할 수 없습니다.<br className="hidden md:block" />
              우리는 고객의 시선을 사로잡고 <span className="text-white">구매로 직결되는 최적의 구조</span>를 설계합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio" className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300">
                결과물 확인하기
                <ArrowRight size={20} />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 glass-panel text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-300">
                무료 상담 신청
              </a>
            </div>
          </motion.div>
        </div>

        {/* Marquee Banner */}
        <div className="w-full relative z-10 marquee-container font-medium text-xl md:text-2xl tracking-wide uppercase text-zinc-500 py-6 border-y border-white/5 bg-white/[0.01]">
          <div className="marquee-content">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="mx-8 flex items-center gap-16">
                <span className="flex items-center gap-3"><TrendingUp size={24} className="text-indigo-500"/> 전환율 300% 상승</span>
                <span className="flex items-center gap-3"><Target size={24} className="text-purple-500"/> 이탈률 50% 감소</span>
                <span className="flex items-center gap-3"><Layout size={24} className="text-blue-500"/> 체류시간 2배 증가</span>
                <span className="flex items-center gap-3"><Star size={24} className="text-indigo-400"/> 압도적인 시각적 경험</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative z-10 py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">포트폴리오</h3>
              <p className="text-zinc-400 font-medium text-xl">
                결과로 증명합니다. 핸드폰을 클릭하여 상세 내용을 확인하세요.
              </p>
            </div>
            <div className="text-right">
              <span className="text-gradient-accent font-bold text-6xl leading-none opacity-50">03</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="flex flex-col items-center cursor-pointer group"
              >
                {/* Sleek Phone Mockup Container */}
                <motion.div 
                  layoutId={`phone-frame-${project.id}`}
                  className="relative w-[300px] h-[600px] rounded-[3rem] border-[8px] border-zinc-800 bg-black p-2 shadow-2xl group-hover:border-zinc-700 transition-colors duration-500"
                >
                  {/* Screen */}
                  <motion.div layoutId={`phone-screen-${project.id}`} className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-zinc-900">
                    {/* Dynamic Island / Notch Hint */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30"></div>
                    
                    <img 
                      src={project.coverImage} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-center">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-xs font-semibold tracking-widest text-indigo-400 mb-3 uppercase">
                          {project.category}
                        </p>
                        <h4 className="text-2xl font-bold mb-6 text-white break-keep">
                          {project.title}
                        </h4>
                        <div className="w-12 h-12 mx-auto rounded-full bg-white text-black flex items-center justify-center">
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Title Below Mockup */}
                <div className="mt-8 text-center w-full">
                  <h4 className="text-xl font-semibold tracking-tight text-white group-hover:text-indigo-400 transition-colors">{project.title}</h4>
                  <p className="text-sm font-medium mt-1 text-zinc-500 uppercase">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section (Bento Grid) */}
      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">차별점</h3>
            <p className="text-xl font-medium text-zinc-400 max-w-3xl">
              우리가 다를 수밖에 없는 4가지 이유.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: '첫 3초를 잡는 카피 설계', desc: '고객의 이탈을 막는 강력한 도입부 후킹 메시지를 기획합니다. 시선을 사로잡는 첫인상이 구매를 결정합니다.' },
              { title: 'AI + 마케팅 경험', desc: '최신 AI 기술과 다년간의 마케팅 노하우를 결합한 최적의 결과물을 제공합니다.' },
              { title: '감성 + 데이터 균형', desc: '브랜드의 감성을 잃지 않으면서도 전환율 데이터를 고려한 디자인을 설계합니다.' },
              { title: '예쁜 것보다 팔리는 구조', desc: '단순한 시각적 아름다움을 넘어, 구매 여정을 고려한 UX/UI 설계로 실제 비즈니스 성장을 돕습니다.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-10 rounded-[2rem] hover:bg-white/[0.05] transition-colors duration-300 group"
              >
                <div className="text-4xl font-bold text-zinc-800 group-hover:text-indigo-500/50 mb-6 transition-colors duration-300">
                  0{idx + 1}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white">{item.title}</h4>
                <p className="font-medium text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 py-32 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">작업 프로세스</h3>
            <p className="text-indigo-400 font-medium text-xl">
              무작정 디자인하지 않습니다. 먼저 구조를 설계합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-3xl hover:border-indigo-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
                    STEP {step.num}
                  </div>
                  <ChevronRight className="text-zinc-600 group-hover:text-indigo-400 transition-colors" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{step.title}</h4>
                <p className="font-medium text-zinc-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative z-10 py-32 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">고객 후기</h3>
            <p className="font-medium text-xl text-zinc-400">엣 퍼스트 사이트와 함께한 고객님들의 실제 성과입니다.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-12 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex text-indigo-400 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" strokeWidth={0} />)}
                </div>
                <p className="text-3xl font-bold mb-6 leading-tight text-white">"매출이 2배 올랐어요!"</p>
                <p className="font-medium leading-relaxed text-lg text-zinc-400">
                  디자인만 바꿨을 뿐인데 고객들의 체류 시간이 길어지고, 실제 구매 전환율이 눈에 띄게 상승했습니다. 구조 기획의 중요성을 깨달았어요.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-12 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex text-indigo-400 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" strokeWidth={0} />)}
                </div>
                <p className="text-3xl font-bold mb-6 leading-tight text-white">"상세페이지가 달라지니<br/>반응이 달라졌어요"</p>
                <p className="font-medium leading-relaxed text-lg text-zinc-400">
                  이전에는 예쁘기만 한 페이지였다면, 지금은 고객이 무엇을 원하는지 정확히 짚어주는 페이지가 되었습니다. 문의량부터가 다릅니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="relative z-10 py-32 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">프로젝트 문의</h3>
              <p className="text-gradient-accent font-medium text-2xl leading-relaxed">
                지금 바로 비즈니스의<br />
                전환점을 만들어보세요.
              </p>
            </div>

            <div className="glass-panel p-10 rounded-[2rem] space-y-8">
              <div>
                <h4 className="font-bold text-sm tracking-widest text-zinc-500 mb-4 uppercase">고객 센터</h4>
                <p className="text-3xl font-bold text-white">afs_info@naver.com</p>
                <p className="text-base font-medium mt-3 text-zinc-400">(평일 오전 9:00~18:00, 주말 및 공휴일 휴무)</p>
              </div>

              <a 
                href="https://pf.kakao.com/_xnBYVn" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full bg-[#FEE500] text-[#0a0a0a] font-bold text-lg py-4 rounded-xl hover:bg-white transition-colors duration-300"
              >
                <MessageCircle size={20} />
                카카오톡 빠른 상담
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-[2.5rem]"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">성함/직책 *</label>
                  <input name="name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-zinc-600" placeholder="홍길동 / 대표" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">회사명 *</label>
                  <input name="company" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-zinc-600" placeholder="회사명을 입력해주세요" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">이메일 *</label>
                  <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-zinc-600" placeholder="example@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">연락처 *</label>
                  <input name="phone" required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-zinc-600" placeholder="010-0000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">관심있는 패키지 *</label>
                <select name="package" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all appearance-none">
                  <option value="" className="bg-zinc-900">선택해주세요</option>
                  <option value="1. 상세페이지 기획+디자인" className="bg-zinc-900">1. 상세페이지 기획+디자인</option>
                  <option value="2. AI홈페이지 제작" className="bg-zinc-900">2. AI홈페이지 제작</option>
                  <option value="3. AI이미지 제작" className="bg-zinc-900">3. AI이미지 제작</option>
                  <option value="4. AI제품 영상제작" className="bg-zinc-900">4. AI제품 영상제작</option>
                  <option value="5. 로고 디자인" className="bg-zinc-900">5. 로고 디자인</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">진행하시는 제품 또는 서비스 *</label>
                <textarea name="description" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-zinc-600 resize-none" placeholder="간략히 알려주세요."></textarea>
              </div>

              {submitSuccess && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center font-medium">
                  성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.
                </div>
              )}

              <button disabled={isSubmitting} type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-colors duration-300 mt-4 flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? '접수 중...' : '무료 상담 신청하기'}
                {!isSubmitting && <ArrowRight size={20} />}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm font-medium text-zinc-500 border-t border-white/5">
        <p>© {new Date().getFullYear()} 엣 퍼스트 사이트. ALL RIGHTS RESERVED.</p>
      </footer>

      {/* Full Screen Project Modal - Sleek Style */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 md:p-8"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-[110] p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <X size={24} />
            </button>

            {/* The Sleek Phone Mockup Modal */}
            <motion.div
              layoutId={`phone-frame-${selectedProject.id}`}
              className="relative w-full max-w-[400px] h-[85vh] md:h-[90vh] rounded-[3rem] border-[8px] border-zinc-800 bg-black p-2 shadow-2xl flex flex-col"
            >
              {/* Scrollable Screen Inside Phone */}
              <motion.div layoutId={`phone-screen-${selectedProject.id}`} className="w-full h-full overflow-y-auto phone-scroll bg-zinc-950 rounded-[2.5rem] relative">
                
                {/* Dynamic Island / Notch Hint (Modal) */}
                <div className="sticky top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 mx-auto mb-[-24px]"></div>

                {/* Header inside phone */}
                <div className="pt-16 pb-8 px-8 text-center bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-white/5">
                  <p className="text-xs font-semibold tracking-widest text-indigo-400 mb-2 uppercase">
                    {selectedProject.category}
                  </p>
                  <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                </div>

                {/* Cover Image */}
                <img 
                  src={selectedProject.coverImage} 
                  alt={`${selectedProject.title} cover`}
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Detail Images */}
                <div className="flex flex-col">
                  {selectedProject.details.map((imgSrc, idx) => (
                    <img 
                      key={idx}
                      src={imgSrc} 
                      alt={`${selectedProject.title} detail ${idx + 1}`}
                      className="w-full h-auto object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>

                {/* Footer inside phone */}
                <div className="p-8 text-center bg-zinc-950 border-t border-white/5">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm hover:bg-zinc-200 transition-colors duration-300 w-full"
                  >
                    닫기
                  </button>
                </div>

              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
