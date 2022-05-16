import React from "react";



class User extends React.Component{
    //this.props 이미 상속 정의되었다
    //this.state=xxx 사용자 정의
    constructor(props){
        super(props);
        this.state = {
            name : this.props.name , 
            address : this.props.address
        }// this.setState({})-state 내부 변수값 변경 용도 
    }

    render(){
        const greeting = ()=>{ 
            //alert( this.props.name + " 회원님은 " + this.props.address + " 지역에 삽니다." );//최초 전달값 
            alert( this.state.name + " 회원님은 " + this.state.address + " 지역에 삽니다." ); //현재 클래스 선언값
        }

        const finalChange = ()=>{ 
            //this.setState( { name : "이름변경" , address:"지역변경"} );
            greeting();
            this.setState({name : '', address : '' } );
        }

        const change = (e)=>{
            console.log(e.target.tagName + ":" + e.target.id + ":" + e.target.value);//태그명,id,value
            this.setState({[ e.target.id  ] :   e.target.value } );
        }

        return(
            <div>
                {this.state.name === "홍길동" && <button onClick={greeting}> 인사 </button>  }                
                <input id='name' type='text' onChange={change} value={this.state.name}></input>
                <input id='address' type='text' onChange={change} value={this.state.address}></input>

                <button onClick={finalChange}> 정보변경 </button>    
            </div>
        );
    }
}

export default User;
