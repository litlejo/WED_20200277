var close_time; // 시간 정보
var close_time2 = 10; // 10초 설정

clearTimeout(close_time); // 재호출 정지
close_time= setTimeout("close_window()", 10000);  // 1/1000 초 지정, 바로 시작 
show_time(); // 실시간 시간 보여주기

/*function show_time(){
        let divClock = document.getElementById('Time');
        divClock.innerText = close_time2; // 10초 삽입 시작
        close_time2--; // 1초씩 감소
    setTimeout(show_time, 1000);  //1초마다 갱신
}*/
function show_time() {
  let remainingSeconds = 8; // 초기 남은 시간 설정
  const divClock = document.getElementById('Time');
  divClock.innerText = "남은 시간은 " + remainingSeconds + "초 입니다."; // 초기 텍스트 표시
  remainingSeconds--; // 1초씩 감소

  setInterval(function() {
    if (remainingSeconds >= 0) {
      divClock.innerText = "남은 시간은 " + remainingSeconds + "초 입니다.";
      remainingSeconds--;
    }
  }, 1000);
}

// 예시 사용법
show_time();


// 예시 사용법
const remainingSeconds = 8;
show_time(remainingSeconds);



function close_window() { // 함수 정의
   window.close(); // 윈도우 닫기
}

//window.onload=showWindow;