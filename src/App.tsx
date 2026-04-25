import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Shield, Award, Users, BookOpen, 
  Target, MessageSquare, Phone, Instagram, 
  Youtube, ArrowRight, Settings, Plus, Trash2, Camera,
  MapPin, GraduationCap, Briefcase, ChevronRight
} from 'lucide-react';
import { Achievement, Activity, Pledge } from './types';
import { INITIAL_ACHIEVEMENTS, INITIAL_ACTIVITIES, INITIAL_PLEDGES, ACADEMIC_INFO, CAREER_INFO } from './constants';

// --- Scroll To Top Hook ---
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// --- Components ---

const Nav = ({ onAdminClick }: { onAdminClick: () => void }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: '홈', path: '/' },
    { name: '학력사항', path: '/academic' },
    { name: '주요경력', path: '/career' },
    { name: '교육철학', path: '/philosophy' },
    { name: '실적/성과', path: '/achievements' },
    { name: '공약/비전', path: '/pledges' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary-red backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2"
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <span className="text-white/80 text-xs font-bold tracking-tighter uppercase whitespace-nowrap pt-1">경상북도 교육감 예비후보</span>
          <span className="text-white text-2xl font-black tracking-tight uppercase whitespace-nowrap">김상동</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-white/70">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`hover:text-white transition-colors ${location.pathname === item.path ? 'text-white font-black underline underline-offset-8' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <button 
            onClick={onAdminClick}
            className="text-white/30 hover:text-white transition-all uppercase text-[10px] font-black tracking-widest"
          >
            [관리자 전용]
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-primary-red border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`text-lg font-bold text-white hover:opacity-80 ${location.pathname === item.path ? 'underline decoration-2 underline-offset-4' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={() => { onAdminClick(); setIsMobileMenuOpen(false); }}
              className="text-left py-2 text-white/40 uppercase text-xs font-black tracking-widest"
            >
              [관리자 메뉴]
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer className="bg-slate-900 text-white pt-20 md:pt-24 pb-12 px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 mb-20 md:mb-24">
          <div>
            <span className="text-primary-red font-black tracking-[0.2em] uppercase text-xs block mb-8 border-l-4 border-primary-red pl-3">연락처 정보</span>
            <div className="space-y-12 md:space-y-16">
              <a href="tel:010-8129-7448" className="block group">
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-black mb-3">전화번호</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold group-hover:text-primary-red transition-all duration-300">010. 8129. 7448</div>
              </a>
              <div className="block">
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-black mb-3">활동 지역</div>
                <div className="text-xl sm:text-2xl md:text-3xl font-serif leading-tight">경상북도 상주시 (출생)</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            {isHome && (
              <div className="mb-12 md:mb-16">
                <h3 className="text-3xl md:text-4xl font-serif font-bold leading-[1.3] mb-8">
                  함께 아이들의<br/>
                  <span className="text-primary-red italic decoration-primary-red/30 underline underline-offset-8">경북의 미래</span>를 열어주세요.
                </h3>
                <div className="flex flex-wrap gap-6 md:gap-8 text-xs font-black text-slate-400 tracking-widest uppercase">
                  <a href="#" className="hover:text-primary-red transition-all hover:scale-110">FACEBOOK</a>
                  <a href="#" className="hover:text-primary-red transition-all hover:scale-110">YOUTUBE</a>
                  <a href="#" className="hover:text-primary-red transition-all hover:scale-110">INSTAGRAM</a>
                </div>
              </div>
            )}
            <button className="w-full md:w-auto bg-white text-slate-900 px-10 py-6 font-black text-sm uppercase tracking-[0.2em] hover:bg-primary-red hover:text-white transition-all duration-300 flex items-center justify-between group shadow-xl">
              후원 및 지지하기 <span className="text-primary-red group-hover:text-white transition-transform group-hover:translate-x-2">→</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8 opacity-60 text-[10px] md:text-xs font-bold tracking-widest uppercase text-center md:text-left">
          <div className="leading-relaxed">© 2026 김상동. <br className="md:hidden" />경북 교육의 미래를 위한 리더십</div>
          <div className="flex gap-8 md:gap-10">
            <a href="#" className="hover:text-primary-red hover:opacity-100 transition-all">개인정보처리방침</a>
            <a href="#" className="hover:text-primary-red hover:opacity-100 transition-all">이용약관</a>
          </div>
        </div>
      </div>
      {/* Decorative background element for mobile visibility */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-red/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
    </footer>
  );
};

// --- Pages ---

const Home = ({ heroBg }: { heroBg: string }) => (
  <main className="pt-24 min-h-screen">
    <header className="bg-[#0a1d37] border-b border-white/5 overflow-hidden border-t-8 border-primary-red">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
        {/* Text Area */}
        <div className="flex-1 flex items-center px-6 md:px-10 py-16 md:py-0 order-2 md:order-1">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-center md:text-left w-full"
          >
            <div className="h-4 w-32 bg-primary-red mb-10 mx-auto md:mx-0" />
            <h1 className="text-white font-bold mb-8 leading-[1.1]">
              <span className="text-xl md:text-3xl lg:text-4xl block mb-4 font-normal text-white/70">경상북도 교육감 예비후보</span>
              <span className="text-5xl md:text-7xl lg:text-9xl">김상동</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed max-w-sm mb-10 font-medium mx-auto md:mx-0">
              전 경북대학교 총장의 <br/>검증된 실무와 행정력
            </p>
            <div className="flex flex-col gap-4 max-w-sm mx-auto md:mx-0">
              <Link to="/pledges" className="bg-primary-red text-white px-8 py-5 font-black text-xl md:text-2xl uppercase tracking-widest hover:bg-white hover:text-primary-red transition-all flex items-center justify-between group shadow-2xl">
                공약 바로보기 <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="grid grid-cols-2 gap-3 mt-2">
                <Link to="/academic" className="bg-white/10 border border-white/20 text-white px-4 py-4 font-bold text-sm hover:bg-white/20 transition-all flex items-center justify-between">
                  후보자 학력 <ArrowRight size={14} className="text-primary-red" />
                </Link>
                <Link to="/career" className="bg-white/10 border border-white/20 text-white px-4 py-4 font-bold text-sm hover:bg-white/20 transition-all flex items-center justify-between">
                  후보자 경력 <ArrowRight size={14} className="text-primary-red" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Area */}
        <div className="flex-1 flex justify-center md:justify-end items-end order-1 md:order-2 overflow-hidden bg-[#0a1d37] relative">
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={heroBg} 
            alt="Candidate Kim Sang-dong" 
            referrerPolicy="no-referrer"
            className="w-full max-w-[90vw] md:w-auto h-[400px] sm:h-[500px] md:h-[80vh] lg:h-[90vh] object-contain md:object-contain object-bottom pointer-events-none relative z-20"
          />
        </div>
      </div>
    </header>

  </main>
);

const AcademicPage = () => (
  <div className="pt-32 pb-24 px-6 md:px-10 min-h-screen bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-4xl md:text-7xl font-serif text-slate-900 font-bold mb-6 tracking-tighter">학력 사항</h2>
        <div className="h-2 w-24 bg-primary-red" />
      </div>

      <div className="max-w-3xl">
        <div className="flex items-center gap-6 mb-16">
          <div className="w-16 h-16 bg-primary-red text-white flex items-center justify-center">
            <GraduationCap size={32} />
          </div>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">학문적 토대</h3>
        </div>
        
        <div className="space-y-12">
          {ACADEMIC_INFO.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex gap-8">
                <div className="text-primary-red font-black text-lg opacity-30 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary-red transition-colors">{item.school}</h4>
                  {item.detail && (
                    <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">{item.detail}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CareerPage = () => (
  <div className="pt-32 pb-24 px-6 md:px-10 min-h-screen bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-4xl md:text-7xl font-serif text-slate-900 font-bold mb-6 tracking-tighter">주요 경력</h2>
        <div className="h-2 w-24 bg-primary-red" />
      </div>

      <div className="max-w-4xl">
        <div className="flex items-center gap-6 mb-16">
          <div className="w-16 h-16 bg-slate-900 text-white flex items-center justify-center">
            <Briefcase size={32} />
          </div>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">검증된 리더십</h3>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          {CAREER_INFO.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-50 border-l-8 border-slate-900 hover:border-primary-red hover:bg-white hover:shadow-2xl transition-all group"
            >
              <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary-red transition-colors">{item.pos}</h4>
              {item.detail && (
                <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">{item.detail}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Philosophy = () => (
  <div className="pt-32 pb-24 px-10 min-h-screen bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <span className="text-primary-red font-black tracking-[0.2em] uppercase text-[10px] block mb-4">교육 철학</span>
        <h2 className="text-3xl md:text-5xl font-serif text-slate-900 font-bold mb-6 italic">“지방 교육의 성공이 곧 대한민국의 성공입니다”</h2>
        <div className="h-1 w-20 bg-primary-red mx-auto mt-8" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: '실용 존중', desc: '이론에 매몰되지 않고 현장에서 작동하는 실용적인 교육 정책을 지향합니다.', icon: <Target /> },
          { title: '수학적 논리', desc: '박사 학습의 정점인 수학적 정합성을 교육 행정에 도입하여 낭비 없는 정책을 수행합니다.', icon: <Award /> },
          { title: '지역 밀착', desc: '상주 출생의 정체성을 바탕으로 지방 교육의 자생력을 키우는 데 집중합니다.', icon: <MapPin /> },
          { title: '지속 가능성', desc: '미래 세대까지 아우르는 긴 호흡의 교육 생태계를 구축합니다.', icon: <Shield /> }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 shadow-sm hover:shadow-xl transition-all group border-b-2 border-transparent hover:border-primary-red">
            <div className="text-primary-red mb-6 w-12 h-12 bg-slate-50 flex items-center justify-center rounded-lg">{item.icon}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Achievements = ({ achievements }: { achievements: Achievement[] }) => (
  <div className="pt-32 pb-24 px-10 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20">
        <span className="text-primary-red font-black tracking-[0.2em] uppercase text-[10px] block mb-4">주요 성과</span>
        <h2 className="text-3xl md:text-5xl font-serif text-slate-900 font-bold mb-4 tracking-tighter">실천으로 증명하는<br/> 확실한 성과</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((a) => (
          <div key={a.id} className="bg-white border border-slate-100 p-8 flex flex-col shadow-sm hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary-red px-2 py-1 bg-red-50">{a.category}</span>
            </div>
            <h3 className="text-xl font-serif text-slate-900 mb-8 font-bold leading-snug">{a.title}</h3>
            <div className="space-y-6 flex-1">
              <div className="text-sm text-slate-500 font-medium">
                <span className="text-slate-900 font-bold uppercase block mb-1 text-[10px]">문제 의식</span>
                {a.problem}
              </div>
              <div className="text-sm text-slate-500 font-medium">
                <span className="text-slate-900 font-bold uppercase block mb-1 text-[10px]">실행 결과</span>
                <span className="text-primary-red font-bold">{a.result}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Pledges = () => (
  <div className="pt-32 pb-24 px-10 min-h-screen bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20">
        <span className="text-primary-red font-black tracking-[0.2em] uppercase text-[10px] block mb-4">비전 2026</span>
        <h2 className="text-2xl md:text-5xl font-serif font-bold mb-8 italic leading-[1.2] md:leading-tight">“경북 교육의<br/>새로운 지방 시대를 열겠습니다”</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {INITIAL_PLEDGES.map((p, i) => (
          <div key={p.id} className="p-8 bg-white/5 border border-white/10 hover:border-primary-red transition-all group">
            <div className="text-primary-red font-black text-xl mb-4 italic">0{i+1}.</div>
            <h3 className="text-2xl font-serif font-bold mb-4">{p.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed font-medium">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [heroBg, setHeroBg] = useState('https://artifact.mshcdn.com/posts/abs-327702811/artifact_image_1745583858_328.png');
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [newAchievement, setNewAchievement] = useState<Partial<Achievement>>({});

  useEffect(() => {
    const savedAchievements = localStorage.getItem('edu_achievements_ksd');
    if (savedAchievements) {
      setAchievements(JSON.parse(savedAchievements));
    } else {
      setAchievements(INITIAL_ACHIEVEMENTS);
    }

    const savedBg = localStorage.getItem('edu_hero_bg_ksd');
    if (savedBg) {
      setHeroBg(savedBg);
    }
  }, []);

  const saveAchievements = (updated: Achievement[]) => {
    setAchievements(updated);
    localStorage.setItem('edu_achievements_ksd', JSON.stringify(updated));
  };

  const saveHeroBg = (url: string) => {
    setHeroBg(url);
    localStorage.setItem('edu_hero_bg_ksd', url);
  };

  const handleAdminAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '7777') {
      setIsAuthorized(true);
    } else {
      alert('비밀번호가 올바르지 않습니다.');
    }
  };

  const addAchievement = () => {
    const item: Achievement = {
      id: Date.now().toString(),
      category: newAchievement.category || '기타',
      title: newAchievement.title || '새 성과',
      problem: newAchievement.problem || '',
      execution: newAchievement.execution || '',
      result: newAchievement.result || '',
      imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop'
    };
    saveAchievements([...achievements, item]);
    setNewAchievement({});
  };

  const deleteAchievement = (id: string) => {
    saveAchievements(achievements.filter(a => a.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Nav onAdminClick={() => setIsAdminOpen(true)} />
      
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home heroBg={heroBg} />} />
          <Route path="/academic" element={<AcademicPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/achievements" element={<Achievements achievements={achievements} />} />
          <Route path="/pledges" element={<Pledges />} />
        </Routes>
      </div>

      <Footer />

      {/* Admin Modal */}
      <AnimatePresence>
        {isAdminOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="bg-primary-red p-6 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                  <Settings size={16} />
                  <h2 className="text-xl font-serif font-bold uppercase tracking-widest">관리자 설정</h2>
                </div>
                <button onClick={() => {setIsAdminOpen(false); setIsAuthorized(false); setPassword('');}}>
                  <X size={24} />
                </button>
              </div>

              {!isAuthorized ? (
                <div className="p-12 text-center">
                  <h3 className="text-2xl font-serif font-bold mb-6">관리자 전용 로그인</h3>
                  <form onSubmit={handleAdminAuth} className="max-w-xs mx-auto">
                    <input 
                      type="password" 
                      placeholder="••••" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border-b-2 border-slate-900 py-3 text-3xl tracking-[1em] focus:outline-none mb-8 text-center"
                    />
                    <button type="submit" className="w-full bg-slate-900 text-white py-4 font-black uppercase">인증 및 로그인</button>
                  </form>
                </div>
              ) : (
                <div className="flex-1 flex overflow-hidden">
                  <div className="w-1/3 p-8 overflow-y-auto bg-slate-50 border-r border-slate-100">
                    <section className="mb-12">
                      <h3 className="text-[10px] uppercase font-black text-primary-red mb-4">사이트 환경 설정</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-2">메인 배경 이미지</label>
                          <div className="flex flex-col gap-3">
                            {heroBg && (
                              <div className="w-full h-32 bg-slate-200 overflow-hidden border border-slate-200">
                                <img src={heroBg} alt="Preview" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                              </div>
                            )}
                            <div className="flex gap-2">
                              <input 
                                id="hero-upload"
                                type="file" 
                                accept="image/*"
                                className="hidden" 
                                onChange={e => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                      const base64String = reader.result as string;
                                      saveHeroBg(base64String);
                                    };
                                    reader.readAsDataURL(file);
                                  }
                                }} 
                              />
                              <label 
                                htmlFor="hero-upload"
                                className="flex-1 bg-slate-900 text-white text-center py-2 text-xs font-bold cursor-pointer hover:bg-primary-red transition-colors"
                              >
                                사진 업로드
                              </label>
                              <button 
                                onClick={() => {
                                  const newUrl = prompt('이미지 주소(URL)를 직접 입력하세요:', heroBg);
                                  if (newUrl) saveHeroBg(newUrl);
                                }}
                                className="px-4 border border-slate-900 text-slate-900 text-[10px] font-bold hover:bg-slate-900 hover:text-white transition-colors"
                              >
                                URL 입력
                              </button>
                            </div>
                            <p className="text-[9px] text-slate-400 italic">* 고해상도 이미지는 로딩이 느려질 수 있습니다.</p>
                          </div>
                        </div>
                      </div>
                    </section>

                    <h3 className="text-[10px] uppercase font-black text-primary-red mb-8">주요 실적 추가</h3>
                    <div className="space-y-6">
                      <input className="w-full border-b py-2 outline-none text-sm" placeholder="카테고리" value={newAchievement.category || ''} onChange={e => setNewAchievement({...newAchievement, category: e.target.value})} />
                      <input className="w-full border-b py-2 outline-none text-sm" placeholder="제목" value={newAchievement.title || ''} onChange={e => setNewAchievement({...newAchievement, title: e.target.value})} />
                      <textarea className="w-full border p-3 text-xs" placeholder="문제 상황" value={newAchievement.problem || ''} onChange={e => setNewAchievement({...newAchievement, problem: e.target.value})} />
                      <textarea className="w-full border p-3 text-xs" placeholder="수행 및 해결 노력" value={newAchievement.execution || ''} onChange={e => setNewAchievement({...newAchievement, execution: e.target.value})} />
                      <input className="w-full border-b py-2 outline-none text-sm" placeholder="성과 및 결과" value={newAchievement.result || ''} onChange={e => setNewAchievement({...newAchievement, result: e.target.value})} />
                      <button onClick={addAchievement} className="w-full bg-primary-red text-white py-4 font-black flex items-center justify-center gap-2">
                        <Plus size={18} /> 실적 정보 추가
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 p-8 overflow-y-auto">
                     <h3 className="text-[10px] uppercase font-black text-slate-400 mb-8">실적 항목 관리</h3>
                     <div className="space-y-4">
                       {achievements.map((item) => (
                         <div key={item.id} className="p-5 border border-slate-100 flex justify-between items-center group hover:border-primary-red border-l-4">
                           <div>
                             <div className="text-[10px] text-primary-red font-black uppercase">{item.category}</div>
                             <div className="font-serif font-bold text-slate-900">{item.title}</div>
                           </div>
                           <button onClick={() => deleteAchievement(item.id)} className="text-slate-300 hover:text-red-500">
                             <Trash2 size={20} />
                           </button>
                         </div>
                       ))}
                     </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
