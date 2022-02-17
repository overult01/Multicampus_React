const Hello = ()=>{
    //화살표함수 내부 화살표함수 정의
    const clickHandler = ()=>{ alert("화살표함수로 이벤트처리합니다.");}
   return (<div onClick= {clickHandler} ><h1>Hello 클릭 </h1></div>);  
}

 export default Hello; 
