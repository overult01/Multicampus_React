
import axios from 'axios';
import { useState } from 'react';

function ServerConnection () {
    //함수선언 리액트 컴포넌트에서는 this.state 없다
    //대신에 이런 방법
    const [result , setResult ] = useState('');
 /*     this.state ={result : ''}
        this.setResult(result수정할값)
        이랑 동일효과
 */

    //let result = '';
    
    //test1 파라미터 없는 경우
    // proxy 설정인 경우
    //axios.get("/helloreact")
    
    //@CrossOrigin(origins = "*") 설정인 경우
   // axios.get('http://localhost:8081/helloreact')
   // .then(function( response ){
   //    result =  JSON.stringify(response.data)
   // } );

   //test2 파라미터 있는 get 
   // axios.get('http://localhost:8081/helloreactparam' , { params : {   id:"get전송" , password : 1234    } }  )
   // .then(function( response ){
   //    setResult (JSON.stringify(response.data) ) ;
   //    console.log(result);//출력
   // } );

   //test3 파라미터 있는 post
   // axios.post('http://localhost:8081/helloreactparampost' ,    {   id:"post전송" , password : 1234    }   )
   // .then(function( response ){
   //    setResult(JSON.stringify(response.data));
   //    
   // } );

    //test4  
    axios.get('http://localhost:8081/userlist'  )
    .then(function( response ){
       setResult (JSON.stringify(response.data) ) ;
       console.log(result);//출력
    } )


    return (<div><h1>통신시작</h1><h1>{result}</h1><h1>통신끝</h1></div>);
}

export default ServerConnection;