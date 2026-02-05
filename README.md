# Pencil Design Plugin

[![Claude Code Plugin](https://img.shields.io/badge/Claude%20Code-Plugin-blue)](https://claude.ai/code)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Pencil.dev를 활용한 AI 디자인 워크플로우 플러그인입니다.

## 기능

- **디자인 시스템 관리**: 토큰, 컴포넌트 스펙, 이미지/스크린샷 관리
- **레퍼런스 구성**: 무드보드, 영감 이미지 정리
- **디자인 디스크립션 작성**: Pencil.dev에 전달할 구조화된 디자인 명세서 작성
- **Pencil.dev 연동**: MCP를 통한 캔버스 직접 조작

## 설치

### 방법 1: 마켓플레이스를 통한 설치 (권장)

Claude Code에서 다음 명령어를 실행하세요:

```bash
# 1. 마켓플레이스 추가
/plugin marketplace add k984530/Pencil-Design-Plugin

# 2. 플러그인 설치
/plugin install pencil-design@pencil-design-marketplace
```

### 방법 2: 직접 설치

```bash
# GitHub에서 직접 추가
/plugin add https://github.com/k984530/Pencil-Design-Plugin
```

### 방법 3: 로컬 설치 (개발용)

```bash
git clone https://github.com/k984530/Pencil-Design-Plugin.git
claude --plugin-dir ./Pencil-Design-Plugin
```

## 사용법

### 커맨드

| 커맨드 | 설명 |
|--------|------|
| `/pencil-design` | Pencil 캔버스에서 새 디자인 생성 |
| `/pencil-add-reference` | 레퍼런스/무드보드 이미지 추가 |
| `/pencil-design-system` | 디자인 시스템 조회/관리 |
| `/pencil-open-canvas` | Pencil 캔버스 열기 |

### 스킬

- **design-system**: 디자인 시스템 폴더 구조 및 토큰 정의 방법 안내
- **design-description**: 디자인 디스크립션 작성 형식 및 베스트 프랙티스

### 에이전트

- **design-spec-writer**: 요구사항을 분석하여 Pencil.dev용 디자인 디스크립션 자동 생성

## 프로젝트 구조

플러그인 사용 시 프로젝트에 생성되는 디자인 폴더 구조:

```
your-project/
├── .pen/                       # Pencil.dev 디자인 파일
│   ├── screens/
│   │   ├── home.pen
│   │   └── dashboard.pen
│   └── components/
│       └── button.pen
├── design/
│   ├── system/                 # 디자인 시스템
│   │   ├── tokens/
│   │   │   ├── colors.md
│   │   │   ├── typography.md
│   │   │   └── spacing.md
│   │   ├── components/
│   │   │   ├── button.md
│   │   │   └── card.md
│   │   └── assets/
│   │       └── button-variants.png
│   ├── references/             # 레퍼런스/무드보드
│   │   ├── moodboard/
│   │   │   └── inspiration-01.png
│   │   └── benchmarks/
│   │       └── competitor-analysis.md
│   └── specs/                  # 디자인 디스크립션
│       └── feature-login.md
└── ...
```

## 디자인 디스크립션 형식

디자인 디스크립션은 다음 필드를 포함합니다:

```markdown
---
title: 기능명
target_screen: 화면 경로
created_at: YYYY-MM-DD
status: draft | review | approved
---

## 사용자 스토리
[사용자가 달성하려는 목표]

## UI 요구사항
[화면 구성 요소 및 레이아웃]

## 디자인 토큰 참조
[사용할 색상, 타이포그래피, 스페이싱 등]
```

## 요구사항

- Node.js 18+
- Pencil.dev 앱 (Mac/Linux)
- Claude Code

## 라이선스

MIT
