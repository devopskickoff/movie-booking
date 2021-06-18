let aladdinOccupied = ["F","G","J"];
let cocoOccupied = ["Z"];
let frozenOccupied = ["A","B"];
//초기화 전부 불러오기
//seatArr[i]값이 true면 클래스에 occupied붙이기
//색도 그레이로 바꾸기
//진짜 아예 점유된 애들은 바꿔야댐

//점유된 자리만 선점된 자리로 표시하기
function loadSeatList(seatArr){
  
}

//자리리셋
function seatListReset(){
 var seats = document.getElementsByClassName("seat");
 for(var i = 0; i < seats.length; i++){
   seats[i].classList.remove("occupied");
   seats[i].classList.remove("selected");
 }
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


seatOnclickEvent();
returnPrice();
