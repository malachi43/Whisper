let popUpContainer = document.querySelector(".pop-up-container");
let messageBox = document.querySelector(".message-box");
let sendMsgBtn = document.querySelector(".send-btn");
let resetMsg = document.querySelector(".reset-btn");
let closeMsgBtn = document.querySelector(".xmark");
let writeMsgBtn = document.querySelector(".write-msg-btn");
let overLay = document.querySelector("#overlay");

function toggleBtnForPopUp() {
  popUpContainer.style.display = "block";
  overLay.style.display = "block";
  messageBox.focus();
}
function closeMessage() {
  popUpContainer.style.display = "none";
  overLay.style.display = "none";
  messageBox.value = "";
}
function resetMessage() {
  messageBox.value = "";
  messageBox.focus();
}

writeMsgBtn.addEventListener("click", toggleBtnForPopUp);
resetMsg.addEventListener("click", resetMessage);
closeMsgBtn.addEventListener("click", closeMessage);
