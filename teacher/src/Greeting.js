function Greeting(){//대문자시작
	var r =  parseInt(Math.random() * 3); //0<= ~  < 3 - 0, 1, 2
	if(r == 0) return ( <div><h1>오늘도 즐거운 하루 되세요 {r} </h1>
                       <a href="#"> 링크 </a></div>
    );
	if(r == 1) return (<h1>안녕하세요 리액트</h1>);
	if(r == 2) return (<h1>오늘 날씨 어때요?</h1>);
}

//index.js 외부파일 <Greeting />
export default Greeting;