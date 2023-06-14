function login(){
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    let check = document.querySelector("#idSaveCheck");
	
    form.action = "../index_login.html";
    form.method = "get";
	
	if(check.checked == true) { // 아이디 체크 o
            alert("쿠키를 저장합니다.");
            setCookie("id", id.value, 1); // 1일 저장
            alert("쿠키 값 :" + id.value);
        } 
    else { // 아이디 체크 x
            setCookie("id", id.value, 0); //날짜를 0 - 쿠키 삭제
    }
    
    if(id.value.length === 0 || password.value.length === 0){
        alert("아이디와 비밀번호를 모두 입력해주세요.");
    }else{
        session_set(); // 세션 생성
		form.submit();
         }
    }

function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
    let id = document.querySelector("#floatingInput");
    let check = document.querySelector("#idSaveCheck");
    let get_id = getCookie("id");
    
    if(get_id) { 
    id.value = get_id; 
    check.checked = true; 
    }
}



function logout(){
    location.href='../index.html';
  }
	
function get_id(){
    if(true){
        decrypt_text();
    }
    else{
	var getParameters = function(paramName){ // 변수 = 함수(이름)
    var returnValue; // 리턴값을 위한 변수 선언
    var url = location.href; // 현재 접속 중인 주소 정보 저장
    var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&'); // ?기준 slice 한 후 split 으로 나눔
        for(var i = 0; i < parameters.length; i++) { 
		    var varName = parameters[i].split('=')[0];
	alert(getParameters('id') + '님 방갑습니다!'); // 메시지 창 출력
		}
	
           
            if (varName.toUpperCase() == paramName.toUpperCase()) {
                returnValue = parameters[i].split('=')[1];
                return decodeURIComponent(returnValue);
            // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
		    }
	    } // 2중 for문 끝
}; // 함수 끝
}

function logout(){
    session_del(); // 세션 삭제
    location.href='../index.html';
}

function addJavascript(jsname) { // 자바스크립트 외부 연동
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}
    addJavascript('/js/security.js'); // 암복호화 함수
    addJavascript('/js/session.js'); // 세션 함수
    addJavascript('/js/cookie.js'); // 쿠키 함수
/*let loginTime;

function login() {
  // 로그인 처리 로직

  loginTime = new Date();
  loginTime.setMinutes(loginTime.getMinutes() + 5);

  setTimeout(logout, 5 * 60 * 1000); // 5분 = 5 * 60 * 1000 밀리초
}

function logout() {
  // 세션 삭제 로직

  window.location.href = "main.html";
}

// 로그인 시간 유지 함수
function maintainLoginTime() {
  const currentTime = new Date();
  if (currentTime >= loginTime) {
    logout();
  } else {
    setTimeout(maintainLoginTime, 1000);
  }
}

// 예시 사용법
login();
maintainLoginTime();*/

function getCookieValue(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return "";
}

/*function setCookieValue(cookieName, value) {
    document.cookie = cookieName + "=" + value;
}

function login_count() {
    let count = parseInt(getCookieValue("login_cnt"));
    count++;
    setCookieValue("login_cnt", count);
    console.log("로그인 횟수: " + count);
}

function logout_count() {
    let count = parseInt(getCookieValue("logout_cnt"));
    count++;
    setCookieValue("logout_cnt", count);
    console.log("로그아웃 횟수: " + count);
}

function login() {
    login_count();
    // 로그인 처리 추가 작업
}

function logout() {
    logout_count();
    // 로그아웃 처리 추가 작업
}*/

// login.js

/*const loginTimeout = 5 * 60 * 1000; // 5분 (밀리초 단위)

function getCookieValue(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return "";
}

function setCookieValue(cookieName, value) {
    document.cookie = cookieName + "=" + value;
}

function deleteCookie(cookieName) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function login_count() {
    let count = parseInt(getCookieValue("login_cnt"));
    count++;
    setCookieValue("login_cnt", count);
    console.log("로그인 횟수: " + count);
}

function login() {
    const failedLoginCount = parseInt(getCookieValue("failed_login_cnt"));

    if (failedLoginCount >= 3) {
        console.log("로그인이 제한되었습니다.");
        return;
    }

    login_count();

    // 로그인 처리 추가 작업

    // 세션 유지 시간 설정
    setTimeout(logout, loginTimeout);
}

function logout() {
    deleteCookie("login_cnt");
    deleteCookie("failed_login_cnt");
    console.log("자동 로그아웃 되었습니다.");
    // 메인 페이지로 이동 추가 작업
}

function login_failed() {
    let count = parseInt(getCookieValue("failed_login_cnt"));
    count++;
    setCookieValue("failed_login_cnt", count);
    console.log("로그인 실패 횟수: " + count);

    if (count >= 3) {
        console.log("로그인이 제한되었습니다.");
    }
}

function loginFailedDelay() {
    setTimeout(login_failed, 5000); // 5초 지연 후 로그인 실패 처리
}*/

/*function login_check(id, password) {
  const idPattern = /^[a-zA-Z0-9]{4,12}$/;
  const passwordPattern = /^[a-zA-Z0-9!@#$%^&*()]{6,16}$/;

  if (!idPattern.test(id) || !passwordPattern.test(password)) {
    console.log("아이디와 패스워드 형식이 올바르지 않습니다.");
    return false;
  }

  return true;
}*/
