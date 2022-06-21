//텍스트 타이핑 효과
// span 요소 노드 가져오기
// 내부적으로 한번만 선언하기 때문에 const
const spanEl = document.querySelector("main h2 span");
const txtArr = ['web Publisher','Front-End Developer','Ux Designer']; //화면에 표시할 문장등 배열
let index = 0; //인덱스 0으로 비워버리기
let currentTxt = txtArr[index].split(""); 
//한 글자씩 가져와서 배열로 만들기 = ['w','e','b',' ','p','u','b','l','i','s','h','e','r']

function writeTxt(){
    spanEl.textContent += currentTxt.shift(); //shift : 앞에서부터 한개씩 출력하는 메서드, 대신 파괴적인 메소드기 때문에 w를 배열에서 추출하고 그 배열에서 w를 삭제시켜버린다.
    if(currentTxt.length !==0){ //배열의 길이가 0이 아니다? = 출력할 단어가 남아 있다. = 모두출력할때까지 writeTxt 함수 반복 호출
        setTimeout(writeTxt, Math.floor(Math.random()*100)); //random() 메서드로 무작위를 부여해서 작성되는 글자 속도 매번 달라지게 해줌
    }else{ //else문 실행 = currentTxt 배열이 비었다 = 모든 텍스트가 화면에 출력됐다. =
        currentTxt =spanEl.textContent.split(""); //텍스트 작성 함수 끝내기 전에 화면에 표시된 텍스트를 가져와서 split() 함수로 다시 배열로(current -> txt) 돌려보내준다.
        setTimeout(deleteTxt, 3000); //3000밀리센컨드 = 3s, 3초 뒤에 deleteTxt를 호풀하는 것 까지
    }
}
writeTxt(); //(삭제시키는 함수까지 불러오는것이 writeTxt()함수의 역할)

//삭제 =입력 과정과 비슷, 
//입력은 배열의 앞에서부터 요소를 추출 <-> 삭제는 배열의 뒤에서 부터요소를 추출해서 한글자씩 줄어드는것처럼 표현
function deleteTxt(){ //삭제 함수 만들기
    currentTxt.pop(); //변수에 pop메서드 실행할 것이다.
// 이 때 이 변수에는 split() 메서드로 분리한 배열이 할당되있다 = ['w'','e','b' ...,'r']이 할당 되있다. 
//pop도 파괴적 메서드 = 원본배열(currentTxt배열)에서 삭제되기 시작 -> ['w'','e','b' ...]이 할당
    spanEl.textContent = currentTxt.join(""); //join() 으로 하나의 현재 배열요소들을 문자열로 합침 
// ->web publishe가 span 요소의 텍스트로 할당 = 사용자는 삭제된것 처럼 보임
    if(currentTxt.length !==0){ //배열이 비어 있는지 확인하고 deleteTxt 함수 호출, 호출시간도 무작위로 설정
        setTimeout(deleteTxt, Math.floor(Math.random()*100)); 
    }else{ //모든 배열이 pop()에 의해 삭제
        index =(index +1)& txtArr.length; // index 숫자 < 배열(txtArr)의 길이를 넘지 못하게 하기 위해 1 추가함.
        currentTxt = txtArr[index].split("");
        //증가한 index값으로 문장 배열에 접근 = 새로운 문장 가져올수있음
        //'front-end developer' 가져와서 split으로 처리
        writeTxt(); // 무한 반복
    }
}

const headerEl = document.querySelector("header");
window.addEventListener('scroll',function(){
// 웹 브라우저의 수직 스크롤 위치는 window 객체의 pageYOffset 속성으로 참조할 수 있습니다. 
    const browerScrollY= window.pageYOffset; //스크롤 했을 때 화면이 수직으로 이동하는 픽셀 수
 //속성값> 0 = 스크롤됐다   
    if(browerScrollY > 0){  // = 이를 조건으로 처리 = if 문으로 active 클래스를 추가 및 삭제
        headerEl.classList.add("active"); //명시된 클래스 추가 메서드
    }else{
        headerEl.classList.remove("active"); //제거 메서드
    }
})