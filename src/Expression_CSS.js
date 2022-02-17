function StyleAdd(){

    const css1 = {
        'color' : 'red',
        'backgroundColor' :'#f0f0ff', // CSS내 - 대신 camel case로 쓸 것.
        'fontSize' : '2em'
    }


// 지역변수
// 여러개 태그일 경우 1개의 태그로 감싸야 한다.
    return( /* 리턴문에서 주석은 이렇게 작성. 자바스크립트에서 여러줄 주석처럼 */
        <div> 
            <p style={css1}>CSS적용 방법1: 변수 이용</p>
            <p style={
                {
                    'color' : 'blue',
                    'backgroundColor' :'#f0f0ff',
                    'fontSize' : '1.5em'
                }
            }>CSS적용 방법2: 직접 CSS적용</p>
            <p className="App">CSS적용 방법3: index.css에서 설정한 스타일속성을 index.js가 가져와서 적용.</p>
        </div>
    );
}

export default StyleAdd;