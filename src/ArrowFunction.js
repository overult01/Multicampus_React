// 화살표 함수
const Hello = ()=>{
    //화살표 함수 내부에 화살표 함수 정의
    const clickHandler = function(){ alert("화살표함수로 이벤트 처리합니다."); }
    return (<div onClick= {clickHandler} ><h1>Hello 클릭</h1></div>);
}

export default Hello;