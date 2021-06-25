//점유된 좌석만 배열에 담기
let all = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let aladdin = ["F", "G", "J"];
let coco = ["Y"];
let frozen = ["A", "B"];
//초기화 전부 불러오기
//seatArr[i]값이 true면 클래스에 occupied붙이기
//색도 그레이로 바꾸기
//진짜 아예 점유된 애들은 바꿔야댐

//점유된 자리만 선점된 자리로 표시하기
function loadSeatList(seatArr) {
  if (seatArr) {
    for (var i = 0; i < seatArr.length; i++) {
      document.getElementById(`${seatArr[i]}`).classList.add("occupied");
    }
  }
}

//자리목록과 확인창 리셋
function seatListReset() {
  var seats = document.getElementsByClassName("seat");
  for (var i = 0; i < seats.length; i++) {
    seats[i].classList.remove("occupied");
    seats[i].classList.remove("selected");
  }
  document.getElementsByClassName("seatResult")[0].textContent = "";
}

function selectDefault() {
  document.getElementById("movieList").addEventListener("change", function () {
    seatListReset();
    var movieTitle = document.querySelector("#movieList > option:checked").value;
    switch (movieTitle) {
      case "all":
        loadSeatList(all);
        break;
      case "aladdin":
        loadSeatList(aladdin);
        break;
      case "coco":
        loadSeatList(coco);
        break;
      case "frozen":
        loadSeatList(frozen);
    }
  });
}

//onclick시 이벤트 넣기
function seatOnclickEvent() {
  var seats = document.getElementsByClassName("seat");
  for (let i = 0; i < seats.length; i++) {
    if (!seats[i].classList.contains("occupied")) {
      seats[i].addEventListener("click", function () {
        seats[i].classList.toggle("selected");
      });
    }
  }
}

//확인 누를시 총 시트리스트 확인
function returnPrice() {
  var btn1 = document.getElementById("btn1");
  btn1.addEventListener("click", checkSeatList);
}

//체크하고 price div에 자리 넣어주기, 변수값 바꿔주기
function checkSeatList() {
  var seatResultDiv = document.getElementsByClassName("seatResult")[0];
  var seats = document.getElementsByClassName("selected");
  var returnResult = "";
  for (var i = 0; i < seats.length; i++) {
    //returnResult에 담아주기
    returnResult += seats[i].innerHTML;
    //변수값을 바꿔주기(localstorage용)
  }
  seatResultDiv.textContent = returnResult;
}

//초기화
//loadSeatList();
seatListReset();
selectDefault();
seatOnclickEvent();
returnPrice();
