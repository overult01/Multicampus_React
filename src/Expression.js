function Expression(){ // 파일이름 == 함수이름 해주는 것을 권장. 의무x.
    
    // const: 변수 수정 불가(상수)
    // let: 변수 수정 가능. 선언위치에 따라서 지역변수, 전역변수.

    const item = "card";
    const price = "12000";
    const product = "커피3잔";
    // 이클립스에서 톰캣서버를 켜줘야 한다.
    const img = "http://localhost:8080/html/images/coffee.gif"; // 톰캣은 포트가 8080, 리액트는 3000번이므로 서버 2개가 통신하기 위해 다 써주어야.
    
    // 물건 구입후 지불. card / money
    // return문: 반드시 있어야. 변수 가져올 땐 {}로 감싸기. 일반 문자는 따옴표 필요 없다. ()안에는 자바스크립트 문법.
    // JSX문법: 태그를 반드시 닫기, 태그는 반드시 소문자, 여러 태그일
    return (<div>
        <h1> {item} - {price} 원 </h1> 
        <h1> {product} 구매했습니다. </h1>
        <img src = {img} />
    </div>);
}

export default Expression;