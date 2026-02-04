# 요구사항 명세서

## 개인 포트폴리오 웹사이트 기능 명세서

### 1. 개요

* **목적:** 개인 역량 홍보 및 프로젝트 결과물 전시
* **형태:** 싱글 페이지 애플리케이션(SPA) 스타일의 1페이지 웹사이트
* **디자인 컨셉:** 미니멀리즘, 다크 모드 지원, 부드러운 스크롤 애니메이션

---

### 2. 주요 섹션 및 기능 명세

| 섹션 | 기능 요건 | 상세 설명 |
| --- | --- | --- |
| **GNB (Header)** | 고정 메뉴 (Sticky) | 로고 및 메뉴 클릭 시 해당 섹션으로 부드러운 이동 (Smooth Scrolling) |
| **Hero (Intro)** | 타이포그래피 애니메이션 | 핵심 문구(Catchphrase)가 나타나는 Fade-in 효과 |
| **About Me** | 프로필 데이터 렌더링 | 사진, 이름, 이력, 학력 등 기본 정보 표시 |
| **Tech Stack** | 아이콘 그리드 | 사용 가능한 기술 스택을 카테고리별(Frontend, Backend 등) 분류 |
| **Projects** | 카드형 리스트 & 모달 | 프로젝트 썸네일, 설명, 링크 포함. 클릭 시 상세 내용 팝업(Modal) |
| **Contact** | 이메일 전송 API 연동 | `EmailJS` 등을 활용하여 백엔드 없이 메일 전송 기능 구현 |

---

### 3. 기술적 세부 요구사항

* **반응형 웹 (Responsive):**
* 데스크톱, 태블릿, 모바일 환경에 최적화된 레이아웃 제공.
* 모바일 환경에서는 GNB를 햄버거 메뉴로 전환.


* **인터랙션 (Interaction):**
* **Intersection Observer API:** 스크롤 시 각 섹션이 화면에 들어올 때 애니메이션 실행.
* **Hover Effect:** 프로젝트 카드 및 버튼에 마우스 오버 시 스케일 업 효과.


* **성능 최적화:**
* 이미지 지연 로딩 (Lazy Loading) 적용.
* 웹 폰트 최적화를 통한 초기 로딩 속도 단축.



---

### 4. 프로젝트 카드 상세 구조 (Data Model)

개발 시 각 프로젝트는 아래의 객체 구조를 가집니다.

```json
{
  "id": 1,
  "title": "프로젝트명",
  "period": "2024.01 - 2024.02",
  "tags": ["React", "TypeScript", "Node.js"],
  "description": "프로젝트에 대한 핵심 설명",
  "link": {
    "github": "URL",
    "demo": "URL"
  }
}

```

---

### 5. 실행 및 배포

```bash
npm install
npm run dev   # 개발 서버 (http://localhost:3000)
npm run build # 프로덕션 빌드
npm start     # 프로덕션 실행
```

**Contact 폼 (EmailJS):** `.env.example`을 참고해 `.env.local`에 `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`를 설정하면 Contact 섹션에서 이메일 전송이 동작합니다. [EmailJS](https://www.emailjs.com/)에서 서비스·템플릿을 생성한 뒤 값으로 설정하면 됩니다.

