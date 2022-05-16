
function A() {
    
    //const clickHandler = function(){ alert("버튼클릭"); } //무명함수
    
    const clickHandler = ()=> alert("버튼클릭");  //화살표함수/이벤트처리

    const css1={ color:"green" ,fontSize:'2em' }//자바스크립트변수로 css 정의(자바스크립트변수명 '-' ,포함x)
    
    const list = ['리스트1', '리스트2', '리스트3', '리스트4', '리스트5'];

    const li_tag = list.map( ( one , index )=>  (<li key= {index} >{one}</li>)   );
   //li_tag 는 list의 데이터를 조작한 함수 결과 리턴
   // li_tag = [<li>'리스트1'</li> ,  , ]

    return (
    <div>
        <h1>리액트 실행합니다.</h1> 
        <ul style={css1} > {li_tag}    </ul>
        <button onClick={clickHandler} > <h3>클릭해 보세요</h3> </button>
    </div>);
}


export default A;
//jsx는 리액트함수가 리턴 결과 = index.html 보여질 때 html 문법 자동 변환 
//jsx 내부 자바스크립트 변수 {변수명}
//css속성변수 정의 - font-size --> fontSize 규칙 따를 것
//DOM, jquery 표현 x
//이벤트처리 one대문자시작이벤트명