# Typography Tokens

> 토스 디자인 시스템 (TDS) 기반 타이포그래피 정의

## 개요

Typography는 디자인 시스템의 핵심 요소로, 텍스트의 가독성을 보장하고 일관된 방향성을 유지하며 브랜드 아이덴티티를 전달합니다.

**중요**: 아래 표에 나온 값을 직접 하드코딩하지 않길 권장합니다. 토큰을 그대로 사용하면 "더 큰 텍스트" 모드에서도 유연하게 대응할 수 있습니다.

---

## 폰트 패밀리

| Token | Value | Usage |
|-------|-------|-------|
| font-toss | 'Toss Product Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif | 토스 제품 기본 폰트 |
| font-sans | 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif | 일반 산세리프 |
| font-mono | 'Toss Face Mono', 'JetBrains Mono', 'Fira Code', monospace | 코드, 숫자 |

---

## 타입 스케일 (Type Scale)

### TDS Typography 토큰

토스는 계층화된 토큰 시스템을 사용합니다. 사용자는 구체적인 폰트 크기를 외울 필요 없이 토큰을 사용합니다.

| Token | Size (기본) | Line Height | Weight | Usage |
|-------|-------------|-------------|--------|-------|
| typography-1 | 30px | 38px | Bold | Display, Hero |
| typography-2 | 26px | 34px | Bold | Page Title |
| typography-3 | 24px | 32px | Bold | Section Title |
| typography-4 | 22px | 30px | Semibold | Large Heading |
| typography-5 | 20px | 28px | Semibold | Heading |
| typography-6 | 18px | 26px | Semibold | Subheading |
| typography-7 | 17px | 24px | Medium | Large Body |
| typography-8 | 16px | 24px | Regular | Body (기본) |
| typography-9 | 15px | 22px | Regular | Body Small |
| typography-10 | 14px | 20px | Regular | Caption |
| typography-11 | 13px | 18px | Regular | Small Caption |
| typography-12 | 12px | 16px | Regular | Label, Badge |
| typography-13 | 11px | 14px | Medium | Micro |

---

## Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| weight-regular | 400 | Body text, 기본 콘텐츠 |
| weight-medium | 500 | 강조, 버튼, 레이블 |
| weight-semibold | 600 | Subheading, 중요 강조 |
| weight-bold | 700 | Heading, 타이틀 |

---

## Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| leading-tight | 1.2 | Heading, 컴팩트 텍스트 |
| leading-snug | 1.35 | Subheading |
| leading-normal | 1.5 | Body text (기본) |
| leading-relaxed | 1.6 | 편안한 읽기 |

---

## Text Styles (Presets)

### Headings

| Style | Token | Weight | Letter Spacing | Usage |
|-------|-------|--------|----------------|-------|
| display | typography-1 | Bold | -0.02em | Hero 섹션 |
| title-1 | typography-2 | Bold | -0.02em | 페이지 타이틀 |
| title-2 | typography-3 | Bold | -0.01em | 섹션 타이틀 |
| title-3 | typography-4 | Semibold | -0.01em | 서브섹션 |
| headline | typography-5 | Semibold | 0 | 카드 제목 |
| subheadline | typography-6 | Semibold | 0 | 소제목 |

### Body

| Style | Token | Weight | Letter Spacing | Usage |
|-------|-------|--------|----------------|-------|
| body-1 | typography-7 | Regular | 0 | Large body |
| body-2 | typography-8 | Regular | 0 | 기본 본문 |
| body-3 | typography-9 | Regular | 0 | Small body |

### Caption & Label

| Style | Token | Weight | Letter Spacing | Usage |
|-------|-------|--------|----------------|-------|
| caption-1 | typography-10 | Regular | 0 | 캡션 |
| caption-2 | typography-11 | Regular | 0.01em | 작은 캡션 |
| label | typography-12 | Medium | 0.02em | 레이블, 뱃지 |
| micro | typography-13 | Medium | 0.02em | 아주 작은 텍스트 |

### Button

| Size | Token | Weight | Letter Spacing |
|------|-------|--------|----------------|
| xlarge | typography-8 (16px) | Medium | 0 |
| large | typography-9 (15px) | Medium | 0 |
| medium | typography-10 (14px) | Medium | 0 |
| small | typography-11 (13px) | Medium | 0 |

---

## 더 큰 텍스트 (Accessibility)

iOS와 Android에서 제공하는 접근성 설정으로, 사용자가 텍스트 크기를 조정할 수 있습니다.

### iOS 더 큰 텍스트 비율

| 설정 | 비율 |
|------|------|
| Default | 100% |
| xLarge | 117% |
| xxLarge | 133% |
| xxxLarge | 150% |

### Android 더 큰 텍스트

Android는 100% 이상의 모든 값을 지원합니다.

**계산 공식**: `기본 크기 × 비율 × 0.01`

예) typography-1 (30px)에서 110% 설정 시: `30 × 110 × 0.01 = 33px`

---

## 사용 가이드

### 계층 구조

1. 페이지당 하나의 `display` 또는 `title-1` 사용
2. Heading 레벨을 건너뛰지 않기 (title-1 → title-3 ❌)
3. 본문은 `body-2` (typography-8) 기본 사용
4. Display 스타일은 Hero 섹션에만 사용

### 접근성

- 최소 본문 텍스트 크기: 16px (typography-8)
- 터치 타겟 레이블 최소: 14px (typography-10)
- 텍스트와 배경 간 충분한 대비 확보
- font-weight만으로 의미 전달하지 않기

### 반응형 고려사항

- 모바일에서는 Heading 크기 축소 고려
- 가독성 있는 줄 길이 유지 (45-75자)
- 작은 화면에서 line-height 증가

---

## 출처

- [TDS Mobile Typography](https://tossmini-docs.toss.im/tds-mobile/foundation/typography)
