import React, { useState, useEffect, useRef } from 'react';
import ThemePremium from './themes/ThemePremium';
import { Undo2, Redo2, Settings, X } from 'lucide-react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  
  const contentRef = useRef<HTMLDivElement>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const isUndoing = useRef(false);

  useEffect(() => {
    const adminParam = new URLSearchParams(window.location.search).get('admin');
    setIsAdmin(adminParam === 'true');
  }, []);

  useEffect(() => {
    if (!isAdmin || !contentRef.current) return;

    // Initial state
    const initialHtml = contentRef.current.innerHTML;
    setHistory([initialHtml]);
    setCurrentIndex(0);

    const observer = new MutationObserver((mutations) => {
      if (isUndoing.current) return;
      
      const newHtml = contentRef.current?.innerHTML;
      if (newHtml && newHtml !== history[currentIndex]) {
        setHistory(prev => {
          const newHistory = prev.slice(0, currentIndex + 1);
          newHistory.push(newHtml);
          if (newHistory.length > 10) {
            newHistory.shift();
            return newHistory;
          }
          return newHistory;
        });
        setCurrentIndex(prev => Math.min(prev + 1, 9));
      }
    });

    observer.observe(contentRef.current, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true
    });

    return () => observer.disconnect();
  }, [isAdmin, currentIndex, history]);

  const handleUndo = () => {
    if (currentIndex > 0 && contentRef.current) {
      isUndoing.current = true;
      const newIndex = currentIndex - 1;
      contentRef.current.innerHTML = history[newIndex];
      setCurrentIndex(newIndex);
      setTimeout(() => { isUndoing.current = false; }, 50);
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1 && contentRef.current) {
      isUndoing.current = true;
      const newIndex = currentIndex + 1;
      contentRef.current.innerHTML = history[newIndex];
      setCurrentIndex(newIndex);
      setTimeout(() => { isUndoing.current = false; }, 50);
    }
  };

  return (
    <>
      {isAdmin && <div className="fixed top-0 left-0 w-full h-1 bg-purple-500 z-[9999]"></div>}
      
      <div ref={contentRef}>
        <ThemePremium />
      </div>
      
      {/* Admin Undo Panel */}
      {isAdmin && (
        <div id="admin-undo-panel" className="fixed bottom-6 right-6 z-[9999]">
          {!isPanelOpen ? (
            <button 
              onClick={() => setIsPanelOpen(true)}
              className="w-12 h-12 bg-zinc-900/80 backdrop-blur border border-white/10 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-zinc-800 transition-colors"
            >
              <Settings size={20} />
            </button>
          ) : (
            <div className="bg-zinc-900/80 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl flex flex-col gap-4 min-w-[240px]">
              <div className="flex justify-between items-center mb-2">
                <p className="text-white text-sm font-bold">🛠 관리자 복구 패널</p>
                <button onClick={() => setIsPanelOpen(false)} className="text-zinc-400 hover:text-white">
                  <X size={18} />
                </button>
              </div>
              
              <div className="flex items-center justify-between gap-2">
                <button 
                  onClick={handleUndo}
                  disabled={currentIndex <= 0}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-lg font-medium bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Undo2 size={16} />
                  되돌리기
                </button>
                <button 
                  onClick={handleRedo}
                  disabled={currentIndex >= history.length - 1}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-lg font-medium bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Redo2 size={16} />
                  다시 적용
                </button>
              </div>
              
              <div className="text-center text-xs text-zinc-500 font-medium">
                히스토리 단계: {currentIndex + 1} / {history.length}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
