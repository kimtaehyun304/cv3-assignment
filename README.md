# cv3 기술 과제

* [프론트] react 19, typeScript 6, tailwind 4, vite
* [백엔드] express 5, typeScript 6, playwright-chromium, node-cron
* [노드 버전] v22.23.1

### 서비스 링크
* https://kth-cv3.netlify.app/  
* http://15.165.194.220/api/broadcasts?category=라방

### 깃허브 링크
* https://github.com/kimtaehyun304/cv3-assignment
* https://github.com/kimtaehyun304/cv3-backend

### 실행 방법
1. download ZIP 이후 압축해재
2. VSCODE에서 압축해재한 폴더로 이동
3. VSCODE 터미널에서 아래 명령어 입력
4. npm install
5. npm run dev

* 프론트, 백엔드 실행 방식 동일합니다.  
* 직접 실행해도 동작하지만, 심사 편의를 위해 배포했습니다.  
* ※혹시 의도에 어긋나는 방식이라면, express를 로컬에서 실행 후
*  fetch api url을 localhost:8080/api..으로 바꿔주세요!

## 구조

#### 프론트
* App.tsx에서 테이블 렌더링 및 express API 호출

#### 백엔드
* broadcastController.ts, apiRouter.ts로 라우팅
* scheduler.ts에서 1분 주기로 과제 페이지 크롤링하고 캐싱
* main.ts, server.ts에서 서버 시작시 최초 크롤링
* productType.ts으로 크롤링 데이터 타입 지정
* cicd.yml (깃허브 액션으로 배포 자동화)

## 개발 과정

### 이슈 해결
크롤링 중 메모리 부하가 발생하여 ec2가 멈추었다
* 최소한의 리소스만 크롤링 (이미지, 폰트 등 차단)
* 불필요한 옵션 해재 (gpu, extexsion 등)
* domcontentloaded 변경 및 타임아웃 늘리기
* 크롤링 끝나면 broswer.close()

홈쇼핑 데이터를 크롤링하려면 버튼을 클릭해야한다
* 그래서 cheerio → playwright로 변경
* getByRole('button', { name: '홈쇼핑' }).click()으로 클릭 자동화
* locator('.TableHsshow-module...').first().waitFor()로 값이 바뀌는 걸 대기 후 크롤링
* 라방 데이터의 경우도 카테고리 값이 렌더링되는 걸 대기 후 크롤링
  
통신 이슈
* 프론트, 백엔드가 분리돼있으므로 express에 cors 설정 추가
* 네트리파이가 https라, http인 express를 호출하지 못해서, 네트리파이가 제공하는 프록시 서버(https) 사용

### 코드 개선
라방, 홈쇼핑 타입 개선
* 라방바 assignment API를 호출하는 방식일 땐, 타입이 많이 달라서 타입을 두 개 사용
* 크롤링 방식으로 변경하니 viewCount와 viewRating만 달라서, 타입을 두 개 만들지 않고 ? 옵션 사용
  
라방바 assignment API 안 쓴 이유
* 라방 데이터는 부모 카테고리로 나타내야했다
* 자식 카테고리는 알기에, 개발자 도구로 카테고리 맵을 찾아봤지만 실패했다
* 카테고리 페이지에서 일일히 조사할 순 있지만, 좋은 방식은 아니라고 판단
* 어짜피 cors 설정 때문에 프록시 서버가 필요하므로 이 방식은 포기

크롤링 데이터 타입을 모두 string으로 한 이유
* db에 저장하지 않고, 크롤링한 걸 프론트에서 그대로 쓰기 때문
* 크롤링할 때 문자열로 받기 때문이 굳이 형변환하지 않았음 

빌드 에러 해결
* tsconfig.prod.json 수정(lib, rootDir, baseUrl)
* 파라미터, 변수 타입 지정
* tsc-alias 패키지 추가

### 기술 선택 근거
공고에 react, express가 있어서 해당 기술로 결정
* 라방바 사이트가 next.js로 돼있어서, next.js 써도 상관 없었을 것 같다

공고에 크롤링 경험 우대라고 적혀 있어서 크롤링 결정
* 원래는 라방바 assignment API 사용하는 페이지도 만들라 했는데, 위의 이유로 포기
* 라방바 robots.txt 확인해보니, 크롤링 쓰라는 의도라고 판단

### 프론트 화면 캡쳐
<img width="1063" height="829" alt="Image" src="https://github.com/user-attachments/assets/62976166-5baa-462f-a2d8-6d56354689ab" />
