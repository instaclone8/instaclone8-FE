# 📌 인스타그램 클론코딩
- [배포 URL](http://ssong.ch94.s3-website.ap-northeast-2.amazonaws.com/) 

- [노션 바로가기](https://www.notion.so/8-bcd7811b4e404cfebd791d65f6d29372)

- 시작: `git clone` -> `yarn install` -> `yarn start`

<br> 

## 📆 클론코딩 프로젝트 기간
2023.03.24 ~ 2023.03.30

<br> 

## 🛠 프론트엔드 기술 스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white"> <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/axios-6236FF?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

<br> 
<br> 

## 🔎 주요기능
### 1. 회원가입 및 로그인 + 카카오 로그인
서비스 자체 회원가입
- 이메일 형식 체크
- 이메일 중복 확인 및 미확인시 가입 불가
- 아이디, 비밀번호 정규식 활용하여 유효성 검사

로그인
- 아이디, 비밀번호 확인 후 로그인
- 카카오 로그인 구현
- 로그아웃 구현

<br> 

### 2. 게시글 CRUD
Creacte
- 로그인 후 '만들기' 클릭시 모달에서 포스트 작성
- 이미지와 내용 작성 가능
- 업로드한 이미지 미리보기 구현

Read
- 작성한 포스트는 메인페이지에서 바로 확인 가능
- '상세보기' 클릭시 모달에서 유저 닉네임, 이미지, 내용 상세조회 가능
- '상세보기' 클릭시 본인이 작성한 글에서만 수정/삭제 출력

Update
- 본인이 작성한 글 상세조회시 '수정하기' 버튼 출력 및 수정 가능
- '상세보기' 모달을 editmode state를 통해 변형하여 사용함

Delete
- 본인이 작성한 글 상세조회시 '삭제하기' 버튼 출력 및 삭제 가능

<br> 

### 3. 마이페이지
- '프로필' 클릭시 마이페이지로 이동
- 본인이 작성한 글 확인 가능
- 무한스크롤 구현

<br> 
<br> 

## 💡 트러블슈팅
### 1. 모달 구현
한 페이지 2개의 컴포넌트에서 모달을 각 컴포넌트별로 다루고 있다.
a 컴포넌트의 모달을 열었을 때 b 컴포넌트 내용이 겹쳐 나오거나,
b 컴포넌트의 모달을 열었을 때 a 컴포넌트에 가려지는 이슈가 있었다.
모달은 컴포넌트와 독립된 개체로 생각하여 open/close를 관리해야 하는데
모달 코드를 컴포넌트 return문 안에서 함께 사용하고 있었다.
이 모달 코드를 별도로 빼주어 관리하여 해결하였다.

<br>

해결 이전 코드

```javascript
<component>
<각종 태그들...>
<modal 관련 태그>
</<component>>
```

해결 이후 코드

```javascript
<>
<component>
<각종 태그들...>
</component>
<modal 관련 태그>
</>
```

<br> 

### 2. 이미지 업로드 및 출력
image null
- 이미지를 넣어 post 요청을 보냈을 때 이미지가 null값으로 보내지는 이슈가 있었다.
이것은 useRef에 기본으로 null을 넣어주고, 이미지를 넣는 input과 연결하였다.

FormData append
- FormData 객체를 사용하여 이미지를 업로드해야 한다는 것은 알고 있었지만
fileReader와 착각하여 제대로 append해주지 못하고 있었다.
useRef로 받아오는 file을 inputRef.current.files[0] 이렇게 formData에 넣어주며 해결했다.

이미지 출력
- 이미지 미리보기와 출력은 fileReader를 사용하여 base64로 변환한 뒤 출력하였다.

<br> 

### 3. 카카오 로그인
카카오에서 발급하는 code 를 발급받는 페이지에서 code 를 할당받고, code 가 존재할 시 후속 행동에 대한 처리가 잘 안되는 문제가 있었다.
- 페이지가 최초 렌더링 될 때 code 를 받고, state에 할당해주는 useEffect를 만들고, 할당받은 state가 null 값이 아닐 시 동작하는 useEffect를 하나 더 추가해줘서 해결하였다. 두번째 useEffect 에는 의존성 배열로 state 를 넣어줘서 state가 변화할 때 마다 useEffect를 실행시켜주었다.

<br> 

### 4. 무한스크롤
- axios 요청 시 uri 로 query parameter 를 사용했는데, 파라미터로 들어갈 값을 넘기는 부분에서 어려움이 있었고, 스크롤이 맨 아래 도착하면 0부터 1씩 증가하는 state 를 만들어 해결하였다. useQuery 부분을 Hook 으로 분리하고 싶지만 매개변수 넘기는 과정이 해결되지 않았다.
- 데이터 요청 시 이전에 받아온 데이터가 날아가고 새로운 데이터만 보이는 현상 발생 -> useEffect 로 data 가 변화할 때 마다 이전 data 를 유지하고, 새로운 data 를 추가해주는 state 만들어서 해결하였다.

<br> 
<br> 

## ✨ Front-End member

|팀원|GitHub|역할|
| --- | --- | --- |
| 김재란 | https://github.com/gitjaeran | 게시글 CRUD |
| 송철환(FE팀장) | https://github.com/SsongCh94 | 로그인/회원가입, 마이페이지 |
