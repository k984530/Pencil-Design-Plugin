---
name: Design Description
description: This skill should be used when the user asks to "write a design spec", "create design description", "document UI requirements", "describe a screen design", "write Pencil.dev prompt", or mentions design documentation, UI specifications, or feature design briefs for Pencil.dev canvas.
version: 1.0.0
---

# Design Description Writing

Provides guidance for writing structured design descriptions that effectively communicate UI requirements for Pencil.dev canvas. Design descriptions bridge product requirements and visual implementation.

## Purpose

Design descriptions serve as:
1. **Input for Pencil.dev**: Clear prompts for AI-assisted design generation
2. **Documentation**: Record of design decisions and requirements
3. **Communication**: Shared understanding between designers and developers

## File Organization

Store design descriptions in `design/specs/`:

```
design/
└── specs/
    ├── feature-login.md
    ├── feature-dashboard.md
    └── feature-settings.md
```

### Naming Convention

```
{type}-{feature-name}.md

Types:
- feature-*  : New feature designs
- update-*   : Updates to existing screens
- component-*: Component-level designs
```

## Design Description Format

Every design description follows this structure with YAML frontmatter and markdown body.

### Basic Template

```markdown
---
title: Feature Name
target_screen: path/to/screen.pen
created_at: YYYY-MM-DD
status: draft
---

## 사용자 스토리

[사용자 관점에서 이 화면이 해결하는 문제]

## UI 요구사항

[화면에 포함될 요소와 레이아웃]

## 디자인 토큰 참조

[사용할 색상, 타이포그래피, 스페이싱]
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Feature or screen name |
| `target_screen` | Yes | Path to .pen file |
| `created_at` | Yes | Creation date (YYYY-MM-DD) |
| `status` | Yes | draft / review / approved |
| `author` | No | Creator name |
| `reviewers` | No | List of reviewers |
| `related_specs` | No | Related design specs |
| `figma_link` | No | Reference Figma link |

### Status Values

| Status | Meaning |
|--------|---------|
| `draft` | Initial writing, work in progress |
| `review` | Ready for feedback |
| `approved` | Finalized, ready for implementation |
| `implemented` | Design completed in Pencil |

## Section Guidelines

### 1. 사용자 스토리 (User Story)

Describe the user's goal and context:

```markdown
## 사용자 스토리

사용자로서, 나는 이메일과 비밀번호로 로그인하여
내 계정에 안전하게 접근하고 싶다.

### 사용자 목표
- 빠르게 로그인하기
- 비밀번호 분실 시 복구하기
- 소셜 로그인 옵션 사용하기

### 진입 경로
- 앱 첫 실행 시
- 로그아웃 후
- 세션 만료 시
```

### 2. UI 요구사항 (UI Requirements)

Define screen elements and layout:

```markdown
## UI 요구사항

### 화면 구성

#### 헤더 영역
- 로고 (중앙 정렬)
- 뒤로가기 버튼 (좌측, 선택적)

#### 메인 영역
- 환영 메시지 (h1)
- 이메일 입력 필드
  - 라벨: "이메일"
  - 플레이스홀더: "example@email.com"
  - 유효성 검사: 이메일 형식
- 비밀번호 입력 필드
  - 라벨: "비밀번호"
  - 보기/숨기기 토글
- 로그인 버튼 (Primary, Full width)
- 비밀번호 찾기 링크

#### 푸터 영역
- 소셜 로그인 구분선
- 소셜 로그인 버튼들 (Google, Apple)
- 회원가입 링크

### 레이아웃
- 최대 너비: 400px
- 중앙 정렬
- 패딩: space-6 (24px)
```

### 3. 디자인 토큰 참조 (Design Tokens)

Reference tokens from design system:

```markdown
## 디자인 토큰 참조

### 색상
- 배경: `background` (#FFFFFF)
- 주요 버튼: `primary` (#3B82F6)
- 텍스트: `text-primary` (#111827)
- 라벨: `text-secondary` (#6B7280)
- 에러: `error` (#EF4444)

### 타이포그래피
- 제목: `text-2xl` / `weight-bold`
- 본문: `text-base` / `weight-normal`
- 라벨: `text-sm` / `weight-medium`
- 링크: `text-sm` / `weight-normal`

### 스페이싱
- 섹션 간격: `space-8` (32px)
- 요소 간격: `space-4` (16px)
- 입력 필드 간격: `space-3` (12px)
```

## Pencil.dev Canvas Integration

### Converting to Pencil Prompts

Design descriptions convert to Pencil canvas prompts:

```markdown
## Pencil 프롬프트

"Create a login screen with:
- Centered logo at top
- Welcome heading 'Welcome back'
- Email input field with label
- Password input with show/hide toggle
- Primary full-width login button
- 'Forgot password?' link below
- Social login section with Google and Apple buttons
- 'Sign up' link at bottom

Use blue (#3B82F6) for primary actions,
gray (#6B7280) for secondary text.
Maximum width 400px, centered layout."
```

### Referencing .pen Files

Link design descriptions to canvas files:

```markdown
---
target_screen: .pen/screens/login.pen
---

## 관련 .pen 파일

- 메인 화면: `.pen/screens/login.pen`
- 컴포넌트: `.pen/components/input-field.pen`
- 컴포넌트: `.pen/components/social-button.pen`
```

## Best Practices

### Writing Effective Descriptions

1. **Be Specific**: Avoid vague terms like "nice" or "modern"
2. **Use Measurements**: Reference exact token values
3. **Define States**: Include hover, error, loading states
4. **Consider Edge Cases**: Empty states, long text, errors

### Completeness Checklist

- [ ] User story defines clear goal
- [ ] All UI elements listed
- [ ] Layout structure defined
- [ ] Design tokens referenced
- [ ] States described (default, hover, error, etc.)
- [ ] Edge cases addressed
- [ ] Target .pen file specified

### Common Mistakes

| ❌ Avoid | ✅ Prefer |
|----------|----------|
| "Make it look good" | Specific visual requirements |
| "Use blue color" | "`primary` (#3B82F6)" |
| "Add some spacing" | "`space-4` (16px) gap" |
| "Standard button" | "Primary variant, md size" |

## Additional Resources

### Templates

Ready-to-use templates:
- **`templates/feature-spec-template.md`** - Full feature specification
- **`templates/screen-spec-template.md`** - Single screen specification
- **`templates/component-spec-template.md`** - Component specification

### References

Detailed guides:
- **`references/writing-guidelines.md`** - Detailed writing best practices
- **`references/prompt-patterns.md`** - Effective Pencil.dev prompt patterns
