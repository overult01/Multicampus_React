const HeaderPart = (props) => 
    (<div style={ {backgroundColor : 'red', color: "white"} }>
        <h3>{props.title}</h3>
    </div>) // 바깥{}: 변수 혹은 자바스크립트를 쓸거다. 안의 {}: CSS적용위해 

const BodyPart = (props) => (
    // 원래는{return (rsx)} 인데, 화살표함수 특성상 return문이 한 줄이면 return문을 감싸는 {}, return생략 가능하고 대신 ()로 감싼다.
    <div style={ {border: '20px solid blue', margin: "15px"} }>
        <h3>{props.body}</h3>
    </div>
)

const Book = (props) => (
    <div>
        {/* 리액트에서 변수를 태그처럼 쓸 수 있다. 태그처럼 써서 각각의 화살표함수 호출 */}
        <HeaderPart title = {props.title}></HeaderPart>  
        <BodyPart body = {props.body}></BodyPart>
    </div>
)


export default Book;