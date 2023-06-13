//document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = []; // 빈 배열 – 전역 변수

function search_message(){
   let search_str = document.querySelector("#search_txt");
    if(search_str.value.length === 0){
       alert("검색어가 비었습니다. 입력해주세요"); 
    }
    else{
       alert("검색을 수행합니다!");
       search_array.push(search_str.value); // 배열에 검색어 추가
       let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환
        document.querySelector("#form_main").submit();
    }
}

/*function search_message(){
   alert("검색을 수행합니다!");
   let search_str = document.querySelector("#search_txt"); // 변수에 저장
   document.getElementById("search_message").innerHTML = search_str.value; // 태그에 값 추가
   console.log(search_str.value); // 콘솔에 출력
}*/

const restrictedWords = ['존나', '시발', '병신'];

function handleSubmit() {
  const searchInput = document.getElementById('searchInput').value;

  if (restrictedWords.includes(searchInput)) {
    console.log('검색을 중단합니다.');
    return false;
  }

  console.log('검색을 실행합니다.');
  // 폼의 추가 동작 수행 또는 서버로 검색 요청 등의 로직
  return true;
}

// HTML 폼에서 호출하는 함수를 등록
