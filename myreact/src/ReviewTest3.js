// 리액트 컴포넌트 간 데이터를 주고받는 방법
// (3개의 리액트 컴포넌트. 1개의 Book이라는 컴포넌트가 TitlePart, ContentPart 2개의 컴포넌트를 포함한 구조)

// 화살표 함수를 통해서 리액트 컴포넌트 정의
const TitlePart = (props) => { // 리액트 컴포넌트 간 데이터 주고받을 때 받는 쪽에서는 전달받을 변수명 지정. props: TitlePart를 호출하는 곳에서 전달하는 데이터를 들어오게 함. 개수제한 없이 전달받은 값들을 모두 받는다.

    return (
        // 전달받았던 정보를 출력
        <div>   
            <hr />            
            <h3>제목: {props.title}</h3>
            <h3>출판사: {props.pub}</h3>
            <h3>저자: {props.author}</h3>                        
            <hr />
        </div>
    )

}

const ContentPart = (props) => {
    return (
        <div>
            <h6>총 페이지 수: {props.totalpage}</h6>
            <h6>내용: {props.contents}</h6>
            <hr />
        </div>
    )
}


// 1개의 컴포넌트에 다른 2개의 컴포넌트를 포함시키는 예제 
// 리액트 컴포넌트들은 다른 리액트 컴포넌트들을 포함할 수 있다.
const Book = () => {

    const data = {title: "책제목", pub: "출판사", author: "책저자", contents: "책내용", pages: 100}; // author까지는 TitlePart가, contents부터는 ContentsPart에서 표현하라고 지정할 것.

    // Book이 TitlePart를 호출 
    // TitlePart에 data의 정보 전달
    // 리액트 컴포넌트 간 데이터 주고받을 때 전달하는 쪽에서는 변수명 = 변수값 이런식으로 보내기
    return(
        <div>
            <TitlePart title = {data.title} pub = {data.pub} author = {data.author} />  
            <ContentPart contents = {data.contents} totalpage = {data.pages} />         
        </div>
    );

    // 책 제목 출력 리액트 컴포넌트 


    // 책 내용 출력 리액트 컴포넌트 

}

export default Book; // TitlePart, ContentPart컴포넌트들은 내부 사용으로 export 불필요