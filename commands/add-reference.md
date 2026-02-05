---
name: pencil-add-reference
description: 레퍼런스 이미지나 무드보드 자료를 design/references 폴더에 추가합니다. 경쟁사 분석, 영감 이미지, 벤치마킹 자료 등을 체계적으로 관리합니다.
argument-hint: '"~/image.png moodboard" — 영감/벤치마킹 이미지를 design/references에 추가'
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - WebFetch
---

# Add Reference Command

레퍼런스 이미지나 무드보드 자료를 프로젝트에 추가하는 커맨드입니다.

## 사용 방법

### 로컬 이미지 추가

```
/pencil-add-reference ~/Downloads/inspiration.png moodboard
```

### URL에서 이미지 추가

```
/pencil-add-reference https://example.com/design.png benchmarks
```

### 여러 파일 추가

```
/pencil-add-reference ~/Downloads/refs/*.png moodboard
```

## 카테고리

| 카테고리 | 용도 | 저장 경로 |
|----------|------|-----------|
| `moodboard` | 영감, 분위기, 스타일 참고 | `design/references/moodboard/` |
| `benchmarks` | 경쟁사, 유사 서비스 분석 | `design/references/benchmarks/` |

## 실행 단계

### Step 1: 폴더 구조 확인

레퍼런스 폴더가 없으면 생성:

```bash
mkdir -p design/references/moodboard
mkdir -p design/references/benchmarks
```

### Step 2: 파일 처리

**로컬 파일인 경우:**
```bash
cp [source] design/references/[category]/
```

**URL인 경우:**
- WebFetch로 이미지 다운로드
- 적절한 파일명으로 저장

### Step 3: 메타데이터 추가 (선택)

레퍼런스에 대한 설명을 추가할 수 있음:

```markdown
# design/references/benchmarks/competitor-analysis.md

## Competitor A - Login Screen
![competitor-a-login](./competitor-a-login.png)

**특징:**
- 미니멀한 디자인
- 소셜 로그인 우선 배치
- 브랜드 컬러 강조

**참고할 점:**
- 입력 필드 애니메이션
- 에러 메시지 표시 방식
```

### Step 4: 결과 확인

추가된 파일 목록과 경로 출력.

## 지원 형식

- 이미지: `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.svg`
- 문서: `.md`, `.pdf`

## 예시

### 무드보드 이미지 추가

```
/pencil-add-reference ~/Desktop/minimal-ui.png moodboard
```

출력:
```
✅ 레퍼런스 추가 완료
   파일: design/references/moodboard/minimal-ui.png
   카테고리: moodboard
```

### 벤치마킹 스크린샷 추가

```
/pencil-add-reference ~/Screenshots/competitor-app.png benchmarks
```

### URL에서 추가

```
/pencil-add-reference https://dribbble.com/shots/12345/attachments/image.png moodboard
```

## 파일 명명 규칙

### 자동 명명

기존 파일명 유지하되, 충돌 시 번호 추가:
- `design.png`
- `design-1.png`
- `design-2.png`

### 권장 명명

의미있는 이름 사용:
- `competitor-spotify-playlist.png`
- `moodboard-dark-theme-01.png`
- `reference-dashboard-layout.png`

## 관련 명령어

- `/pencil-design-system` - 디자인 시스템 조회
- `/pencil-design` - 디자인 생성
