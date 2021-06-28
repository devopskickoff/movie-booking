let aladdin = ["F", "G", "J"];
let coco = ["Y"];
let frozen = ["A", "B"];
let myMovie = [];


//예약정보가 있으면 바로 모달로 티켓을 볼 수 있도록함
function loadModal(){
  //초기에는 모달 안보임
  var modal = document.getElementsByClassName("modal")[0];
  // 로컬 스토리지에 내 예약내역이 있으면 모달을 보이게
  var myMovie = localStorage.getItem("myMovie");  
  if(myMovie){
    console.log(myMovie);
    alert("영화 예매 정보가 있습니다");
    let ticketContent = document.getElementsByClassName("ticket-content")[0];
    console.log(myMovie[0]);
    ticketContent.textContent += myMovie[0];
    modal.style.display = "block";
  } else {
    console.log(myMovie)
    modal.style.display = "none";
    loadSeatList();  
  }
}

//처음접속시와 영화선택이 없을 경우 seat는 모두 hidden 처리, 선택된 영화가 있을시 hidden을 다시 block처리, 점유된 자리만 선점된 자리로 표시하기
function loadSeatList(seatArr) {
  var seats = document.getElementsByClassName("seat");
  if(seatArr==null){
    for(var i = 0;i < seats.length; i++){
      seats[i].style.display = "none";
    } 
  } else {
      if (seatArr) {
        for(var i = 0;i < seats.length; i++){
          seats[i].style.display = "block";
        }
        for (var i = 0; i < seatArr.length; i++) {
          document.getElementById(`${seatArr[i]}`).classList.add("occupied");
        }
      }
    } 
}

//모든 좌석의 클래스 초기화
function seatListReset() {
  var seats = document.getElementsByClassName("seat");
  for (var i = 0; i < seats.length; i++) {
    seats[i].classList.remove("occupied");
    seats[i].classList.remove("selected");
  }
  //document.getElementsByClassName("seatResult")[0].textContent = "";
}

function selectDefault() {
  document.getElementById("movieList").addEventListener("change", function () {
    seatListReset();
    var movieTitle = document.querySelector("#movieList > option:checked").value;
    switch (movieTitle) {
      case "all":
        loadSeatList();
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

//확인 누를시 총 시트리스트 확인, 로컬스토리지에 저장하고 모달창 띄우기
function returnPrice() {
  var btn1 = document.getElementById("btn1");
  btn1.addEventListener("click", checkSeatList);
}

//체크하고 price div에 자리 넣어주기, 변수값 바꿔주기
function checkSeatList() {
  var movieTitle = document.querySelector("#movieList > option:checked").value;
  var seatResultDiv = document.getElementsByClassName("seatResult")[0];
  var seats = document.getElementsByClassName("selected");
  var returnResult = "";
  for (var i = 0; i < seats.length; i++) {
    returnResult += seats[i].innerHTML;
  }
  //로컬스토리지에 저장
  localStorage.setItem("myMovie",[movieTitle,returnResult]);
  loadModal();

}

//예매취소
function ticketCancel(){
  document.getElementById("btnCancel").addEventListener("click",function(){
    localStorage.removeItem("myMovie");
    var modal = document.getElementsByClassName("modal")[0];
    // 로컬 스토리지에 내 예약내역이 있으면 모달을 보이게
    modal.style.display = "none";
    loadSeatList();
  });
}

//초기화
loadModal();
//loadSeatList();
ticketCancel();
seatListReset();
selectDefault();
seatOnclickEvent();
returnPrice();
