import React from "react";

class User extends React.Component{

    // props 전달받는 역할 밖에 안하는 생성자는 생략도 가능 
    constructor(props){ // 전달받은 매개변수

        // this.props: 이미 상속받아서 정의되어 있다.
        // this.state = 변수명 : 사용자 정의

        super(props);
        
        // user의 멤버변수(따라서 생성자 외부의 render 함수에서도 쓸 수 있다)
        this.state = { // this.state 이렇게 정의해야 render 메서드 등 외부에서도 사용 가능 (const state 이렇게 선언했으면 선언이 된 생성자 내부에서만 사용 가능한 변수가 된다)
            name : this.props.name,
            address : this.props.address
        }
    }

    render(){

        // render 함수의 지역변수
        const greeting = () =>{
            // getter 용도: this.props.변수명, this.state.변수명
            alert(this.props.name + " 회원님은 " + this.props.address + "지역에 삽니다."); // props: 최초 전달 값
            alert(this.state.name + " 회원님은 " + this.state.address + "지역에 삽니다."); // state: 현재 클래스에서 선언한 값 . 직접만든 change버튼 누른 후에는 값이 변경되어 출력(state의 용도)
        }

        const change = (e) => {
            // name, address 입력값 얻어낸다
            
            // document.getElementById("name") 대신 사용.(리액트는 DOM구조 안쓰려고 사용)
            
            console.log(e.target.tagName + ": " + e.target.id + ": " + e.target.value  ); // change 이벤트가 발생한 태그명, id, value값 확인
            this.setState({[e.target.id] : e.target.value});
        }
        
        const finalChange = () => {
            // setter 용도: setState 메서드
            this.setState( // setState: state에 저장된 내용을 변경하는 메서드(state 내부 변수값 변경 용도). 바꾸고 싶은 속성만 나열 
                {name: "이름변경", address: "주소변경"}
            ); 
        }

        // onChange: 키보드로 입력할 때(값이 변경될 때마다) 실행되는 이벤트
        return(
            <div>
                <button onClick={greeting}>인사</button>
                <input id = "name" type = 'text' onChange={change}></input>  
                <input id = "address" type = 'text' onChange={change}></input>
                <button onClick={finalChange}>정보변경</button>
            </div>
        )
    }
}

export default User;