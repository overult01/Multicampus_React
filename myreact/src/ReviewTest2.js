import React from "react"; // './'로 시작하면 직접 만든 것, 아니면 노드 모듈.

// 클래스로 리액트 컴포넌트 만들기(함수, 클래스 중)
class B extends React.Component{

    render(){ // 클래스로 컴포넌트 만들 때는 render메서드 오버라이딩 하여 그 메서드의 return에 결과 출력 
        
        // json 객체
        const user = {'id': '아이디', password: 1234, name : "이름", phone: "010-222-3333", email: "a@react.com", address: "서울시 강남구 역삼동"};
        
        return(
            <div>
                <h1>클래스 형태의 리액트 컴포넌트</h1>
                <h3>{user.id}</h3>
                <h3>{user.password}</h3>
                <h3>{user.name}</h3>
                <h3>{user.phone}</h3>
                <h3>{user.email}</h3>
                <h3>{user.address}</h3>
            </div>
        ); // 모든 jsx내의 태그는 1개의 태그일 것(여러개인 경우 div태그로 감싸기)
    }

}

export default B; // 외부에서 쓸 수 있도록