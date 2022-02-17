function Expression(){
   // let //변수값 수정. 선언위치 지역변수
   // const //변수값 수정불가능
   const item = "card";
   const price = 12000;
   const product = "커피3잔";
   const img = "http://localhost:8080/html/images/coffee.gif";
    alert(item);
    //커피 구매 구입 지불. card /money
    return (<div>
        <h1> {item} - {price} 원 </h1>
        <h1>{product} 구매했습니다. </h1>
        <img src={img} />
    </div> );
}
export default Expression;

