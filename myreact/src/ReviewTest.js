// 함수로 리액트 컴포넌트 만들기(함수, 클래스 중)
function A(){
    
    // 변수
    // 함수


    // // 유명함수
    // function B(){alert(1);}

    // // 무명함수 
    // const B = function B(){alert(1);}

    // // 화살표 함수
    // const B = () => alert(1) // 매개변수 없고, 문장도 1개일 때 


    // 무명 함수, 이벤트 처리 
//    const clickHandler = function(){alert("버튼 클릭");}

    // 함수 타입
    // 화살표 함수, 이벤트 처리
    const clickHandler = () => alert("버튼 클릭");

    // css내용을 갖고 있는 json객체 타입 
    const css1 = {color: "green", fontSize: '2em'} // 변수로 스타일 선언. {}안에다가 자바스크립트 변수명 가져가는 방법 ///// 자바스크립트의 변수명에는 '-'못들어감. 다음 연결 단어 첫글자 대문자로.

    // 배열 타입 
    const list = ["리스트1", "리스트2", "리스트3", "리스트4", "리스트5"];

    // li_tag는 list의 데이터를 조작한 함수 결과 리턴

    const li_tag = list.map(function(one, index){ return <li key = {index}> {one}</li>; }); // map함수: list에 데이터가 있는 만큼 function호출되게 함. function이 3번 호출. one은 변수(반복하는 요소 1개), index는 반복하는 배열의 인덱스값 

    return ( // index.html화면 구성하는 리액트 컴포넌트 작성: 리액트는 jsx문법 사용 (html문법과 유사) -> 여러가지 태그들을 항상 div 태그 한 개로 묶는 것이 중요
        <div>
            <h1>리액트 실행합니다.</h1>
            <ul style={css1}>{li_tag}</ul>
            <button onClick={clickHandler}><h3>클릭해보세요.</h3></button> 
        </div>
    );
}

// 외부에서 가져다 쓸 수 있도록 허락 (index.js에서 사용할 때 import해서 사용)
export default A;


// jsx는 리액트 함수가 리턴하는 결과. index.html에서 보여줄 때 html문법으로 리액트 컴파일러가 자동 변환해줌.
// jsx변수 내부에서 자바스크립트 변수가 필요하면 {자바스크립트 변수명}으로 사용
// css 속성을 변수로 정의할 때, font-size이면 fontSize처럼 두 번째 단어의 글자를 대문자로 변경하여 사용.

// 리액트의 이벤트 처리 
// 리액트는 DOM, 제이쿼리 표현 x -> 리액트에서는 onClick으로 jsx문법 사용(onclick속성은 html 문법)
// 이벤트 처리 함수명은 on+대문자시작 이벤트명 으로 작성

// return문에 jsx문법 사용. return문 바깥에서 함수, 변수, 반복문 등의 처리는 모두 하고, return문안에서는 연결만 해주는 것.