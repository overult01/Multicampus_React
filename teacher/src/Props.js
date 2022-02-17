const HeaderPart =  (props)=>
    (<div style={ {backgroundColor:'red', color:"white"} }>
        <h3> {props.title} </h3>
       </div>)

const BodyPart = (props)=> (
<div style={ {border:'2px solid blue', margin :"15px"} }>
        <h3> {props.body} </h3>
       </div>
) 

const Book = (props)=>(
    <div>
        <HeaderPart title={props.t} ></HeaderPart> 
        <BodyPart body={props.body}></BodyPart>
    </div>
)
export default Book;
/*index.js Book 컴포넌트 생성시 전달 변수값     받아서 
<Book t="제목1" body="내용소개1" />
<Book t="제목2" body="내용소개2" />
<Book t="제목3" body="내용소개3" />
*/
/*<Cook> 
    <Header> 제목1 </Header>
</Cook>
<Book> 
    <Header> 제목1 </Header>
    <Body> 내용 소개1 </Body>
</Book>
<Book> 
    <Header> 제목2 </Header>
    <Body> 내용 소개2 </Body>
</Book>
<Book> 
    <Header> 제목3 </Header>
    <Body> 내용 소개3 </Body>
</Book>
*/