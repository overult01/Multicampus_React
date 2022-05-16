import React from 'react';

class B extends React.Component{


    render(){
        const user = {'id':'아이디', password:1234, name : "이름", phone:"010-2222-3333", email:"a@react.com", address:"서울시 강남구 역삼동"};
        return (
            <div>
        <h1>클래스형태의리액트컴포넌트</h1>
        <h3>{ user.id } </h3>
        <h3>{ user.password } </h3>
        <h3>{ user.name } </h3>
        <h3>{ user.phone } </h3>
        <h3>{ user.email } </h3>
        <h3>{ user.address } </h3>
        </div>
        );
    }
}
export default B;
