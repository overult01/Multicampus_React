import './welcome.css';

const Welcome = (p) => ( // index.js에서 전달한 변수값을 화살표함수의 매개변수 p에 받아온다.
       // 조건삼항 연산자를 이용한 구분. age가 없으면 이름만 출력. 있으면 모든 변수 출력.
    <h1 className="welcome">
        {
            p.age == ''? 
            "환영합니다" + p.name + "회원님" :

            "환영합니다." + p.name + "회원님."
            + p.age + "살이고 전공은 " + p.major + "입니다. 이번학기는 " + p.score + "점을 받았습니다."
        }
    </h1>
);

export default Welcome;