import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { MessageCircle, ArrowRight, X, Zap, TrendingUp, Target, Layout, Star, ChevronRight, Mail, Download } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

/* BACKUP: 포트폴리오 캡션 원본 시작
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
BACKUP: 포트폴리오 캡션 원본 끝 */

const projects = [
  {
    id: 1,
    title: '푸드 상세페이지',
    category: '상세페이지 기획 + 디자인',
    coverImage: '/file/page_1.png',
    details: Array.from({ length: 26 }, (_, i) => {
      const pageNum = i + 2;
      const ext = pageNum === 2 ? 'gif' : 'png';
      return `/file/page_${pageNum}.${ext}`;
    }),
  },
  {
    id: 2,
    title: '디지털 기기 상세페이지',
    category: '상세페이지 기획 + 디자인',
    coverImage: '/digital/digital_01.png',
    details: [
      '/digital/digital_02.png',
      '/digital/digital_03.png',
      '/qr.png',
      '/digital/digital_05.png',
      '/digital/digital_06.png',
      '/digital/digital_07.png',
      '/digital/digital_08.png',
      '/digital/digital_09.png',
      '/digital/digital_10.png',
      '/digital/digital_11.png',
      '/digital/digital_12.png',
      '/digital/digital_13.png',
      '/digital/digital_14.png',
      '/digital/digital_15.png',
      '/digital/digital_16.png',
      '/digital/digital_17.png',
      '/digital/digital_18.png',
      '/digital/digital_19.png',
      '/digital/digital_20.png',
      '/digital/digital_21.png',
      '/digital/digital_22.png',
    ],
  },
  {
    id: 3,
    title: '리빙 상세페이지',
    category: '상세페이지 기획 + 디자인',
    coverImage: '/living/living_2.png',
    details: [
      '/living/living_1.png',
      '/living/living_2.png',
      '/living/living_3.png',
      '/living/living_4.png',
      '/living/living_5.gif',
      '/living/living_6.png',
      '/living/living_7.png',
      '/living/living_8.png',
      '/living/living_9.png',
      '/living/living_10.png',
      '/living/living_11.png',
      '/living/living_12.png',
      '/living/living_13.png',
      '/living/living_14.png',
      '/living/living_15.png',
      '/living/living_16.png',
      '/living/living_17.gif',
      '/living/living_18.png',
      '/living/living_19.png',
      '/living/living_20.png',
      '/living/living_21.png',
      '/living/living_22.png',
      '/living/living_23.png',
      '/living/living_24.png',
      '/living/living_25.png',
      '/living/living_26.png',
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

export default function ThemePremium() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [selectedDetailMockup, setSelectedDetailMockup] = useState<{id: number, title: string, category: string, image: string} | null>(null);

  const [shimmerReady, setShimmerReady] = useState(false);

  /* BACKUP_20260316_스토리텔링_재구현_시작
  // Storytelling scroll hooks
  const storyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start start", "end end"]
  });

  // Step 1: 0 to 0.30
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.25, 0.30], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.05, 0.25, 0.30], [40, 0, 0, -40]);

  // Step 2: 0.30 to 0.65
  const opacity2 = useTransform(scrollYProgress, [0.30, 0.35, 0.60, 0.65], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.30, 0.35, 0.60, 0.65], [40, 0, 0, -40]);

  // Step 3: 0.65 to 1.0
  const opacity3 = useTransform(scrollYProgress, [0.65, 0.70, 1], [0, 1, 1]);
  const y3 = useTransform(scrollYProgress, [0.65, 0.70, 1], [40, 0, 0]);
  
  // Scroll hint opacity
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // Dot indicators
  const dot1Color = useTransform(scrollYProgress, [0, 0.30, 0.31], ["#a855f7", "#a855f7", "#3f3f46"]);
  const dot1Shadow = useTransform(scrollYProgress, [0, 0.30, 0.31], ["0 0 8px rgba(168,85,247,0.8)", "0 0 8px rgba(168,85,247,0.8)", "none"]);

  const dot2Color = useTransform(scrollYProgress, [0.29, 0.30, 0.65, 0.66], ["#3f3f46", "#a855f7", "#a855f7", "#3f3f46"]);
  const dot2Shadow = useTransform(scrollYProgress, [0.29, 0.30, 0.65, 0.66], ["none", "0 0 8px rgba(168,85,247,0.8)", "0 0 8px rgba(168,85,247,0.8)", "none"]);

  const dot3Color = useTransform(scrollYProgress, [0.64, 0.65, 1], ["#3f3f46", "#a855f7", "#a855f7"]);
  const dot3Shadow = useTransform(scrollYProgress, [0.64, 0.65, 1], ["none", "0 0 8px rgba(168,85,247,0.8)", "0 0 8px rgba(168,85,247,0.8)"]);
  BACKUP 끝 */

  // 새 스토리텔링 로직
  const [storyStage, setStoryStage] = useState(-1);

  useEffect(() => {
    const updateCards = () => {
      const container = document.querySelector('.story-container') as HTMLElement;
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const scrollInContainer = -rect.top;
      const totalScroll = container.offsetHeight - window.innerHeight;
      
      if (scrollInContainer < 0) {
        setStoryStage(-1);
        return;
      }
      if (scrollInContainer > totalScroll) {
        setStoryStage(3);
        return;
      }

      const progress = Math.max(0, Math.min(1, scrollInContainer / totalScroll));

      if (progress < 0.33) {
        setStoryStage(0);
      } else if (progress < 0.66) {
        setStoryStage(1);
      } else {
        setStoryStage(2);
      }
    };

    window.addEventListener('scroll', updateCards);
    updateCards(); // 초기 호출
    return () => window.removeEventListener('scroll', updateCards);
  }, []);

  const blurVariants = {
    hidden: { filter: 'blur(12px)', opacity: 0 },
    visible: (custom: number) => ({
      filter: 'blur(0px)',
      opacity: 1,
      transition: {
        delay: custom * 0.3,
        duration: 0.8,
        ease: 'easeOut'
      }
    })
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
        {/* BACKUP_20260316_파란색_글로우_삭제 시작
        <div className="bg-glow-blue bottom-[-20%] right-[-10%]"></div>
        BACKUP 끝 */}
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-nav">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600"></div>
            엣 퍼스트 사이트
          </h1>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            {/* BACKUP_20260324_NAV_수정_시작
            <a href="#" className="hover:text-white transition-colors">홈</a>
            <a href="#brand-story" className="hover:text-white transition-colors">BRAND STORY</a>
            <a href="#detail-portfolio" className="hover:text-white transition-colors">상세페이지 포트폴리오</a>
            BACKUP_20260324_NAV_수정_끝 */}
            <a href="#" className="hover:text-white transition-colors">홈</a>
            <a href="#brand-story" className="hover:text-white transition-colors">BRAND STORY</a>
            <a href="#detail-portfolio" className="hover:text-white transition-colors">상세페이지 포트폴리오</a>
            <a href="#why-us" className="hover:text-white transition-colors">WHY US</a>
          </nav>

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
              <span>AT FIRST SIGHT DESIGN</span>
            </div>
            
            {/* BACKUP_20260318_히어로_문구_수정_시작
            <h2 className="text-4xl md:text-6xl lg:text-[80px] font-bold tracking-tighter leading-[1.2] mb-8 text-white break-keep">
              브랜드와 제품의 가치를<br />
              <span className="text-gradient-accent">구매로 이어지게 설계합니다.</span>
            </h2>
            
            <p className="text-base md:text-xl text-zinc-400 font-medium leading-relaxed mb-12 mx-auto">
              <span className="block md:inline">AT FIRST SIGHT는 AI 기반 분석으로</span>
              <span className="block md:inline md:ml-1">시장과 고객의 반응을 읽고,</span><br className="hidden md:block" />
              <span className="block md:inline">제품의 가치가 자연스럽게 구매로 이어지도록</span>
              <span className="block md:inline md:ml-1">홈페이지와 상세페이지를 만듭니다.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#detail-portfolio" className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300">
                결과물 확인하기
                <ArrowRight size={20} />
              </a>
            BACKUP 끝 */}
            <h2 className="text-[50px] md:text-[90px] font-bold tracking-tighter leading-[1.3] lg:leading-[1.2] text-white break-keep px-4 sm:px-0 text-center">
              {/* PC View */}
              <span className="hidden md:block">
                브랜드의 첫인상을<br />
                <span className="text-gradient-accent">설계합니다.</span>
              </span>
              {/* Mobile View */}
              <span className="block md:hidden">
                브랜드의<br />
                첫인상을<br />
                <span className="text-gradient-accent">설계합니다.</span>
              </span>
            </h2>
            
            <p className="text-[16px] md:text-[24px] text-[#aaa] font-medium leading-[1.6] mb-12 mx-auto break-keep px-4 sm:px-0 mt-[24px] md:mt-[28px] tracking-[0.5px] text-center">
              상세페이지 · 홈페이지<br />
              기획부터 디자인까지
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* BACKUP: <a href="#portfolio" className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300"> */}
              <a href="#detail-portfolio" className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300">
                포트폴리오 보기
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

      {/* Brand Story Section */}
      <section id="brand-story" className="relative z-10 pt-32 pb-16 overflow-hidden">
        <ParticleBackground />
        <div className="container mx-auto max-w-4xl text-center relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <motion.h3 
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={blurVariants}
              className="text-2xl md:text-3xl font-bold text-white mb-12 tracking-widest"
            >
              BRAND STORY
            </motion.h3>
            
            {/* Desktop Version */}
            <div className="brand-story-desktop hidden md:block space-y-12">
              <motion.p custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={blurVariants} className="text-lg md:text-2xl text-zinc-300 leading-relaxed break-keep">
                AT FIRST SIGHT는 '첫눈에 반하다'라는 뜻을 담고 있습니다.
              </motion.p>
              
              <motion.p custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={blurVariants} className="text-lg md:text-2xl text-zinc-300 leading-relaxed break-keep">
                SIGHT와 SITE의 닮은 울림에는<br />
                브랜드를 처음 마주하는 인상과<br />
                그 브랜드가 머무는 공간이라는 의미를 함께 담았습니다.
              </motion.p>
            </div>

            {/* Mobile Version */}
            <div className="brand-story-mobile block md:hidden space-y-8 px-5">
              <motion.p custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={blurVariants} className="text-[14px] sm:text-[15px] text-zinc-300 leading-relaxed break-keep">
                AT FIRST SIGHT는<br />
                '첫눈에 반하다'라는 뜻입니다.
              </motion.p>
              
              <motion.p custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={blurVariants} className="text-[14px] sm:text-[15px] text-zinc-300 leading-relaxed break-keep">
                SIGHT와 SITE의 닮은 울림에<br />
                브랜드의 인상과 공간을 담았습니다.
              </motion.p>
            </div>

            {/* Shared Last 2 Lines */}
            <motion.div 
              custom={3} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={blurVariants} 
              onAnimationComplete={() => setShimmerReady(true)}
              className="mt-12 md:mt-16"
            >
              <p className={`text-[18px] sm:text-[20px] md:text-3xl font-bold leading-relaxed break-keep ${shimmerReady ? 'shimmer-text' : 'text-white'}`}>
                첫눈에 각인되는 상세페이지와 홈페이지<br />
                AT FIRST SIGHT가 만듭니다.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BACKUP_20260312_상세페이지섹션추가_최종 시작
      {/* Divider *}
      <div className="w-full py-24">
        <div className="w-full h-px bg-[#2a2a2a]"></div>
      </div>
      BACKUP 끝 */}

      {/* Divider */}
      <div className="w-full py-24">
        <div className="w-full h-[1px] bg-[#2a2a2a]"></div>
      </div>

      {/* BACKUP_20260313_상세페이지_스토리텔링 시작
      <section id="detail-page" className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 flex flex-col md:flex-row md:items-start justify-between gap-6"
          >
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-zinc-300 mb-6 font-medium text-sm tracking-wide border border-white/10">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                <span>DETAIL PAGE</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">상세페이지 제작</h3>
              
              <div className="detail-body-desktop hidden md:block text-zinc-400 text-lg md:text-xl leading-relaxed break-keep max-w-3xl">
                <p className="mb-8">
                  지금 이 순간에도 제품은 팔리고 있습니다.<br/>
                  차이는 제품 자체보다 어떻게 보여지고, 어떻게 설득되는지에서 시작될 수 있습니다.
                </p>
                <p className="mb-8">
                  브랜드를 운영하는 일은<br/>
                  생각보다 훨씬 많은 일을 동시에 요구합니다.
                </p>
                <p className="mb-8">
                  제품 준비부터 판매, 운영, 응대, 마케팅까지<br/>
                  모든 과정을 혼자 감당해야 하는 분들도 많습니다.
                </p>
                <p className="mb-8">
                  상세페이지를 직접 완성하려다 보면 정작 더 중요한 운영과 판매에 집중하기 어려워질 수 있습니다.
                </p>
                <p className="text-white font-medium">
                  AT FIRST SIGHT는 보여지는 영역을 정리해<br/>
                  대표님의 시간과 에너지가 더 필요한 곳에 쓰일 수 있도록 돕습니다.
                </p>
              </div>

              <div className="detail-body-mobile block md:hidden text-zinc-400 text-[14px] sm:text-[15px] leading-loose break-keep">
                지금 이 순간에도 제품은 팔리고 있습니다.<br/>
                차이는 제품 자체보다, 어떻게 보여지고<br/>
                어떻게 설득되는지에서 시작될 수 있습니다.<br/>
                브랜드를 운영하는 일은 생각보다<br/>
                훨씬 많은 일을 동시에 요구합니다.<br/>
                제품 준비부터 판매, 운영, 응대, 마케팅까지<br/>
                모든 과정을 혼자 감당해야 하는 분들도 많습니다.<br/>
                상세페이지를 직접 완성하려다 보면<br/>
                정작 더 중요한 운영과 판매에 집중하기 어려워질 수 있습니다.<br/>
                <span className="text-white font-medium">
                  AT FIRST SIGHT는 보여지는 영역을 정리해<br/>
                  대표님의 시간과 에너지가 더 필요한 곳에 쓰일 수 있도록 돕습니다.
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-gradient-accent font-bold text-6xl leading-none opacity-50">02</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { id: 1, title: '식품 브랜드', category: '상세페이지 기획 + 디자인', image: 'https://picsum.photos/seed/detail1/400/1200' },
              { id: 2, title: '전자기기', category: '상세페이지 기획 + 디자인', image: 'https://picsum.photos/seed/detail2/400/1200' },
              { id: 3, title: '리빙 브랜드', category: '상세페이지 기획 + 디자인', image: 'https://picsum.photos/seed/detail3/400/1200' }
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedDetailMockup(item)}
                className="flex flex-col items-center cursor-pointer group"
              >
                <motion.div 
                  layoutId={`detail-phone-frame-${item.id}`}
                  className="relative w-[300px] h-[600px] rounded-[3rem] border-[8px] border-zinc-800 bg-black p-2 shadow-2xl group-hover:border-zinc-700 transition-colors duration-500"
                >
                  <motion.div layoutId={`detail-phone-screen-${item.id}`} className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-zinc-900">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-800 rounded-full z-[999] z-30"></div>
                    
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-center">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-xs font-semibold tracking-widest text-indigo-400 mb-3 uppercase">
                          {item.category}
                        </p>
                        <h4 className="text-2xl font-bold mb-6 text-white break-keep">
                          {item.title}
                        </h4>
                        <div className="w-12 h-12 mx-auto rounded-full bg-white text-black flex items-center justify-center">
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                
                <div className="mt-8 text-center w-full hidden md:block">
                  <h4 className="text-xl font-semibold tracking-tight text-white group-hover:text-indigo-400 transition-colors">{item.title}</h4>
                  <p className="text-sm font-medium mt-1 text-zinc-500 uppercase">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      BACKUP 끝 */}

      {/* BACKUP_20260313_상세페이지_반응형_글씨크기_수정 시작
      <section id="detail-page" className="relative z-10 w-full" ref={storyRef} style={{ height: '300vh' }}>
        <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center px-6">
          
          <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
            <ParticleBackground />
          </div>

          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
            <motion.div style={{ opacity: dot1Opacity }} className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
            <motion.div style={{ opacity: dot2Opacity }} className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
            <motion.div style={{ opacity: dot3Opacity }} className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
          </div>

          <motion.div style={{ opacity: scrollHintOpacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 z-20">
            <span className="text-xs tracking-[0.2em] font-medium">SCROLL</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4 rotate-90" />
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ opacity: opacity1, y: y1 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6 md:px-24"
          >
            <div className="mb-8">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-purple-300">
                <circle cx="12" cy="4" r="2" />
                <path d="M12 7c-2.76 0-5 2.24-5 5v4h2v6h6v-6h2v-4c0-2.76-2.24-5-5-5z" />
              </svg>
            </div>
            <h3 className="text-[26px] md:text-[36px] font-black text-white mb-6 leading-tight break-keep">
              지금 이 순간에도<br/>제품은 팔리고 있습니다
            </h3>
            <div className="text-[14px] md:text-[15px] font-light text-white/50 leading-relaxed break-keep">
              <p className="mb-4">
                차이는 제품 자체보다,<br/>
                어떻게 보여지고 어떻게 설득되는지에서<br/>
                시작될 수 있습니다.
              </p>
              <p>
                브랜드를 운영하는 일은 생각보다<br/>
                훨씬 많은 일을 동시에 요구합니다.
              </p>
            </div>
          </motion.div>

          <motion.div 
            style={{ opacity: opacity2, y: y2 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6 md:px-24 pointer-events-none"
          >
            <div className="mb-8 relative flex flex-col items-center">
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="2" className="mb-2 text-red-500">
                <rect x="2" y="2" width="18" height="8" rx="1" />
                <path d="M20 4v4" />
                <rect x="4" y="4" width="2" height="4" fill="currentColor" stroke="none" />
              </svg>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-purple-800" style={{ transform: 'rotate(15deg) translateY(4px)' }}>
                <circle cx="12" cy="4" r="2" />
                <path d="M12 7c-2.76 0-5 2.24-5 5v4h2v6h6v-6h2v-4c0-2.76-2.24-5-5-5z" />
              </svg>
            </div>
            <h3 className="text-[26px] md:text-[36px] font-black text-white mb-6 leading-tight break-keep">
              혼자 감당해야 할 것들이<br/>너무 많습니다
            </h3>
            <div className="text-[14px] md:text-[15px] font-light text-white/50 leading-relaxed break-keep">
              <p className="mb-4">
                제품 준비부터 판매, 운영, 응대, 마케팅까지<br/>
                모든 과정을 혼자 감당해야 하는 분들도 많습니다.
              </p>
              <p>
                상세페이지를 직접 완성하려다 보면<br/>
                정작 더 중요한 운영과 판매에<br/>
                집중하기 어려워질 수 있습니다.
              </p>
            </div>
          </motion.div>

          <motion.div 
            style={{ opacity: opacity3, y: y3 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6 md:px-24 pointer-events-none"
          >
            <div className="mb-8">
              <svg width="96" height="64" viewBox="0 0 36 24" fill="currentColor" className="text-purple-400 drop-shadow-[0_0_15px_rgba(167,139,250,0.6)]">
                <circle cx="12" cy="4" r="2" />
                <path d="M12 7c-2.76 0-5 2.24-5 5v4h2v6h6v-6h2v-4c0-2.76-2.24-5-5-5z" />
                <circle cx="24" cy="4" r="2" />
                <path d="M24 7c-2.76 0-5 2.24-5 5v4h2v6h6v-6h2v-4c0-2.76-2.24-5-5-5z" />
              </svg>
            </div>
            <h3 className="text-[26px] md:text-[36px] font-black mb-6 leading-tight break-keep" style={{
              background: 'linear-gradient(90deg, #fff 0%, #fff 35%, #c4b5fd 45%, #a78bfa 50%, #c4b5fd 55%, #fff 65%, #fff 100%)',
              backgroundSize: '250% 100%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 3s ease-in-out infinite'
            }}>
              보여지는 영역은<br/>저희가 정리하겠습니다
            </h3>
            <div className="text-[14px] md:text-[15px] font-light text-white/50 leading-relaxed break-keep">
              <p>
                AT FIRST SIGHT는 보여지는 영역을 정리해<br/>
                대표님의 시간과 에너지가<br/>
                더 필요한 곳에 쓰일 수 있도록 돕습니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      BACKUP 끝 */}

      {/* BACKUP_20260316_스토리텔링_높이_및_도트삭제 시작
      <section id="detail-page" className="relative z-10 w-full" ref={storyRef} style={{ height: '300vh' }}>
        <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center px-6">
          
          <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
            <ParticleBackground />
          </div>

          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
            <motion.div style={{ opacity: dot1Opacity }} className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
            <motion.div style={{ opacity: dot2Opacity }} className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
            <motion.div style={{ opacity: dot3Opacity }} className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
          </div>
      BACKUP 끝 */}
      {/* BACKUP_20260316_스토리텔링_높이_및_도트복원 시작
      <section id="detail-page" className="relative z-10 w-full" ref={storyRef} style={{ height: '400vh' }}>
        <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center px-6">
          
          <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
            <ParticleBackground />
          </div>

          <motion.div style={{ opacity: scrollHintOpacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 z-20">
            <span className="text-xs tracking-[0.2em] font-medium">SCROLL</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4 rotate-90" />
            </motion.div>
          </motion.div>
      BACKUP 끝 */}
      {/* BACKUP_20260316_스토리텔링_재구현_시작
      <section id="detail-page" className="relative z-10 w-full" ref={storyRef} style={{ height: '500vh' }}>
        <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center px-6">
          
          <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
            <ParticleBackground />
          </div>

          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
            <motion.div style={{ backgroundColor: dot1Color, boxShadow: dot1Shadow }} className="w-2 h-2 rounded-full" />
            <motion.div style={{ backgroundColor: dot2Color, boxShadow: dot2Shadow }} className="w-2 h-2 rounded-full" />
            <motion.div style={{ backgroundColor: dot3Color, boxShadow: dot3Shadow }} className="w-2 h-2 rounded-full" />
          </div>

          <motion.div style={{ opacity: scrollHintOpacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 z-20">
            <span className="text-xs tracking-[0.2em] font-medium">SCROLL</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4 rotate-90" />
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ opacity: opacity1, y: y1 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6"
          >
            <div className="max-w-[340px] md:max-w-[560px] lg:max-w-[720px] w-full mx-auto flex flex-col items-center">
              <div className="mb-8">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[48px] h-[48px] lg:w-[72px] lg:h-[72px] text-purple-300">
                  <circle cx="12" cy="4" r="2" />
                  <path d="M12 7c-2.76 0-5 2.24-5 5v4h2v6h6v-6h2v-4c0-2.76-2.24-5-5-5z" />
                </svg>
              </div>
              <h3 className="text-[28px] md:text-[42px] lg:text-[56px] 2xl:text-[64px] font-black text-white mb-6 leading-[1.3] break-keep">
                지금 이 순간에도<br/>제품은 팔리고 있습니다
              </h3>
              <div className="text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] font-light text-white/55 leading-[1.8] break-keep">
                <p className="mb-4">
                  차이는 제품 자체보다,<br/>
                  어떻게 보여지고 어떻게 설득되는지에서<br/>
                  시작될 수 있습니다.
                </p>
                <p>
                  브랜드를 운영하는 일은 생각보다<br/>
                  훨씬 많은 일을 동시에 요구합니다.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            style={{ opacity: opacity2, y: y2 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6 pointer-events-none"
          >
            <div className="max-w-[340px] md:max-w-[560px] lg:max-w-[720px] w-full mx-auto flex flex-col items-center">
              <div className="mb-8 relative flex flex-col items-center">
                <svg viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="2" className="mb-2 text-red-500 w-[24px] h-[12px] lg:w-[36px] lg:h-[18px]">
                  <rect x="2" y="2" width="18" height="8" rx="1" />
                  <path d="M20 4v4" />
                  <rect x="4" y="4" width="2" height="4" fill="currentColor" stroke="none" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[48px] h-[48px] lg:w-[72px] lg:h-[72px] text-purple-800" style={{ transform: 'rotate(15deg) translateY(4px)' }}>
                  <circle cx="12" cy="4" r="2" />
                  <path d="M12 7c-2.76 0-5 2.24-5 5v4h2v6h6v-6h2v-4c0-2.76-2.24-5-5-5z" />
                </svg>
              </div>
              <h3 className="text-[28px] md:text-[42px] lg:text-[56px] 2xl:text-[64px] font-black text-white mb-6 leading-[1.3] break-keep">
                혼자 감당해야 할 것들이<br/>너무 많습니다
              </h3>
              <div className="text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] font-light text-white/55 leading-[1.8] break-keep">
                <p className="mb-4">
                  제품 준비부터 판매, 운영, 응대, 마케팅까지<br/>
                  모든 과정을 혼자 감당해야 하는 분들도 많습니다.
                </p>
                <p>
                  상세페이지를 직접 완성하려다 보면<br/>
                  정작 더 중요한 운영과 판매에<br/>
                  집중하기 어려워질 수 있습니다.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            style={{ opacity: opacity3, y: y3 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6 pointer-events-none"
          >
            <div className="max-w-[340px] md:max-w-[560px] lg:max-w-[720px] w-full mx-auto flex flex-col items-center">
              <div className="mb-8">
                <svg viewBox="0 0 36 24" fill="currentColor" className="w-[72px] h-[48px] lg:w-[108px] lg:h-[72px] text-purple-400 drop-shadow-[0_0_15px_rgba(167,139,250,0.6)]">
                  <circle cx="12" cy="4" r="2" />
                  <path d="M12 7c-2.76 0-5 2.24-5 5v4h2v6h6v-6h2v-4c0-2.76-2.24-5-5-5z" />
                  <circle cx="24" cy="4" r="2" />
                  <path d="M24 7c-2.76 0-5 2.24-5 5v4h2v6h6v-6h2v-4c0-2.76-2.24-5-5-5z" />
                </svg>
              </div>
              <h3 className="text-[28px] md:text-[42px] lg:text-[56px] 2xl:text-[64px] font-black mb-6 leading-[1.3] break-keep" style={{
                background: 'linear-gradient(90deg, #fff 0%, #fff 35%, #c4b5fd 45%, #a78bfa 50%, #c4b5fd 55%, #fff 65%, #fff 100%)',
                backgroundSize: '250% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shimmer 3s ease-in-out infinite'
              }}>
                보여지는 영역은<br/>저희가 정리하겠습니다
              </h3>
              <div className="text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] font-light text-white/55 leading-[1.8] break-keep">
                <p>
                  AT FIRST SIGHT는 보여지는 영역을 정리해<br/>
                  대표님의 시간과 에너지가<br/>
                  더 필요한 곳에 쓰일 수 있도록 돕습니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      BACKUP 끝 */}

      {/* Detail Page Storytelling Section */}
      <div className="story-container relative z-10 w-full" style={{ height: '600vh' }}>
        <div className="story-viewport" style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
          
          {/* Background Particles for this section */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
            <ParticleBackground />
          </div>

          {/* Progress Dots */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20 transition-opacity duration-500" style={{ opacity: storyStage >= 0 && storyStage <= 2 ? 1 : 0 }}>
            <div className={`w-2 h-2 rounded-full transition-all duration-500 ${storyStage === 0 ? 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]' : 'bg-zinc-700'}`} />
            <div className={`w-2 h-2 rounded-full transition-all duration-500 ${storyStage === 1 ? 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]' : 'bg-zinc-700'}`} />
            <div className={`w-2 h-2 rounded-full transition-all duration-500 ${storyStage === 2 ? 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]' : 'bg-zinc-700'}`} />
          </div>

          {/* BACKUP_20260316_SCROLL_삭제_시작
          <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 z-20 transition-opacity duration-500 ${storyStage >= 0 ? 'opacity-0' : 'opacity-100'}`}>
            <span className="text-xs tracking-[0.2em] font-medium">SCROLL</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4 rotate-90" />
            </motion.div>
          </div>
          BACKUP 끝 */}

          {/* Step 1 */}
          <div className={`story-card card-1 flex flex-col items-center justify-center text-center px-6 ${storyStage === 0 ? 'active' : storyStage < 0 ? 'below' : 'above'}`}>
            <div className="max-w-[340px] md:max-w-[560px] lg:max-w-[720px] w-full mx-auto flex flex-col items-center">
              <div className="mb-8">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[48px] h-[48px] lg:w-[72px] lg:h-[72px] text-purple-300">
                  <circle cx="12" cy="4" r="2" />
                  <path d="M12 7c-2.76 0-5 2.24-5 5v4h2v6h6v-6h2v-4c0-2.76-2.24-5-5-5z" />
                </svg>
              </div>
              {/* BACKUP_20260318_3단스토리텔링_1단_수정_시작
              <h3 className="text-[32px] md:text-[36px] font-black text-white mb-6 leading-[1.3] break-keep">
                지금 이 순간에도<br/>제품은 팔리고 있습니다
              </h3>
              <div className="text-[15px] font-light text-white/50 leading-[1.8] break-keep">
                <p className="mb-4">
                  차이는 제품 자체보다,<br/>
                  어떻게 보여지고 어떻게 설득되는지에서<br/>
                  시작될 수 있습니다.
                </p>
                <p>
                  브랜드를 운영하는 일은 생각보다<br/>
                  훨씬 많은 일을 동시에 요구합니다.
                </p>
              </div>
              BACKUP 끝 */}
              {/* BACKUP_20260319_3단스토리텔링_1단_수정_시작
              <h3 className="text-[32px] md:text-[36px] font-black text-white mb-6 leading-[1.3] break-keep">
                상세페이지를 만들었는데도<br/>매출이 오르지 않나요?
              </h3>
              <div className="text-[15px] font-light text-white/50 leading-[1.8] break-keep">
                <p className="mb-4">
                  상세페이지를 읽다가 중간에 나가버리나요?
                </p>
                <p>
                  같은 제품인데 경쟁사만 더 잘 팔리나요?
                </p>
              </div>
              BACKUP 끝 */}
              <h3 className="text-[32px] md:text-[36px] font-black text-white mb-6 leading-[1.3] break-keep">
                지금 이 순간에도<br/>제품은 팔리고 있습니다.
              </h3>
              <div className="text-[18px] md:text-[28px] font-light text-white/50 leading-[1.6] md:leading-[1.8] break-keep">
                <p className="hidden md:block">
                  같은 제품인데 매출이 다르다면 뭐가 다른 걸까요?
                </p>
                <p className="block md:hidden">
                  같은 제품인데 매출이 다르다면<br />
                  뭐가 다른 걸까요?
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className={`story-card card-2 flex flex-col items-center justify-center text-center px-6 ${storyStage === 1 ? 'active' : storyStage < 1 ? 'below' : 'above'}`}>
            <div className="max-w-[340px] md:max-w-[560px] lg:max-w-[720px] w-full mx-auto flex flex-col items-center">
              <div className="mb-8 relative flex flex-col items-center">
                <svg viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="2" className="mb-2 text-red-500 w-[24px] h-[12px] lg:w-[36px] lg:h-[18px]">
                  <rect x="2" y="2" width="18" height="8" rx="1" />
                  <path d="M20 4v4" />
                  <rect x="4" y="4" width="2" height="4" fill="currentColor" stroke="none" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[48px] h-[48px] lg:w-[72px] lg:h-[72px] text-purple-800" style={{ transform: 'rotate(15deg) translateY(4px)' }}>
                  <circle cx="12" cy="4" r="2" />
                  <path d="M12 7c-2.76 0-5 2.24-5 5v4h2v6h6v-6h2v-4c0-2.76-2.24-5-5-5z" />
                </svg>
              </div>
              {/* BACKUP_20260318_3단스토리텔링_2단_수정_시작
              <h3 className="text-[32px] md:text-[36px] font-black text-white mb-6 leading-[1.3] break-keep">
                혼자 감당해야 할 것들이<br/>너무 많습니다
              </h3>
              <div className="text-[15px] font-light text-white/50 leading-[1.8] break-keep">
                <p className="mb-4">
                  제품 준비부터 판매, 운영, 응대, 마케팅까지<br/>
                  모든 과정을 혼자 감당해야 하는 분들도 많습니다.
                </p>
                <p>
                  상세페이지를 직접 완성하려다 보면<br/>
                  정작 더 중요한 운영과 판매에<br/>
                  집중하기 어려워질 수 있습니다.
                </p>
              </div>
              BACKUP 끝 */}
              {/* BACKUP_20260319_3단스토리텔링_2단_수정_시작
              <h3 className="text-[32px] md:text-[36px] font-black text-white mb-6 leading-[1.3] break-keep">
                지금 필요한 건 디자인 한 장이 아니라<br/>팔리는 흐름을 잡는 기획입니다
              </h3>
              <div className="text-[15px] font-light text-white/50 leading-[1.8] break-keep">
                <p>
                  AT FIRST SIGHT는 제품 설명만 늘어놓는 페이지가 아니라,<br/>
                  고객이 왜 사야 하는지 자연스럽게 납득하게 만드는<br/>
                  흐름으로 설계합니다.
                </p>
              </div>
              BACKUP 끝 */}
              <h3 className="text-[32px] md:text-[36px] font-black text-white mb-6 leading-[1.3] break-keep">
                혼자 감당해야 할 것들이<br/>이미 너무 많습니다.
              </h3>
              <div className="text-[18px] md:text-[28px] font-light text-white/50 leading-[1.8] break-keep">
                <p className="hidden md:block">
                  상세페이지까지 직접 붙잡고 있기엔 운영과 판매가 더 급합니다.
                </p>
                <p className="block md:hidden">
                  상세페이지까지 직접 붙잡고 있기엔<br />
                  운영과 판매가 더 급합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className={`story-card card-3 flex flex-col items-center justify-center text-center px-6 ${storyStage === 2 ? 'active' : storyStage < 2 ? 'below' : 'above'}`}>
            <div className="max-w-[340px] md:max-w-[560px] lg:max-w-[720px] w-full mx-auto flex flex-col items-center">
              <div className="mb-8">
                <svg viewBox="0 0 36 24" fill="currentColor" className="w-[72px] h-[48px] lg:w-[108px] lg:h-[72px] text-purple-400 drop-shadow-[0_0_15px_rgba(167,139,250,0.6)]">
                  <circle cx="12" cy="4" r="2" />
                  <path d="M12 7c-2.76 0-5 2.24-5 5v4h2v6h6v-6h2v-4c0-2.76-2.24-5-5-5z" />
                  <circle cx="24" cy="4" r="2" />
                  <path d="M24 7c-2.76 0-5 2.24-5 5v4h2v6h6v-6h2v-4c0-2.76-2.24-5-5-5z" />
                </svg>
              </div>
              {/* BACKUP_20260318_3단스토리텔링_3단_수정_시작
              <h3 className="text-[32px] md:text-[36px] font-black mb-6 leading-[1.3] break-keep" style={{
                background: 'linear-gradient(90deg, #fff 0%, #fff 35%, #c4b5fd 45%, #a78bfa 50%, #c4b5fd 55%, #fff 65%, #fff 100%)',
                backgroundSize: '250% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shimmer 3s ease-in-out infinite'
              }}>
                보여지는 영역은<br/>저희가 정리하겠습니다
              </h3>
              <div className="text-[15px] font-light text-white/50 leading-[1.8] break-keep">
                <p>
                  AT FIRST SIGHT는 보여지는 영역을 정리해<br/>
                  대표님의 시간과 에너지가<br/>
                  더 필요한 곳에 쓰일 수 있도록 돕습니다.
                </p>
              </div>
              BACKUP 끝 */}
              {/* BACKUP_20260319_3단스토리텔링_3단_수정_시작
              <h3 className="text-[32px] md:text-[36px] font-black mb-6 leading-[1.3] break-keep" style={{
                background: 'linear-gradient(90deg, #fff 0%, #fff 35%, #c4b5fd 45%, #a78bfa 50%, #c4b5fd 55%, #fff 65%, #fff 100%)',
                backgroundSize: '250% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shimmer 3s ease-in-out infinite'
              }}>
                제품 판매의 핵심은 결국<br/>[기획]입니다
              </h3>
              BACKUP 끝 */}
              <h3 className="text-[32px] md:text-[36px] font-black mb-6 leading-[1.3] break-keep" style={{
                background: 'linear-gradient(90deg, #fff 0%, #fff 35%, #c4b5fd 45%, #a78bfa 50%, #c4b5fd 55%, #fff 65%, #fff 100%)',
                backgroundSize: '250% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shimmer 3s ease-in-out infinite'
              }}>
                보여지는 영역은<br/>저희가 정리하겠습니다.
              </h3>
              <div className="text-[18px] md:text-[28px] font-light text-white/50 leading-[1.8] break-keep">
                <p className="hidden md:block">
                  대표님의 시간과 에너지가 더 중요한 곳에 쓰일 수 있도록.
                </p>
                <p className="block md:hidden">
                  대표님의 시간과 에너지가<br />
                  더 중요한 곳에 쓰일 수 있도록.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BACKUP: Mockups Section (Below Storytelling) & Divider
      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { id: 1, title: '식품 브랜드', category: '상세페이지 기획 + 디자인', image: 'https://picsum.photos/seed/detail1/400/1200' },
              { id: 2, title: '전자기기', category: '상세페이지 기획 + 디자인', image: 'https://picsum.photos/seed/detail2/400/1200' },
              { id: 3, title: '리빙 브랜드', category: '상세페이지 기획 + 디자인', image: 'https://picsum.photos/seed/detail3/400/1200' }
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedDetailMockup(item)}
                className={`flex flex-col items-center cursor-pointer group ${index === 1 ? 'lg:-translate-y-4' : ''}`}
              >
                <motion.div 
                  layoutId={`detail-phone-frame-${item.id}`}
                  className="relative w-[300px] h-[600px] rounded-[3rem] border-[8px] border-zinc-800 bg-black p-2 shadow-2xl group-hover:border-zinc-700 transition-colors duration-500"
                >
                  <motion.div layoutId={`detail-phone-screen-${item.id}`} className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-zinc-900">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-800 rounded-full z-[999] z-30"></div>
                    
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-center">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-xs font-semibold tracking-widest text-indigo-400 mb-3 uppercase">
                          {item.category}
                        </p>
                        <h4 className="text-2xl font-bold mb-6 text-white break-keep">
                          {item.title}
                        </h4>
                        <div className="w-12 h-12 mx-auto rounded-full bg-white text-black flex items-center justify-center">
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                
                <div className="mt-8 text-center w-full hidden md:block">
                  <h4 className="text-xl font-semibold tracking-tight text-white group-hover:text-indigo-400 transition-colors">{item.title}</h4>
                  <p className="text-sm font-medium mt-1 text-zinc-500 uppercase">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full py-24">
        <div className="w-full h-px bg-[#2a2a2a]"></div>
      </div>
      */}

      {/* BACKUP: Portfolio Section
      <section id="portfolio" className="relative z-10 py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">홈페이지 제작</h3>
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
                <motion.div 
                  layoutId={`phone-frame-${project.id}`}
                  className="relative w-[300px] h-[600px] rounded-[3rem] border-[8px] border-zinc-800 bg-black p-2 shadow-2xl group-hover:border-zinc-700 transition-colors duration-500"
                >
                  <motion.div layoutId={`phone-screen-${project.id}`} className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-zinc-900">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-800 rounded-full z-[999] z-30"></div>
                    
                    <img 
                      src={project.coverImage} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
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
                
                <div className="mt-8 text-center w-full hidden md:block">
                  <h4 className="text-xl font-semibold tracking-tight text-white group-hover:text-indigo-400 transition-colors">{project.title}</h4>
                  <p className="text-sm font-medium mt-1 text-zinc-500 uppercase">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* BACKUP: 구분선 추가 전
      (기존에는 3단 섹션과 포트폴리오 섹션 사이에 구분선이 없었습니다)
      */}
      {/* 3단 섹션 ↔ 상세페이지 포트폴리오 섹션 구분선 */}
      <div className="w-full" style={{ padding: '40px 0' }}>
        <div className="w-full h-[1px] bg-[#2a2a2a]"></div>
      </div>

      {/* Portfolio Section */}
      <motion.section 
        id="detail-portfolio" 
        className="relative z-10 py-32"
        initial={{ scale: 0.92, y: 40, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h3 className="text-[26px] md:text-[40px] lg:text-[48px] font-bold tracking-tight text-white mb-4 whitespace-nowrap px-4 md:px-0 text-center md:text-left">상세페이지 포트폴리오</h3>
              <p className="text-zinc-400 font-medium text-xl text-center md:text-left">
                <span className="hidden md:block">
                  각 브랜드의 결에 맞춰 완성한 상세페이지입니다.<br />
                  작업물을 클릭해 실제 구성과 흐름을 확인해보세요.
                </span>
                <span className="block md:hidden">
                  각 브랜드의 결에 맞춰<br />
                  완성한 상세페이지입니다.<br />
                  작업물을 클릭해<br />
                  실제 구성과 흐름을 확인해보세요.
                </span>
              </p>
            </div>
            <div className="text-right">
              <span className="text-gradient-accent font-bold text-6xl leading-none opacity-50">03</span>
            </div>
          </div>

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
                  <motion.div layoutId={`phone-screen-${project.id}`} className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-black">
                    
                    {/* Background layer to fill the entire frame for all projects */}
                    <div className={`absolute inset-0 z-0 ${project.id === 1 ? 'bg-white' : 'bg-black'}`}>
                    </div>

                    {/* Dynamic Island / Notch Hint */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[32%] h-7 bg-zinc-800 rounded-full z-50 shadow-[0_2px_4px_rgba(0,0,0,0.5)] shadow-[0_2px_4px_rgba(0,0,0,0.5)] shadow-[0_2px_4px_rgba(0,0,0,0.5)]"></div>
                    
                    {/* Foreground image (Fullscreen, no pt-10) */}
                    <div className="relative z-10 w-full h-full">
                      <img 
                        src={project.coverImage} 
                        alt={project.title}
                        className={`w-full h-full object-fill origin-top transition-transform duration-700 group-hover:scale-105 ${project.id === 1 || project.id === 3 ? 'pt-8' : ''}`}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-center">
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
                <div className="mt-8 text-center w-full hidden md:block">
                  <h4 className="text-xl font-semibold tracking-tight text-white group-hover:text-indigo-400 transition-colors">{project.title}</h4>
                  <p className="text-sm font-medium mt-1 text-zinc-500 uppercase">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* BACKUP_20260324_WHY_US_구분선_추가_시작 */}
      <div className="w-full py-20 md:py-32">
        <div className="w-full h-[1px]" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}></div>
      </div>
      {/* BACKUP_20260324_WHY_US_구분선_추가_끝 */}

      {/* BACKUP_20260324_WHY_US_섹션_추가_시작 */}
      {/* WHY US Section */}
      <section id="why-us" className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* 대제목 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-zinc-300 mb-8 font-medium text-sm tracking-wide border border-white/10">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              <span>WHY US</span>
            </div>
            <h3 className="text-[22px] sm:text-[24px] md:text-5xl font-bold tracking-tight text-white mb-6 text-center md:text-left leading-[1.2] whitespace-nowrap">
              왜 엣 퍼스트 사이트여야 할까요?
            </h3>
            <div className="text-[18px] md:text-[24px] text-zinc-400 text-center md:text-left break-keep leading-[1.5]">
              <p className="hidden md:block">
                첫인상부터 구매 흐름까지 브랜드가 선택받는 구조로 설계합니다.
              </p>
              <p className="block md:hidden">
                첫인상부터 구매 흐름까지<br />
                브랜드가 선택받는 구조로 설계합니다.
              </p>
            </div>
          </motion.div>

          {/* 섹션 1: 프리랜서 비교 */}
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-12 items-start max-w-[1080px] mx-auto py-[60px] md:py-[70px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col"
            >
              <span className="text-[36px] md:text-[52px] font-black leading-none mb-4" style={{ color: 'rgba(167,139,250,0.07)' }}>01</span>
              <h4 className="text-[20px] md:text-2xl font-bold text-white mb-2">혹시 프리랜서에게 맡기시나요?</h4>
              <p className="text-zinc-500 text-sm">프리랜서 의뢰 후 다시 찾아오시는 이유</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-col"
            >
              {[
                { 
                  pc: { bold: "기획 없이", text: "상세페이지 만들더니… 구성이 중구난방에 보기 힘들어요." },
                  mo: { bold: "기획 없이", text1: " 상세페이지 만들더니...", text2: "구성이 중구난방에 보기 힘들어요." }
                },
                { 
                  pc: { bold: "저렴하길래 검증 없이도", text: "맡겼더니… 결과물이 완전 기대 이하!" },
                  mo: { bold: "저렴하길래 검증 없이도", text1: " 맡겼더니...", text2: "결과물이 완전 기대 이하!" }
                },
                { 
                  pc: { bold: "피드백이 느려지더니", text: "수정 문의에도 답이 없고 연락 두절 되었어요!" },
                  mo: { bold: "피드백이 느려지더니", text1: "", text2: "수정 문의에도 답이 없고 연락 두절 되었어요!" }
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + idx * 0.1 }}
                  className="py-[18px] border-b border-white/[0.04] text-zinc-300"
                >
                  <div className="hidden md:block text-base md:text-lg">
                    "<span className="text-[#a78bfa] font-bold">{item.pc.bold}</span> {item.pc.text}"
                  </div>
                  <div className="block md:hidden text-[18px] leading-[1.6]">
                    "<span className="text-[#a78bfa] font-bold">{item.mo.bold}</span>{item.mo.text1}<br />
                    {item.mo.text2}"
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* 구분선 */}
          <div className="max-w-[1080px] mx-auto flex justify-center">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[1px] bg-white/[0.04]"
            />
          </div>

          {/* 섹션 2: 비교 테이블 */}
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-12 items-start max-w-[1080px] mx-auto py-[60px] md:py-[70px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col"
            >
              <span className="text-[36px] md:text-[52px] font-black leading-none mb-4" style={{ color: 'rgba(167,139,250,0.07)' }}>02</span>
              <h4 className="text-[18px] md:text-2xl font-bold text-white mb-2 whitespace-nowrap">그래서 전문 디자인업체에 맡겨야합니다!</h4>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-col w-full"
            >
              <div className="hidden md:grid grid-cols-2 mb-4 px-4">
                <div className="text-zinc-500 text-sm font-medium text-center">프리랜서</div>
                <div className="text-[#a78bfa] text-sm font-bold text-center">AT FIRST SIGHT</div>
              </div>
              <div className="flex flex-col gap-5 md:gap-2">
                {[
                  { left: "개인 작업자", right: "디자인 전문 기업" },
                  { left: "체계 없는 단독 작업", right: "체계적인 프로세스" },
                  { left: "피드백·작업 속도 불안정", right: "빠르고 안정적인 속도" },
                  { left: "상의표현 체크 미흡", right: "전문적인 검수" },
                  { left: "브랜드 전략 부족", right: "브랜드에 맞춘 기획" },
                  { left: "미흡한 파일 관리", right: "안전한 파일 관리" }
                ].map((row, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + idx * 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden"
                  >
                    <div className="py-5 md:py-4 px-4 md:px-6 text-center text-[16px] md:text-base flex flex-col items-center justify-center" style={{ background: 'rgba(255,255,255,0.015)', color: 'rgba(255,255,255,0.28)' }}>
                      <span className="md:hidden text-[13px] text-zinc-500 mb-2 font-medium">프리랜서</span>
                      {row.left}
                    </div>
                    <div className="py-5 md:py-4 px-4 md:px-6 text-center text-[18px] md:text-base font-semibold flex flex-col items-center justify-center border-t md:border-t-0 md:border-l-2" style={{ background: 'rgba(167,139,250,0.04)', color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(167,139,250,0.15)' }}>
                      <span className="md:hidden text-[14px] text-[#a78bfa] mb-2 font-black">AT FIRST SIGHT</span>
                      {row.right}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 구분선 */}
          <div className="max-w-[1080px] mx-auto flex justify-center">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[1px] bg-white/[0.04]"
            />
          </div>

          {/* 섹션 3: 왜 AT FIRST SIGHT인가 */}
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-12 items-start max-w-[1080px] mx-auto py-[60px] md:py-[70px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col"
            >
              <span className="text-[36px] md:text-[52px] font-black leading-none mb-4" style={{ color: 'rgba(167,139,250,0.07)' }}>03</span>
              <h4 className="text-[20px] md:text-2xl font-bold text-white mb-2">왜 AT FIRST SIGHT구요?</h4>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-col"
            >
              <div className="mb-8">
                <h5 className="text-[20px] font-black text-[#a78bfa] mb-2">"직접 판매와 유통까지 해봤으니까!"</h5>
                <p className="text-zinc-300 text-base md:text-lg">단순한 디자인 업체가 아닌 브랜드를 만들고 운영하고 있습니다</p>
              </div>
              
              {/* BACKUP_20260324_배지_위치변경_시작 */}
              <div className="flex justify-center mb-5">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium">
                  실전형 상세페이지 제작
                </div>
              </div>
              {/* BACKUP_20260324_배지_위치변경_끝 */}
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { title: "Point.01", desc: "판매 흐름을 이해한 기획" },
                  { title: "Point.02", desc: "판매 전략적 상세페이지" },
                  { title: "Point.03", desc: "구매 핵심 카피라이팅" }
                ].map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + idx * 0.1 }}
                    className="glass-panel p-6 rounded-2xl border border-white/5 hover:-translate-y-1 hover:border-[#a78bfa]/50 transition-all duration-300 flex flex-col items-center text-center group"
                  >
                    <span className="text-[#a78bfa] font-bold text-sm mb-2">{card.title}</span>
                    <span className="text-white font-medium">{card.desc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* BACKUP_20260324_WHY_US_섹션_추가_끝 */}

      {/* 상세페이지 포트폴리오 ↔ 차별점 섹션 구분선 */}
      <div className="w-full" style={{ padding: '40px 0' }}>
        <div className="w-full h-[1px] bg-[#2a2a2a]"></div>
      </div>

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
            <p className="text-xl font-medium text-zinc-400 max-w-3xl break-keep">
              <span className="hidden md:block">
                <span className="text-white font-bold">잘 만든 상세페이지</span>와 <span className="text-white font-bold">잘 팔리는 상세페이지</span>는 다릅니다.
              </span>
              <span className="block md:hidden">
                <span className="text-white font-bold">잘 만든 상세페이지</span>와<br />
                <span className="text-white font-bold">잘 팔리는 상세페이지</span>는 다릅니다.
              </span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: '직접 만들수록 판매 타이밍은 늦어집니다.', desc: '상세페이지에 붙잡혀 있을 시간에 운영과 판매에 더 집중해야 합니다. 전문가에게 맡기면 시간과 매출, 둘 다 잡을 수 있습니다.' },
              { title: '고객은 끝까지 읽지 않습니다.', desc: '중간에 빠지는 지점부터 먼저 봅니다. 이탈 없이 끝까지 따라오게 만드는 구조를 설계합니다.' },
              { title: '감으로 만들지 않습니다.', desc: '시장, 경쟁사, 고객 심리까지 봅니다. 예쁜 디자인이 아니라 실제로 반응 오는 방향으로 정리합니다.' },
              { title: '광고비가 새는 페이지는 바로 티 납니다.', desc: '유입은 되는데 안 팔린다면, 문제는 상세페이지일 가능성이 큽니다. 광고비를 살리는 건 결국 페이지 구조입니다.' }
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
            className="mb-16 md:mb-20 text-center px-4"
          >
            <h3 className="text-[36px] sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 text-white break-keep">작업 프로세스</h3>
            <p className="text-indigo-400 font-medium text-xl sm:text-2xl break-keep">
              무작정 디자인하지 않습니다. 먼저 구조를 설계합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
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
                  <div className="text-base font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-4 py-1.5 rounded-full">
                    STEP {step.num}
                  </div>
                  <ChevronRight className="text-zinc-600 group-hover:text-indigo-400 transition-colors" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold mb-3 text-white break-keep">{step.title}</h4>
                <p className="font-medium text-base sm:text-lg text-zinc-400 break-keep">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative z-10 py-32 px-6 border-t border-[#2a2a2a]">
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

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-32 px-6 border-t border-[#2a2a2a] bg-black overflow-hidden flex flex-col items-center justify-center">
        
        {/* Background Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#a78bfa] rounded-full blur-[120px] opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#ffe500] rounded-full blur-[120px] opacity-[0.03] pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center">
          
          {/* Top Area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center flex flex-col items-center w-full px-4"
          >
            <span className="text-[#a78bfa] text-sm sm:text-base uppercase tracking-[2px] font-bold mb-4">
              Contact Us
            </span>
            <h3 className="text-3xl sm:text-5xl font-bold text-white mb-3 break-keep">
              프로젝트 문의
            </h3>
            <p className="text-lg sm:text-xl font-medium text-zinc-400 mb-8 break-keep">
              지금 바로 비즈니스의 전환점을 만들어보세요.
            </p>

            {/* Shimmering Divider */}
            <div className="relative w-24 h-[2px] bg-[#333] mb-12 overflow-hidden rounded-full">
              <motion.div 
                className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-[#a78bfa] to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Cards Area */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-12 px-4 md:px-0"
          >
            {/* Card 1: KakaoTalk */}
            <motion.a 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              href="http://pf.kakao.com/_xnBYVn/chat" 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col items-center justify-center py-8 px-4 rounded-2xl transition-all duration-300 border-[0.5px] border-[#333] hover:border-[#a78bfa]/50 hover:-translate-y-[6px] hover:shadow-[0_12px_32px_rgba(167,139,250,0.15)] min-h-[48px] group"
              style={{ background: 'linear-gradient(145deg, #1a1a1a, #222)' }}
            >
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="w-[56px] h-[56px] bg-[#FEE500] rounded-full flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300"
              >
                <MessageCircle className="text-[#0a0a0a]" size={28} />
              </motion.div>
              <span className="text-[20px] md:text-2xl font-bold text-white mb-2 break-keep">카카오톡 빠른 상담</span>
              <span className="text-[14px] md:text-[16px] text-zinc-400 font-medium break-keep">실시간 1:1 채팅</span>
            </motion.a>

            {/* Card 2: Estimate Inquiry */}
            <motion.a 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              href="https://m.site.naver.com/26uiJ" 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col items-center justify-center py-8 px-4 rounded-2xl transition-all duration-300 border-[0.5px] border-[#333] hover:border-[#a78bfa]/50 hover:-translate-y-[6px] hover:shadow-[0_12px_32px_rgba(167,139,250,0.15)] min-h-[48px] group"
              style={{ background: 'linear-gradient(145deg, #1a1a1a, #222)' }}
            >
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.2 }}
                className="w-[56px] h-[56px] bg-white rounded-full flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300"
              >
                <Mail className="text-black" size={28} />
              </motion.div>
              <span className="text-[20px] md:text-2xl font-bold text-white mb-2 break-keep">견적 문의하기</span>
              <span className="text-[14px] md:text-[16px] text-zinc-400 font-medium break-keep">맞춤 견적 제공</span>
            </motion.a>

            {/* Card 3: QR Scan (Hidden on mobile) */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="hidden md:flex flex-col items-center justify-center py-8 px-4 rounded-2xl transition-all duration-300 border-[0.5px] border-[#333] hover:border-[#a78bfa]/50 hover:-translate-y-[6px] hover:shadow-[0_12px_32px_rgba(167,139,250,0.15)] min-h-[48px] group"
              style={{ background: 'linear-gradient(145deg, #1a1a1a, #222)' }}
            >
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.4 }}
                className="w-[56px] h-[56px] bg-white rounded-xl flex items-center justify-center mb-5 p-2 shadow-lg group-hover:scale-110 transition-transform duration-300"
              >
                <img src="/digital/digital_04.gif" alt="QR Code fallback" className="w-full h-full object-contain mix-blend-multiply" />
              </motion.div>
              <span className="text-[20px] md:text-2xl font-bold text-white mb-2 break-keep">QR 스캔</span>
              <span className="text-[14px] md:text-[16px] text-zinc-400 font-medium break-keep">모바일에서 스캔</span>
            </motion.div>

          </motion.div>

          {/* Bottom Text */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center text-[#999] text-[14px] md:text-[16px] w-full px-4 break-keep font-medium"
          >
            평일 오전 9:00~18:00, 주말 및 공휴일 휴무
          </motion.p>
          
        </div>
      </section>

      <footer className="py-12 text-center text-sm font-medium text-zinc-500 border-t border-[#2a2a2a]">
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
              className={
                selectedProject.id === 3
                  ? "relative w-full max-w-[400px] h-[85vh] md:h-[90vh] rounded-[3rem] border-[8px] border-zinc-800 bg-black p-2 shadow-2xl flex flex-col"
                  : "relative w-full max-w-[400px] h-[85vh] md:h-[90vh] rounded-[3rem] border-[8px] border-zinc-800 bg-black p-2 shadow-2xl flex flex-col"
              }
            >
              {/* Scrollable Screen Inside Phone */}
              <motion.div 
                layoutId={`phone-screen-${selectedProject.id}`} 
                className={
                  selectedProject.id === 3
                    ? "w-full overflow-x-hidden phone-scroll bg-zinc-950 rounded-[2.5rem] relative flex flex-col h-full overflow-y-auto"
                    : "w-full overflow-x-hidden phone-scroll bg-zinc-950 rounded-[2.5rem] relative flex flex-col h-full overflow-y-auto"
                }
                style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth', touchAction: 'pan-y' }}
              >
                
                {/* Dynamic Island / Notch Hint (Modal) */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-800 rounded-full z-[999] z-30 mx-auto mb-[-24px]"></div>

                {/* Cover Image Wrapper */}
                {selectedProject.id !== 3 && (
                  <div className="w-full">
                    <img 
                      src={selectedProject.coverImage} 
                      alt={`${selectedProject.title} cover`}
                      className={`w-full max-w-full block m-0 p-0 h-auto ${selectedProject.id === 1 ? 'pt-8 bg-white' : ''} object-cover`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                {/* Detail Images */}
                <div className="w-full flex flex-col">
                  {selectedProject.details.map((imgSrc, idx) => {
                    // Start rendering from the first detail image (which we skip if it's the cover image and idx === 0)
                    if (idx === 0 && imgSrc === selectedProject.coverImage) return null;
                    return (
                      <img 
                        key={idx}
                        src={imgSrc} 
                        alt=""
                        className={
                          selectedProject.id === 3
                            ? "w-full max-w-full block m-0 p-0 object-cover h-auto"
                            : `w-full max-w-full block m-0 p-0 text-transparent bg-transparent object-cover h-auto ${selectedProject.id === 1 ? 'min-h-[50px] bg-white' : ''}`
                        }
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    );
                  })}
                </div>

              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail Page Floating Popup */}
      <AnimatePresence>
        {selectedDetailMockup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDetailMockup(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-xl p-4 md:p-8"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedDetailMockup(null)}
              className="absolute top-6 right-6 z-[110] p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <X size={24} />
            </button>

            {/* The Sleek Phone Mockup Modal */}
            <motion.div
              layoutId={`detail-phone-frame-${selectedDetailMockup.id}`}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[400px] h-[80vh] md:h-[85vh] rounded-[3rem] border-[8px] border-zinc-800 bg-black p-2 shadow-2xl flex flex-col"
            >
              {/* Scrollable Screen Inside Phone */}
              <motion.div 
                layoutId={`detail-phone-screen-${selectedDetailMockup.id}`} 
                className="w-full h-full overflow-y-auto overflow-x-hidden phone-scroll bg-zinc-950 rounded-[2.5rem] relative block"
                style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth', touchAction: 'pan-y' }}
              >
                
                {/* Dynamic Island / Notch Hint (Modal) */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-800 rounded-full z-[999] z-30 mx-auto mb-[-24px]"></div>

                {/* Header inside phone */}
                <div className="pt-16 pb-8 px-8 text-center bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-white/5">
                  <p className="text-xs font-semibold tracking-widest text-indigo-400 mb-2 uppercase">
                    {selectedDetailMockup.category}
                  </p>
                  <h2 className="text-2xl font-bold text-white">{selectedDetailMockup.title}</h2>
                </div>

                {/* Detail Image */}
                <img 
                  src={selectedDetailMockup.image} 
                  alt={`${selectedDetailMockup.title} detail`}
                  className="w-full max-w-full h-auto object-cover block m-0 p-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Footer inside phone */}
                <div className="p-8 text-center bg-zinc-950 border-t border-white/5">
                  <button 
                    onClick={() => setSelectedDetailMockup(null)}
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

      {/* <!-- BACKUP: 차별점 섹션 원본 시작 -->
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
      <!-- BACKUP: 차별점 섹션 원본 끝 --> */}
    </div>
  );
}
