function Greeting(){ // 조건1: 대문자 시작
	var r = parseInt(Math.random() * 3); // 0 <= ~ <3 => 0, 1, 2 
	if(r == 0) return (<h1>오늘도 즐거운 하루 되세요 </h1>); // 조건2: return 뒤가 jsx문법. 
	if(r == 1) return (<div><h1>안녕하세요 리액트{r} </h1> <a href="#"> 링크</a></div>);  // 조건3: 리턴은 1개 태그여야. 2개 이상이면 div태그로 리턴문 감싸서 한 개 태그처럼 만들기
	if(r == 2) return (<h1>오늘 날씨 어때요? </h1>); // 조건4: 리턴문 ()로 감싸도 되고 아니어도 된다. 
}
// index.js 외부파일
export default Greeting; // 조건5: export를 해줘야 다른 파일에서 사용 가능.