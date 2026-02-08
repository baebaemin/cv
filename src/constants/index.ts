import type { WorkItem, ProjectItem, TimelineItem, SkillCategory } from "@/types";

/** works 데이터 */
export const WORKS_DATA: WorkItem[] = [
  {
    dateRange: "2024.12 — 2025.07",
    title: "사람인 채용센터 개편",
    dateDetail: "2024.12 ~ 2025.07 런칭 / ~ 유지보수 및 운영 중",
    linkHref: "https://hiring.saramin.co.kr/home",
    description:
      "공고 등록부터 후보자 관리, 면접, 이직 제안 등 채용의 모든 과정을 관리할 수 있는 기업 side 서비스 개편 프로젝트",
  },
  {
    dateRange: "2024.07 — 2024.11",
    title: "사람인 디자인 시스템 구축",
    dateDetail: "2024.07 ~ 2024.11 구축 / ~ 유지보수 및 운영 중",
    linkHref:
      "https://www.behance.net/gallery/229253729/-(Saramin-ATS)?tracking_source=search_projects|%EC%82%AC%EB%9E%8C%EC%9D%B8+%EC%B1%84%EC%9A%A9%EC%84%BC%ED%84%B0&l=0",
    description:
      "사람인 채용센터 등 버티컬 서비스에 적용될 전사 디자인 시스템 구축 (2025.08 기준 48개의 디자인 시스템 모듈화)",
  },
  {
    dateRange: "2024.03 — 2024.05",
    title: "사람인 상품 이용 관리",
    dateDetail: "2024.03 ~ 2024.05",
    linkHref: "https://billing.saramin.co.kr/manage",
    description:
      "기업 유저가 구매한 채용 상품과 서비스 이용 현황, 결제 내역을 확인할 수 있는 서비스",
  },
];

/** projects 데이터 */
export const PROJECTS_DATA: ProjectItem[] = [
  {
    dateRange: "2023.10 — 2023.11",
    title: "ThingDong 띵동",
    detail: "2023.10.10 ~ 2023.11.17 (6주, 6명)",
    linkHref:
      "https://chemical-tungsten-1ba.notion.site/ThingDong-74132b23c18546a694a08ac12952dc8d?pvs=4",
    description:
      "3D room 안의 오브젝트들로 현실의 기기들을 제어하는 나만의 가상 공간 IoT 서비스",
    role: "프론트엔드 팀 리더",
  },
  {
    dateRange: "2023.08 — 2023.10",
    title: "COCO PAY 코코페이",
    detail: "2023.08.28 ~ 2023.10.15 (6주, 6명)",
    linkHref:
      "https://chemical-tungsten-1ba.notion.site/COCO-PAY-be7bb35760704a419cd9f1d15f17fcb2",
    description:
      "카드 결제 시, 소비자가 보유한 카드 중 소비처별 최적의 할인과 실적 현황을 비교·분석하여 합리적인 결제를 돕는 \"카드 오토체인징 페이먼츠 시스템\"",
    role: "팀 리더, 프론트엔드 팀 리더",
  },
  {
    dateRange: "2023.07 — 2023.08",
    title: "SONAGI 소나기",
    detail: "2023.07.03 ~ 2023.08.18 (7주, 6명)",
    linkHref:
      "https://chemical-tungsten-1ba.notion.site/SONAGI-74ae1cb5fa68427f9619ad06d7ad5e57",
    description:
      "부부 외에도 공동양육자가 그룹에 참여하여 함께 기록하는 육아 일기 어플리케이션",
    role: "프론트엔드 개발자",
  },
];

/** experience 데이터 */
export const EXPERIENCE_DATA: readonly TimelineItem[] = [
  { year: "2024.02 ~ 재직중", role: "Frontend Developer", company: "사람인 IT본부 FE개발팀" },
  { year: "2020.03 ~ 2022.12", role: "Co-founder", company: "Studio When" },
  { year: "2016.08 ~ 2018.12", role: "연구원", company: "안그라픽스 디지털디자인연구소" },
];

/** education 데이터 */
export const EDUCATION_DATA: readonly TimelineItem[] = [
  { year: "2023.01 ~ 2023.12", role: "SSAFY 9기", company: "삼성 청년 SW 아카데미" },
  { year: "2020.02", role: "인터랙션 디자인과 졸업", company: "한국예술종합학교 미술원" },
];

/** skills 데이터 */
export const SKILLS_DATA: readonly SkillCategory[] = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS"] },
  { category: "Frameworks", items: ["React", "Next.js", "Vue.js", "React Native"] },
  { category: "Library / Test", items: ["React Query", "Zustand", "Storybook", "MSW", "Jotai"] },
  {
    category: "Interaction / Design",
    items: ["P5.js", "Three.js", "Spline", "Figma", "Adobe Tools"],
  },
];
  