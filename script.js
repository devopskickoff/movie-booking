let seatArr = {
  A: true,
  B: true,
  C: false,
  D: false,
  E: false,
};

//초기화 전부 불러오기
//seatArr[i]값이 true면 클래스에 occupied붙이기
//색도 그레이로 바꾸기
function loadSeatList() {
  for (let i in seatArr) {
    var seat = document.getElementById(`${i}`);
    if (seatArr[i]) {
      seat.classList.add("occupied");
    } else {
      seat.classList.remove("occupied");
    }
  }
  var seats = document.getElementsByClassName("seat");
  for (let i = 0; i < seats.length; i++) {
    seats[i].addEventListener("click", function () {
      seats[i].classList.toggle("occupied");
    });
  }

  var btn1 = document.getElementById("btn1");
  btn1.addEventListener("click", checkSeatList);
}

//체크하고 price div에 자리 넣어주기, 변수값 바꿔주기
function checkSeatList() {
  var seatResultDiv = document.getElementsByClassName("seatResult")[0];
  var seats = document.getElementsByClassName("occupied");
  var returnResult = "";  
  for (var i = 0; i < seats.length; i++) {
    //returnResult에 담아주기
    returnResult += seats[i].innerHTML;
    //변수값을 바꿔주기(localstorage용)
    seatArr[`"${seats[i].innerHTML}"`] = true;
  }
  seatResultDiv.textContent = returnResult;
}

loadSeatList();
