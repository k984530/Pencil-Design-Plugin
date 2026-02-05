---
name: pencil-design-system
description: 현재 프로젝트의 디자인 시스템을 조회하거나 초기화합니다. 토큰, 컴포넌트 스펙, 에셋을 관리합니다.
argument-hint: '"init" 또는 "tokens" — 디자인 시스템 초기화/조회 (init, tokens, components, status)'
allowed-tools:
  - Read
  - Write
  - Glob
  - Bash
---

# Design System Command

프로젝트의 디자인 시스템을 관리하는 커맨드입니다.

## 사용 방법

### 상태 확인 (기본)

```
/pencil-design-system
```

또는

```
/pencil-design-system status
```

### 초기화

```
/pencil-design-system init
```

### 토큰 조회

```
/pencil-design-system tokens
```

### 컴포넌트 조회

```
/pencil-design-system components
```

## 서브커맨드

### `status` (기본)

디자인 시스템 현황을 요약해서 보여줌:

```
📊 디자인 시스템 상태
━━━━━━━━━━━━━━━━━━━━

📁 위치: design/system/

✅ 토큰
   ├─ colors.md (24 tokens)
   ├─ typography.md (18 tokens)
   └─ spacing.md (12 tokens)

✅ 컴포넌트
   ├─ button.md
   ├─ card.md
   └─ input.md

📷 에셋
   └─ 5 files (button-variants.png, ...)
```

### `init`

새 디자인 시스템 구조 생성:

1. 폴더 구조 생성
2. 토큰 템플릿 파일 생성
3. 컴포넌트 템플릿 생성

```bash
mkdir -p design/system/{tokens,components,assets}
```

생성되는 파일:
- `design/system/tokens/colors.md`
- `design/system/tokens/typography.md`
- `design/system/tokens/spacing.md`
- `design/system/components/button.md`

### `tokens`

정의된 토큰 목록 표시:

```
🎨 Color Tokens
━━━━━━━━━━━━━━━━━━━━
primary       #3B82F6
primary-hover #2563EB
secondary     #6B7280
...

📝 Typography Tokens
━━━━━━━━━━━━━━━━━━━━
text-xs       12px / 16px
text-sm       14px / 20px
text-base     16px / 24px
...

📏 Spacing Tokens
━━━━━━━━━━━━━━━━━━━━
space-1       4px
space-2       8px
space-4       16px
...
```

### `components`

컴포넌트 스펙 목록과 요약:

```
🧩 Components
━━━━━━━━━━━━━━━━━━━━

Button
├─ Variants: primary, secondary, ghost, destructive
├─ Sizes: sm, md, lg
└─ States: default, hover, active, disabled

Card
├─ Variants: default, elevated, outlined
└─ Slots: header, body, footer

Input
├─ Types: text, email, password, number
├─ States: default, focus, error, disabled
└─ Addons: prefix, suffix icons
```

## 실행 단계

### Step 1: 디자인 시스템 경로 확인

```bash
ls -la design/system/
```

### Step 2: 서브커맨드에 따른 처리

**status:**
- 폴더 구조 스캔
- 파일 카운트 및 요약

**init:**
- 폴더 생성
- 템플릿 파일 복사 (스킬의 templates/ 참조)

**tokens:**
- 토큰 파일들 읽기
- 파싱하여 테이블 형태로 출력

**components:**
- 컴포넌트 스펙 파일들 읽기
- variants, sizes, states 추출하여 요약

### Step 3: 결과 출력

포맷된 출력으로 가독성 높게 표시.

## 예시

### 새 프로젝트 시작

```
/pencil-design-system init
```

출력:
```
✅ 디자인 시스템 초기화 완료

생성된 파일:
├─ design/system/tokens/colors.md
├─ design/system/tokens/typography.md
├─ design/system/tokens/spacing.md
└─ design/system/components/button.md

다음 단계:
1. 토큰 파일에서 프로젝트에 맞게 값 수정
2. 필요한 컴포넌트 스펙 추가
3. /pencil-design 명령으로 디자인 생성 시 자동 참조됨
```

### 특정 토큰 확인

```
/pencil-design-system tokens
```

### 전체 상태 확인

```
/pencil-design-system status
```

## 관련 스킬

이 커맨드는 `design-system` 스킬의 지식을 활용합니다:
- 토큰 명명 규칙
- 컴포넌트 스펙 템플릿
- 폴더 구조 가이드

## 관련 명령어

- `/pencil-design` - 디자인 생성
- `/pencil-add-reference` - 레퍼런스 추가
