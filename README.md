# 리덕스 미들웨어

**- 작동 방식**

<img src="/src/img/middleware.jpg" title="리덕스 미들웨어 작동 방식" alt="Middleware"></img><br/>

액션이 리듀서한테 전달되기 전에 특정 코드를 실행 할 수 있다.

<img src="/src/img/middleware_2.jpg" title="리덕스 미들웨어 작동 방식 2" alt="Middleware-2"></img><br/>

한개 이상의 미들웨어 사용 가능하다.  
next : 다음 미들웨어로 전달되는 함수, 만약 다음 미들웨어가 없다면 next를 통해 액션을 리듀서한테 전달한다.  
즉, 미들웨어 안아서 next를 호출하지 않으면 특정 액션을 무시할 수 있다는 말이다.

**- 주로 비동기 작업을 처리 할 때 사용**

예 ) API 요청
