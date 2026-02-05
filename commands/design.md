---
name: pencil-design
description: Pencil.dev 캔버스에서 새 디자인을 생성합니다. 디자인 디스크립션을 기반으로 UI를 만들거나, 프롬프트로 직접 생성할 수 있습니다.
argument-hint: '"로그인 화면 만들어줘" 또는 "design/specs/feature.md" — Pencil 캔버스에 새 UI 디자인 생성'
allowed-tools:
  - Read
  - Write
  - Glob
  - Bash
  - mcp__pencil__*
---

# Design Command

Pencil.dev 캔버스에서 새 디자인을 생성하는 커맨드입니다.

## 사용 방법

### 1. 디자인 디스크립션으로 생성

디자인 스펙 파일이 있는 경우:

```
/pencil-design design/specs/feature-login.md
```

1. 스펙 파일을 읽어 요구사항 파악
2. 디자인 시스템 토큰 참조
3. Pencil 캔버스에 디자인 생성

### 2. 프롬프트로 직접 생성

```
/pencil-design 로그인 화면 만들어줘
```

1. 사용자 요청 분석
2. 필요시 디자인 시스템 참조
3. Pencil 캔버스에 디자인 생성

## 실행 단계

### Step 1: 입력 분석

인자가 파일 경로인지 프롬프트인지 판단:

- `.md` 확장자 또는 `design/specs/` 경로 → 스펙 파일로 처리
- 그 외 → 직접 프롬프트로 처리

### Step 2: 디자인 시스템 확인

프로젝트에 디자인 시스템이 있는지 확인:

```bash
ls design/system/tokens/
```

있으면 토큰 값을 참조하여 일관된 디자인 생성.

### Step 3: Pencil 캔버스 생성

Pencil MCP 도구를 사용하여 캔버스 열기 및 디자인 생성:

1. "Open pencil canvas" 명령으로 캔버스 활성화
2. 디자인 요소들을 캔버스에 배치
3. 스타일 및 레이아웃 적용

### Step 4: .pen 파일 저장

생성된 디자인을 적절한 위치에 저장:

- 화면 디자인: `.pen/screens/{name}.pen`
- 컴포넌트: `.pen/components/{name}.pen`

## 디자인 시스템 통합

디자인 생성 시 다음 토큰 파일들을 참조:

- `design/system/tokens/colors.md` - 색상 팔레트
- `design/system/tokens/typography.md` - 타이포그래피 스케일
- `design/system/tokens/spacing.md` - 스페이싱 시스템

## 예시

### 스펙 파일 기반

```
/pencil-design design/specs/feature-dashboard.md
```

→ 대시보드 스펙을 읽고 해당 디자인 생성

### 간단한 프롬프트

```
/pencil-design 사용자 프로필 카드 컴포넌트
```

→ 디자인 시스템 기반 프로필 카드 생성

### 상세 프롬프트

```
/pencil-design 이메일과 비밀번호 입력이 있는 로그인 폼, 소셜 로그인 버튼 포함
```

→ 상세 요구사항 반영한 로그인 폼 생성

## 출력

- 생성된 디자인의 .pen 파일 경로
- 사용된 디자인 토큰 요약
- 캔버스에서 확인 가능한 안내
