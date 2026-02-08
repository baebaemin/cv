/** works 항목 */
export interface WorkItem {
  /** 근무 기간 */
  dateRange: string;
  /** 근무지 */
  title: string;
  /** 상세 근무 기간 */
  dateDetail: string;
  /** 링크 */
  linkHref: string;
  /** 설명 */
  description: string;
}

/** projects 항목 */
export interface ProjectItem {
  /** 프로젝트 기간 */
  dateRange: string;
  /** 프로젝트명 */
  title: string;
  /** 상세 프로젝트 기간 */
  detail: string;
  /** 상세 링크 */
  linkHref: string;
  /** 설명 */
  description: string;
  /** 역할 */
  role: string;
}

/** experience / education 공통 항목 (년도, 역할, 회사/기관) */
export interface TimelineItem {
  /** 년도 */
  year: string;
  /** 역할 */
  role: string;
  /** 회사/기관 */
  company: string;
}

/** skills 카테고리 */
export interface SkillCategory {
  /** 카테고리 */
  category: string;
  /** 스택 item */
  items: readonly string[];
}
