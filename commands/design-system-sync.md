---
name: pencil-design-system-sync
description: 디자인 시스템 토큰을 Pencil Variables와 동기화합니다. MD 파일의 토큰을 Pencil 캔버스에 적용하거나, Pencil Variables를 MD로 내보냅니다.
argument-hint: '"push" 또는 "pull" — 토큰 동기화 방향 (push: MD→Pencil, pull: Pencil→MD)'
allowed-tools:
  - Read
  - Write
  - Glob
  - mcp__pencil__*
---

# Design System Sync Command

디자인 시스템 토큰과 Pencil Variables 간의 동기화를 수행하는 커맨드입니다.

## 사용 방법

### MD → Pencil 동기화 (push)

```
/pencil-design-system-sync push
```

`design/system/tokens/*.md` 파일의 토큰을 파싱하여 열려있는 Pencil 캔버스의 Variables로 설정합니다.

### Pencil → MD 동기화 (pull)

```
/pencil-design-system-sync pull
```

현재 Pencil 캔버스의 Variables를 읽어 `design/system/tokens/*.md` 파일로 내보냅니다.

### 특정 파일에 동기화

```
/pencil-design-system-sync push .pen/screens/login.pen
```

## 동기화 대상

### Colors (colors.md)

| MD 토큰 | Pencil Variable |
|---------|-----------------|
| `primary` | `$primary` |
| `blue-500` | `$blue-500` |
| `text-primary` | `$text-primary` |
| `bg-primary` | `$bg-primary` |

### Typography (typography.md)

| MD 토큰 | Pencil Variable |
|---------|-----------------|
| `typography-1` | `$typography-1` (30px) |
| `typography-8` | `$typography-8` (16px) |
| `weight-medium` | `$weight-medium` (500) |

### Spacing (spacing.md)

| MD 토큰 | Pencil Variable |
|---------|-----------------|
| `space-4` | `$space-4` (16px) |
| `radius-md` | `$radius-md` (8px) |

## 실행 단계

### Push (MD → Pencil)

#### Step 1: 토큰 파일 파싱

토큰 파일에서 테이블 형식의 값을 추출합니다:

```markdown
| Token | Value | Usage |
|-------|-------|-------|
| primary | #3182F6 | 주요 액션 |
```

파싱 결과:
```json
{
  "primary": "#3182F6"
}
```

#### Step 2: Pencil Variables 설정

`mcp__pencil__set_variables` 호출:

```javascript
{
  "filePath": ".pen/screens/current.pen",
  "variables": {
    "primary": "#3182F6",
    "blue-500": "#3182F6",
    "space-4": "16px"
  }
}
```

#### Step 3: 테마 변수 처리

시맨틱 토큰 (Light/Dark)은 테마 변수로 변환:

```markdown
| Token | Light | Dark |
|-------|-------|------|
| bg-primary | #FFFFFF | #17171C |
```

변환 결과:
```javascript
{
  "bg-primary": {
    "light": "#FFFFFF",
    "dark": "#17171C"
  }
}
```

### Pull (Pencil → MD)

#### Step 1: Pencil Variables 조회

`mcp__pencil__get_variables` 호출하여 현재 변수 목록 가져오기.

#### Step 2: 카테고리 분류

- 색상 관련: `colors.md`
- 크기/간격 관련: `spacing.md`
- 폰트 관련: `typography.md`

#### Step 3: MD 파일 업데이트

테이블 형식으로 업데이트 또는 새 파일 생성.

## 토큰 파싱 규칙

### 테이블 형식

```markdown
| Token | Value | Usage |
|-------|-------|-------|
| token-name | value | description |
```

### 시맨틱 토큰 (테마)

```markdown
| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| token-name | light-value | dark-value | description |
```

### 지원하는 값 형식

| 타입 | 예시 |
|------|------|
| Color (Hex) | `#3182F6`, `#FFF` |
| Color (RGBA) | `rgba(49, 130, 246, 0.10)` |
| Size (px) | `16px`, `24px` |
| Size (em) | `1.5em`, `-0.02em` |
| Number | `400`, `500`, `700` |

## 예시

### 전체 동기화 (push)

```
/pencil-design-system-sync push
```

출력:
```
🔄 디자인 시스템 동기화 (MD → Pencil)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 파싱된 토큰:
   ├─ colors.md: 45 tokens
   ├─ typography.md: 25 tokens
   └─ spacing.md: 30 tokens

🎯 대상: .pen/screens/finance-home.pen

✅ 동기화 완료!
   ├─ 색상 변수: 45개 적용
   ├─ 타이포 변수: 25개 적용
   └─ 스페이싱 변수: 30개 적용

💡 이제 디자인에서 $primary, $space-4 등의
   변수를 사용할 수 있습니다.
   변수 값 변경 시 전체 디자인이 업데이트됩니다.
```

### 특정 카테고리만 동기화

```
/pencil-design-system-sync push --only colors
```

### Pencil에서 내보내기

```
/pencil-design-system-sync pull
```

출력:
```
🔄 디자인 시스템 동기화 (Pencil → MD)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📥 Pencil Variables 조회 중...
   └─ 총 85개 변수 발견

📝 MD 파일 업데이트:
   ├─ design/system/tokens/colors.md (40 tokens)
   ├─ design/system/tokens/typography.md (20 tokens)
   └─ design/system/tokens/spacing.md (25 tokens)

✅ 내보내기 완료!
```

## 주의사항

1. **Pencil 앱 실행 필수**: 동기화 전 Pencil.dev 앱이 실행되어 있어야 합니다.
2. **파일 열기 필수**: push 시 대상 .pen 파일이 Pencil에서 열려 있어야 합니다.
3. **백업 권장**: pull 시 기존 MD 파일을 덮어쓰므로 백업을 권장합니다.
4. **변수명 규칙**: Pencil Variables는 `$` 없이 저장되지만, 디자인에서 참조 시 `$`를 붙여 사용합니다.

## 관련 명령어

- `/pencil-design-system` - 디자인 시스템 상태 확인
- `/pencil-design` - 디자인 생성 (동기화된 변수 자동 사용)
- `/pencil-open-canvas` - Pencil 캔버스 열기
