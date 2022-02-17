import React from 'react';

class Hello2 extends React.Component{
    // render메서드 오버라이딩
    render(){
        let cnt = 0;

        const clickHandler = function(){ 
            alert(++cnt +"번 클릭: 클래스 선언 형식으로 이벤트 처리합니다."); 
        }
        return (<div onClick= {clickHandler} >
            <h1>클래스 선언 형식 이벤트 처리</h1></div>);    
    }
}
 
export default Hello2;