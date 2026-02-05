# Spacing Tokens

> 토스 디자인 시스템 (TDS) 기반 스페이싱 정의

## 개요

토스는 **4px 기반 그리드 시스템**을 사용합니다. 모든 스페이싱 값은 4의 배수로 구성되어 시각적 일관성과 정렬을 보장합니다.

---

## Base Scale

| Token | Value | Usage |
|-------|-------|-------|
| space-0 | 0px | 없음 |
| space-1 | 4px | Micro spacing, 아이콘 간격 |
| space-2 | 8px | 기본 간격, 인라인 요소 |
| space-3 | 12px | 폼 요소 패딩 |
| space-4 | 16px | 표준 패딩, 카드 내부 |
| space-5 | 20px | 중간 패딩 |
| space-6 | 24px | 섹션 패딩 |
| space-8 | 32px | 큰 패딩 |
| space-10 | 40px | Extra large |
| space-12 | 48px | 섹션 마진 |
| space-16 | 64px | 페이지 섹션 |
| space-20 | 80px | Hero 섹션 |
| space-24 | 96px | 대형 섹션 |

---

## Component Spacing

### Button

| Size | Height | Padding (h) | Padding (v) | Icon Gap |
|------|--------|-------------|-------------|----------|
| small | 32px | 12px | 8px | 4px |
| medium | 40px | 16px | 10px | 6px |
| large | 48px | 20px | 12px | 8px |
| xlarge | 56px | 24px | 16px | 8px |

### Cards

| Property | Token | Value |
|----------|-------|-------|
| Padding | space-4 ~ space-6 | 16px ~ 24px |
| Gap (내부) | space-3 ~ space-4 | 12px ~ 16px |
| Card 간 간격 | space-3 | 12px |

### Forms

| Property | Token | Value |
|----------|-------|-------|
| Input padding (h) | space-3 | 12px |
| Input padding (v) | space-3 | 12px |
| Label margin-bottom | space-2 | 8px |
| Field gap | space-4 | 16px |
| Form section gap | space-8 | 32px |

### List / ListRow

| Property | Token | Value |
|----------|-------|-------|
| Item padding (h) | space-4 | 16px |
| Item padding (v) | space-3 ~ space-4 | 12px ~ 16px |
| Item gap | 0px | Divider로 구분 |
| Content gap | space-2 ~ space-3 | 8px ~ 12px |

### Bottom Sheet

| Property | Token | Value |
|----------|-------|-------|
| Padding (h) | space-4 | 16px |
| Padding (top) | space-6 | 24px |
| Padding (bottom) | space-8 | 32px (Safe area 고려) |
| Content gap | space-4 | 16px |

---

## Layout Spacing

### Container Padding

| Breakpoint | Token | Value |
|------------|-------|-------|
| Mobile (<640px) | space-4 | 16px |
| Tablet (640-1024px) | space-6 | 24px |
| Desktop (>1024px) | space-8 | 32px |

### Section Spacing

| Property | Mobile | Desktop |
|----------|--------|---------|
| Section gap | space-12 (48px) | space-16 (64px) |
| Header height | space-14 (56px) | space-16 (64px) |
| Navigation height | space-12 (48px) | space-14 (56px) |
| Footer padding | space-8 (32px) | space-10 (40px) |

### Safe Area

| Property | Value |
|----------|-------|
| Top safe area | env(safe-area-inset-top) |
| Bottom safe area | env(safe-area-inset-bottom) |
| Bottom CTA padding | space-4 + safe-area |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| radius-none | 0px | 직각 모서리 |
| radius-xs | 4px | 뱃지, 태그 |
| radius-sm | 6px | Input, small 버튼 |
| radius-md | 8px | 버튼, 카드 |
| radius-lg | 12px | 큰 카드, 모달 |
| radius-xl | 16px | Bottom Sheet |
| radius-2xl | 20px | 대형 컨테이너 |
| radius-full | 9999px | 원형, Pill 버튼 |

---

## Shadows (Elevation)

토스는 그림자 대신 **배경색 분리**와 **보더**를 주로 사용합니다.

| Token | Value | Usage |
|-------|-------|-------|
| shadow-sm | 0 1px 2px rgba(0,0,0,0.04) | 미세한 elevation |
| shadow-md | 0 4px 8px rgba(0,0,0,0.08) | 카드 hover |
| shadow-lg | 0 8px 16px rgba(0,0,0,0.12) | Dropdown, Tooltip |
| shadow-xl | 0 12px 24px rgba(0,0,0,0.16) | Modal, Dialog |
| shadow-bottom-sheet | 0 -4px 16px rgba(0,0,0,0.12) | Bottom Sheet |

---

## Touch Targets

접근성을 위한 최소 터치 영역 규격입니다.

| Property | Value |
|----------|-------|
| 최소 터치 영역 | 44px × 44px |
| 권장 터치 영역 | 48px × 48px |
| 터치 요소 간 최소 간격 | 8px |

---

## Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| z-base | 0 | 기본 레이어 |
| z-dropdown | 100 | Dropdown, Select |
| z-sticky | 200 | Sticky header |
| z-overlay | 300 | 오버레이 배경 |
| z-modal | 400 | Modal, Dialog |
| z-bottom-sheet | 500 | Bottom Sheet |
| z-toast | 600 | Toast 알림 |
| z-tooltip | 700 | Tooltip |

---

## 사용 가이드

### 일관성

- 임의의 값 대신 항상 스페이싱 토큰 사용
- 동일 컴포넌트 유형 내에서 일관된 스페이싱 유지
- 그룹화는 작은 간격, 분리는 큰 간격 사용

### 시각적 리듬

- 관련 항목: space-2 ~ space-3 (8-12px)
- 그룹된 섹션: space-4 ~ space-6 (16-24px)
- 구분된 섹션: space-8+ (32px+)

### 반응형

- 작은 화면에서는 스페이싱 축소
- 비례 관계 유지
- 뷰포트에 적합한 컨테이너 패딩 사용

---

## 출처

- [TDS Mobile Components](https://tossmini-docs.toss.im/tds-mobile/)
