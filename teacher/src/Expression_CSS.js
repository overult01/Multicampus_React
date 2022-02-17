function StyleAdd(){
const css1= {
   'color':'red',
   'backgroundColor':"#f0f0ff",
   'fontSize':'2em'
 }
 const css2= {//지역변수
    'color':'blue',
    'backgroundColor':"#f0f0ff",
    'fontSize':'1.5em'
  }
//리턴값
    return (
        <div> {/* 여기에 주석을 작성합니다 */}
            <p style={css1}>React 구조를 배우는 중입니다</p>
            <p style={css2}>스타일 변수를 jsx에 적용하는 중입니다.</p>
            <p className="App"> 텍스트 중앙정렬되며 글씨색상은 연녹색입니다 </p>
        </div>
    );
}
export default StyleAdd;