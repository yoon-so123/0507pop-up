const modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const declineBtn = document.getElementById("decline");
const modalChoiceBtns = document.getElementById("modal-choice-btns");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

declineBtn.addEventListener("mouseenter", function () {
  modalChoiceBtns.classList.toggle("modal-choice-btns-reverse");
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

consentForm.addEventListener("submit", function (event) {
  event.preventDefault(); //폼에서 submit을 하면 새로고침이 되는데 이걸 방지.
  const consentFormData = new FormData(consentForm);
  const name = consentFormData.get("fullName");
  //   console.log(consentFormData.get("fullName"));
  //   console.log(consentFormData.get("email"));

  modalText.innerHTML = `<div class="modal-inner-loading"> <img src="images/loading.svg" class="loading">
   <p id="upload-text">Uploading your data to the dark web...</p>
</div>`;
  setTimeout(function () {
    const uploadText = document.getElementById("upload-text");
    uploadText.innerText = "Making the sale...";
  }, 1500);
  setTimeout(function () {
    const modalInner = document.getElementById("modal-inner");
    modalInner.innerHTML = `<h2>고맙습니다. ${name}</h2><p>개인정보를 모두 팔아넘겼습니다.</p>
     <img src="images/loading.svg" class="loading">
     <div class="idiot-gif"><img src="images/pirate.gif"></div>`;
    modalCloseBtn.disabled = false;
  }, 3000);
});

//form 에 사용자가 입력한 값은
//FormData(폼객체이름) 라는 함수로 쉽게 가져올 수 있다. 어느폼인지 써줘야함.(폼객체이름을)
//how to use?
//form 의 DOM 객체 이름이 form1 이다. 그럴경우
//const(or let) formData = new FormData(form1) //new 붙여줘야함. 적당한 변수 let const 든 붙여주면됨..
//객체 형식으로 받아서 쓸 수 있다.

//setTimeout
//forms
//formData get
//event.preventDefault
//css 를 두개 다른거 주고 toggle 하는 기법
//disabled
