# Button

> 토스 디자인 시스템 (TDS) 기반 버튼 컴포넌트

## Overview

`Button` 컴포넌트는 사용자가 어떤 액션을 트리거하거나 이벤트를 실행할 때 사용합니다. 폼 제출, 다이얼로그 열기, 작업 취소, 삭제와 같은 다양한 액션을 처리하는 데 사용합니다.

---

## Variants

### fill

채도가 높아 시각적으로 강렬하고 눈에 띄는 디자인입니다. 주요 액션을 강조하는 데 적합합니다.

### weak

채도가 낮아 시각적으로 덜 강렬하며 부드럽고 조용한 느낌을 줍니다. 덜 중요한 액션이나 보조적인 버튼에 적합합니다. 반투명하게 디자인되어 배경색이 살짝 드러납니다.

| Variant | Description | Use Case |
|---------|-------------|----------|
| fill | 높은 채도, 강한 강조 | 주요 CTA, Submit, Confirm |
| weak | 낮은 채도, 반투명 | 보조 액션, Cancel, 덜 중요한 버튼 |

---

## Colors

| Color | Description | Use Case |
|-------|-------------|----------|
| primary | 토스 블루 (#3182F6) | 주요 액션, 긍정적 액션 |
| danger | 레드 (#F44336) | 삭제, 위험한 액션 |
| dark | 다크 그레이 (#191F28) | 강한 강조, 대체 주요 액션 |
| light | 화이트 | 다크 배경 위 버튼 |

---

## Sizes

| Size | Height | Padding (h) | Font Size | Usage |
|------|--------|-------------|-----------|-------|
| small | 32px | 12px | 13px | 컴팩트 UI, 인라인 |
| medium | 40px | 16px | 14px | 기본 버튼 |
| large | 48px | 20px | 15px | 강조 버튼 |
| xlarge | 56px | 24px | 16px | CTA, Bottom Sheet |

---

## States

### Interactive States

| State | Description | Visual Change |
|-------|-------------|---------------|
| Default | 기본 상태 | Base colors |
| Hover | 마우스 오버 | 어두운 배경 |
| Active/Pressed | 클릭/터치 중 | 가장 어두운 배경 + dim layer |
| Disabled | 비활성화 | 50% opacity, cursor: not-allowed |
| Loading | 로딩 중 | 3개 인디케이터 애니메이션 |

### Disabled State

비활성화된 버튼은 사용자가 클릭할 수 없고, 시각적으로도 비활성화된 상태임을 나타냅니다.

### Loading State

- 3개의 인디케이터가 순차적으로 움직임
- 버튼 너비 변하지 않음
- 인터랙션 비활성화

---

## Specifications

### Primary + Fill

```
Background: #3182F6 (blue-500)
Background Hover: #2272EB (blue-600)
Background Active: #1B64DA (blue-700)
Text: #FFFFFF
Border: none
Border Radius: 8px
```

### Primary + Weak

```
Background: rgba(49, 130, 246, 0.10)
Background Hover: rgba(49, 130, 246, 0.20)
Background Active: rgba(49, 130, 246, 0.30)
Text: #3182F6 (blue-500)
Border: none
Border Radius: 8px
```

### Danger + Fill

```
Background: #F44336 (red-500)
Background Hover: #E53935 (red-600)
Background Active: #D32F2F (red-700)
Text: #FFFFFF
Border: none
Border Radius: 8px
```

### Danger + Weak

```
Background: rgba(244, 67, 54, 0.10)
Background Hover: rgba(244, 67, 54, 0.20)
Text: #F44336 (red-500)
Border: none
Border Radius: 8px
```

### Dark + Fill

```
Background: #191F28 (grey-900)
Background Hover: #333D4B (grey-800)
Background Active: #4E5968 (grey-700)
Text: #FFFFFF
Border: none
Border Radius: 8px
```

### Dark + Weak

```
Background: rgba(0, 0, 0, 0.05)
Background Hover: rgba(0, 0, 0, 0.10)
Text: #191F28 (grey-900)
Border: none
Border Radius: 8px
```

### Light + Fill (다크 배경용)

```
Background: #FFFFFF
Background Hover: #F9FAFB
Text: #191F28 (grey-900)
Border: none
Border Radius: 8px
```

### Light + Weak (다크 배경용)

```
Background: rgba(255, 255, 255, 0.20)
Background Hover: rgba(255, 255, 255, 0.30)
Text: #FFFFFF
Border: none
Border Radius: 8px
```

---

## Display (형태)

버튼의 너비와 배치 방식을 설정합니다.

| Display | Description |
|---------|-------------|
| inline | 다른 요소와 나란히 배치 |
| block | 줄바꿈되어 화면 너비에 맞게 확장 |
| full | 부모 요소의 전체 너비 차지 |

---

## CSS 변수 커스터마이징

버튼 색상을 커스터마이징하려면 CSS 변수를 활용할 수 있습니다.

| Variable | Description |
|----------|-------------|
| --button-color | 버튼 텍스트 색상 |
| --button-background-color | 버튼 배경색 |
| --button-disabled-opacity-color | 비활성화 시 배경색 투명도 |
| --button-disabled-text-opacity | 비활성화 시 텍스트 투명도 |
| --button-gradient-color | 로딩 그라데이션 색상 |
| --button-loader-color | 로더 색상 |
| --button-loading-background-color | 로딩 시 딤 레이어 색상 |
| --button-loading-opacity | 로딩 시 딤 투명도 |
| --button-pressed-background-color | 눌렸을 때 딤 색상 |
| --button-pressed-opacity | 눌렸을 때 딤 투명도 |

---

## Design Tokens Used

### Colors
- `blue-500`, `blue-600`, `blue-700` (Primary)
- `red-500`, `red-600`, `red-700` (Danger)
- `grey-900`, `grey-800`, `grey-700` (Dark)
- `blue-opacity-100`, `blue-opacity-200`, `blue-opacity-300` (Primary Weak)

### Typography
- Font: `font-toss`
- Weight: `weight-medium` (500)
- Size: Varies by size prop

### Spacing
- Border Radius: 8px
- Padding: Varies by size prop

---

## Anatomy

```
┌─────────────────────────────────┐
│  [Icon]  Label Text  [Icon]     │
└─────────────────────────────────┘
     ↑          ↑          ↑
  Leading    Content    Trailing
   Icon                   Icon
```

- **Leading Icon**: Optional, 텍스트 앞
- **Label Text**: Required, 버튼 텍스트
- **Trailing Icon**: Optional, 텍스트 뒤

---

## Usage Guidelines

### ✅ Do

- 주요 액션에 primary + fill 사용
- 보조 액션에 weak variant 사용
- 영구적인 액션에만 danger 사용
- 명확하고 행동 지향적인 레이블 사용
- 의미 강화를 위해 아이콘 추가

### ❌ Don't

- 여러 primary 버튼을 함께 사용하지 않기
- 되돌릴 수 있는 액션에 danger 사용하지 않기
- 아이콘만 있는 버튼에 aria-label 없이 사용하지 않기
- 레이블에 3-4단어 이상 사용하지 않기
- 설명 없이 비활성화하지 않기

---

## Accessibility

### 기본 제공

| 속성 | 접근성 효과 |
|------|-------------|
| `button` role | 스크린 리더에서 "버튼"으로 인식 |
| `disabled` | 비활성화 상태를 스크린 리더가 읽음 |
| `loading` | `aria-busy`로 로딩 중임을 알림 |

### 추가 작업 필요

- 아이콘만 있는 버튼: `aria-label` 필수
- 링크로 사용 시: `as="a"` + `href` 속성 포함
- 로딩 중 텍스트 없을 시: `aria-label`로 작업 내용 설명

---

## Interface (Props)

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| as | 'button' | 'button' \| 'a' | 렌더링 태그 |
| color | 'primary' | 'primary' \| 'danger' \| 'light' \| 'dark' | 버튼 컬러 |
| variant | 'fill' | 'fill' \| 'weak' | 버튼 스타일 |
| display | 'inline' | 'inline' \| 'block' \| 'full' | 표시 방식 |
| size | 'xlarge' | 'small' \| 'medium' \| 'large' \| 'xlarge' | 버튼 크기 |
| loading | false | boolean | 로딩 상태 |
| disabled | false | boolean | 비활성화 상태 |

---

## Examples

### Basic Usage

```jsx
<Button color="primary" variant="fill">Primary</Button>
<Button color="dark" variant="fill">Dark</Button>
<Button color="danger" variant="fill">Danger</Button>
```

### Weak Variant

```jsx
<Button color="primary" variant="weak">Primary</Button>
<Button color="dark" variant="weak">Dark</Button>
<Button color="danger" variant="weak">Danger</Button>
```

### Sizes

```jsx
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
<Button size="xlarge">XLarge</Button>
```

### Loading State

```jsx
<Button color="primary" loading>로딩 중...</Button>
```

### Full Width (CTA)

```jsx
<Button display="full" size="xlarge">다음</Button>
```

---

## 출처

- [TDS Mobile Button](https://tossmini-docs.toss.im/tds-mobile/components/button)

---

## Change Log

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-02-04 | TDS 스타일로 초기화 |
