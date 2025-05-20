# 한결약국 온라인 몰

한결약국의 건강기능식품 전문 온라인 쇼핑몰 웹사이트입니다. 환자들이 다양한 건강기능식품을 쉽게 찾고 구매할 수 있도록 디자인되었습니다.

## GitHub Pages 주소

https://deglobalization.github.io/pharma-website/

## 주요 기능

- 다양한 건강기능식품 카테고리별 제품 구성
- 베스트셀러 및 신상품 섹션
- 전문 약사 건강 상담 서비스
- 반응형 디자인 (모바일, 태블릿, 데스크톱 지원)
- 사용자 친화적인 UI/UX

## 기술 스택

- **프론트엔드**: Next.js, TypeScript, Tailwind CSS
- **컴포넌트**: 재사용 가능한 컴포넌트 기반 설계
- **스타일링**: Tailwind CSS를 활용한 모던 UI
- **아이콘**: React Icons (Feather Icons)

## 개발 환경 설정

### 필수 조건

- Node.js 18.0.0 이상
- npm 또는 yarn 패키지 매니저

### 설치 방법

1. 저장소 클론
```bash
git clone https://github.com/deglobalization/pharma-website.git
cd pharma-website
```

2. 의존성 설치
```bash
npm install
# 또는
yarn install
```

3. 개발 서버 실행
```bash
npm run dev
# 또는
yarn dev
```

4. 브라우저에서 http://localhost:3000 접속

## 프로젝트 구조

```
pharma-website/
├── app/                    # Next.js 앱 디렉토리
│   ├── components/         # 재사용 가능한 컴포넌트
│   ├── styles/             # 스타일 관련 파일
│   ├── lib/                # 유틸리티 함수 및 상수
│   ├── globals.css         # 글로벌 CSS
│   ├── layout.tsx          # 루트 레이아웃
│   └── page.tsx            # 메인 페이지
├── public/                 # 정적 파일 (이미지, 아이콘 등)
├── package.json            # 프로젝트 의존성 및 스크립트
├── tailwind.config.js      # Tailwind CSS 설정
└── tsconfig.json           # TypeScript 설정
```

## 향후 개발 계획

- 제품 상세 페이지 구현
- 장바구니 및 결제 시스템 연동
- 회원 관리 및 로그인 시스템
- 관리자 대시보드 개발
- 제품 리뷰 및 평점 시스템
- 상담 예약 시스템

## 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다. 