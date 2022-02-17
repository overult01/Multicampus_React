import React from 'react'; 
class Hello2 extends React.Component{
    render(){
        let cnt = 0; 
        const clickHandler = ()=>{ 
            alert( ++cnt + " 번  클릭 - 클래스 선언식으로 이벤트처리합니다.");
        }
        return (<div onClick = {clickHandler} ><h1>Hello2 클릭 </h1></div>);
    }
}

export default Hello2;