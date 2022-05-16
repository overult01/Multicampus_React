
//1. 화살표함수 정의

/* const TitlePart = (props) => { //객체
    return (
        <div>
            <h3>제목 : {props.title} </h3>
            <h3>출판사 : {props.pub} </h3>
            <h3>저자 : {props.author} </h3>
            <hr />
         </div>

    );

}
const ContentPart = (props) => {
return (
    <div>
    <h6>총페이지수 : {props.totalpage}</h6>
    <h6>글내용 : {props.contents }</h6>
    <hr />
    </div>
);

}

const Book = ()=> {
    const data = {title:"책제목", pub : ":출판사" , author : "책저자", contents: "책내용", pages:100};
    return(
        <div>
            <TitlePart title={data.title} pub={data.pub} author={data.author} />
            <ContentPart contents={data.contents} totalpage={data.pages} />
        </div>
    
    );
} */

import React from "react";
//2. 클래스 선언
class TitlePart extends React.Component{
/*     constructor(props){
        super(props);
    } */

 render(){
    return (
        <div>
            <h3>제목 : {this.props.title} </h3>
            <h3>출판사 : {this.props.pub} </h3>
            <h3>저자 : {this.props.author} </h3>
            <hr />
         </div>

    );
 }
}

class ContentPart extends React.Component{
/*     constructor(props){
        super(props);
    } */
    render(){
        return (
            <div>
            <h6>총페이지수 : {this.props.totalpage}+100</h6>
            <h6>글내용 : {this.props.contents }</h6>
            <hr />
            </div>
        );   
    }
}

class Book extends React.Component{

    render(){
        const data = {title:"책제목", pub : ":출판사" , author : "책저자", contents: "책내용", pages:100};
        return(
            <div>
                <TitlePart title={data.title} pub={data.pub} author={data.author} />
                <ContentPart contents={data.contents} totalpage={data.pages} />
            </div>
        
        );
    }
}
export default Book;