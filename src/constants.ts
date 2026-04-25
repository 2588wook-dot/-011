import { Achievement, Activity, Pledge } from './types';

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    category: '교육 행정 혁신',
    title: '경북대학교 미래 융합 교육 모델 정립',
    problem: '학문 간 장벽 및 전통적 전공 교육의 한계',
    execution: '융합학과 신설 및 유연 학사 제도 도입',
    result: '전국 거점 국립대 교육 혁신 평가 최우수 등급 달성',
    imageUrl: 'https://images.unsplash.com/photo-1523050335392-9bc5675e7838?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    category: '지역 상생 발전',
    title: '지방 시대 선도형 고등 교육 생태계 구축',
    problem: '지역 인재 유출 및 지방 대학 위기 가속화',
    execution: '지역 산업 연계 특성화 커리큘럼 및 취업 지원 강화',
    result: '지역 내 취업률 25% 향상 및 지자체-대학 협력 모델 안착',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756cdfb3f?q=80&w=800&auto=format&fit=crop'
  }
];

export const INITIAL_ACTIVITIES: Activity[] = [
  {
    id: '1',
    title: '현장 방문',
    description: '경상북도 곳곳의 교육 현장을 방문하여 실질적인 고충을 경청합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: '청년 간담회',
    description: '지역의 미래인 청년들과 소통하며 지방 시대를 열어갈 비전을 공유합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: '지방시대 위원회 활동',
    description: '지방 균형 발전을 위한 정책을 수립하고 실행 대안을 제시합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1577416414929-7a1ed2f98bd8?q=80&w=800&auto=format&fit=crop'
  }
];

export const INITIAL_PLEDGES: Pledge[] = [
  {
    id: '1',
    title: '지방 교육 시대 개막',
    description: '지역 특성을 반영한 자율적이고 창의적인 교육 자치 실현'
  },
  {
    id: '2',
    title: '디지털 미래 인재 양성',
    description: '모든 학생이 AI와 공존하는 시대의 리더가 될 수 있는 교육 지원'
  },
  {
    id: '3',
    title: '지역 인재 정주 여건 개선',
    description: '지역에서 배우고 성장하여 지역에 뿌리 내리는 선순환 체계 구축'
  },
  {
    id: '4',
    title: '평생 교육 사각지대 해소',
    description: '전 생애 주기에 걸친 배움의 기회가 보장되는 열린 교육 실천'
  }
];

export const ACADEMIC_INFO = [
  { school: '경북 상주 외남초등학교 졸업', detail: '' },
  { school: '대구경일중학교 졸업', detail: '' },
  { school: '경북고등학교 졸업', detail: '' },
  { school: '경북대학교 문리대 수학과 졸업', detail: '' },
  { school: '서울대학교 대학원 수학과 졸업', detail: '' },
  { school: '미국 위스콘신대학교 매디슨 수학박사', detail: '(1989,01~1993,05.)' }
];

export const CAREER_INFO = [
  { pos: '경북대학교 총장(전)', detail: '' },
  { pos: '경북도립대학교 총장(전)', detail: '' },
  { pos: '경상북도 지속가능발전협의회 회장(전)', detail: '' },
  { pos: '경상북도 지방시대위원장(전)', detail: '' },
  { pos: '경상북도인재평생교육재단 대표이사(전)', detail: '' }
];
