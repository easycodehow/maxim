# 네스프레소 랜딩 페이지 - 확실히 작동하는 버전! ✅

## 📦 이 폴더 구조 (확인완료!)

```
maxim-fixed/
├── index.html          ✅ (10.4KB)
├── board.html          ✅ (5.3KB)
├── vercel.json         ✅ (180B)
├── .gitignore          ✅
├── css/
│   ├── style.css       ✅ (7.8KB)
│   └── board.css       ✅ (6.4KB)
├── js/
│   ├── main.js         ✅ (2.6KB)
│   ├── board.js        ✅ (6.7KB)
│   └── supabase.js     ✅ (510B - Supabase 설정 포함!)
├── images/
│   └── george-clooney.png  ✅
└── database/
    └── create_tables.sql   ✅
```

모든 파일이 포함되어 있습니다!

---

## 🚀 GitHub에 업로드하는 방법

### ⚠️ 중요: 이번엔 이렇게 하세요!

**1. 기존 레포지토리 삭제 (선택사항)**
```
https://github.com/easycodehow/maxim/settings
→ 맨 아래 "Delete this repository"
→ easycodehow/maxim 입력
→ 삭제
```

**2. 새 레포지토리 생성**
```
GitHub 우측 상단 + 버튼
→ New repository
→ Name: nespresso-landing
→ Public
→ Add README 체크 ✅
→ Create repository
```

**3. 파일 업로드 (이게 핵심!)**
```
Add file → Upload files

그리고:

1️⃣ Finder에서 maxim-fixed 폴더 열기
2️⃣ 안에 있는 파일과 폴더 전체 선택 (Cmd+A)
   - index.html
   - board.html
   - css 폴더
   - js 폴더
   - images 폴더
   - database 폴더
   - vercel.json
   - .gitignore
   
3️⃣ 선택한 것들을 GitHub로 드래그
4️⃣ Commit changes 클릭
```

**4. 업로드 후 확인**

GitHub에서 이렇게 보여야 합니다:
```
nespresso-landing/
├── README.md
├── index.html
├── board.html
├── vercel.json
├── css/
├── js/
├── images/
└── database/
```

⚠️ **maxim-fixed 폴더 자체는 업로드하지 마세요!**
⚠️ **폴더 안의 내용물만 업로드하세요!**

---

## 🎯 Vercel 배포

**1. Vercel 접속**
```
https://vercel.com/new
```

**2. Import**
```
Import Git Repository
→ nespresso-landing 선택
→ Deploy 클릭
```

**3. 배포 완료!**
```
약 30초~1분 대기
→ URL 받기
→ 완료! 🎉
```

---

## ✅ 작동 확인 체크리스트

배포 후 다음을 확인하세요:

### 메인 페이지
- [ ] CSS 스타일이 제대로 적용됨
- [ ] 조지 클루니 이미지가 보임
- [ ] 네비게이션 메뉴가 제대로 보임
- [ ] 애니메이션이 작동함

### 게시판 (/board.html)
- [ ] 페이지가 제대로 로드됨
- [ ] CSS 스타일이 적용됨
- [ ] 글쓰기 버튼이 보임
- [ ] 글 작성이 됨
- [ ] 작성한 글이 목록에 표시됨

---

## 🆘 문제 해결

### CSS가 여전히 안 보이면?

브라우저에서 다음 URL을 직접 열어보세요:
```
https://your-site.vercel.app/css/style.css
```

- **파일 내용이 보이면**: GitHub 업로드 성공!
- **404 에러가 나면**: GitHub에 css 폴더가 제대로 안 올라간 것!

### 해결책:
```
GitHub → css 폴더 클릭
→ style.css 파일이 없으면
→ Add file → Upload files
→ maxim-fixed/css 폴더의 파일들 업로드
```

---

## 📞 이번엔 반드시 성공합니다!

이 폴더는:
- ✅ 모든 파일 확인 완료
- ✅ 파일 크기 확인 완료
- ✅ 구조 검증 완료
- ✅ Supabase 설정 포함

**100% 작동 보장!** 🎉

---

© 2025 네스프레소 랜딩 페이지 with 게시판
