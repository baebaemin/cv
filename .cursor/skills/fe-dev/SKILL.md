---
name: fe-dev
description: Next.js, React, TypeScript를 사용하는 프론트엔드 개발 시 적용한다. 포트폴리오·웹 페이지 구현 시 이 스택과 네이밍 규칙을 따른다.
---

# FE-DEV

## 기술 스택

- **프레임워크·언어**: Next.js 16 (App Router), React 19, TypeScript 5
- **스타일**: SCSS, BEM 네이밍

## 지침

1. **Next.js**
   - App Router 기준. 라우트·레이아웃은 `app/` 아래에 둔다.
   - 전역 스타일은 `src/styles/` 등 한 곳에서 관리하고, `app/layout.tsx`에서 import한다.

2. **React·TypeScript**
   - 컴포넌트는 함수형 + TS. props는 인터페이스/타입으로 정의한다.
   - 페이지·공용 컴포넌트는 `app/` 또는 `app/_components/` 등 프로젝트 구조에 맞춘다.

3. **SCSS·BEM**
   - 스타일은 Tailwind가 아닌 **SCSS**로 작성한다.
   - **BEM**: 블록(Block), 요소(Element), 수식어(Modifier)로 클래스 이름을 짓는다.
   - 한 컴포넌트 = 한 블록(예: `.hero`, `.cv`, `.works`). 요소는 `블록__요소`(예: `.hero__title`, `.cv__item`).
   - SCSS 파일은 컴포넌트와 같은 위치 또는 `styles/`에 두고, 변수·믹스인은 `_variables.scss` 등으로 공유한다.

4. **컴포넌트 폴더 구조 (Barrel Pattern)**
   - 컴포넌트마다 **폴더명 = 컴포넌트명**으로 둔다.
   - **진입점 파일**: 해당 폴더의 메인은 `index.tsx`, `index.module.scss`, `type.d.ts`로 둔다.
   - **하위 전용 컴포넌트**: 그 블록에서만 쓰이고 재사용하지 않는 컴포넌트는 같은 폴더 안의 `_components/`에 둔다. 이들은 **파일명 = 컴포넌트명**으로 작성한다 (예: `ListItem.tsx`, `ListItem.module.scss`). `index.module.scss`와 `type.d.ts`는 상위 블록(index 레벨)의 것을 공유한다.

5. **기타**
   - 섹션 구성·CV/Works 데이터 구조는 프로젝트 구성 단계에서 별도로 정할 예정이므로, 이 문서에서는 스택·코딩 규칙만 고정한다.

## 예시

**컴포넌트 폴더 구조:**
```
Works/
├── index.tsx
├── container.tsx
├── index.module.scss
├── type.d.ts
└── _components/
    ├── WorksItem.tsx
    └── WorksItem.module.scss   # 상위 index.module.scss·type.d.ts 공유
```

**BEM 클래스 사용:**
```tsx
<header className="hero">
  <h1 className="hero__title">이름</h1>
  <p className="hero__subtitle">역할</p>
</header>
```

**SCSS 블록 (BEM):**
```scss
.hero {
  &__title { font-size: 1rem; }
  &__subtitle { color: #666; }
}
```

**공통 변수 (`_variables.scss`):**
```scss
$color-text: #1a1a1a;
$font-size-base: 1rem;
$breakpoint-md: 768px;
```
