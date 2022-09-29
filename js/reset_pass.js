const searchBtn = document.querySelector(".search-btn.continue");
const errorLog1 = document.querySelector(".error-log.not-found");
const errorLog2 = document.querySelector(".error-log.not-fill");
const input = document.querySelector(".input-control");

const userRegistered = JSON.parse(localStorage.getItem("user"));
const listUsernameRegistered = [userRegistered.username];
searchBtn.onclick = function () {
  if (!input.value) {
    errorLog2.style.display = "block";
    errorLog1.style.display = "none";
  } else if (input.value === listUsernameRegistered[0]) {
    document.querySelector(".main").classList.add("founded");

    let template = `<div class="user-found">
    <div class="info">
        <div class="avatar-founded">
            <img src="${userRegistered.avatarUrl}" width="100%" />
        </div>
        <div class="username-founded">
            <p style="font-weight: bold">${userRegistered.name}</p>
            <span style="font-size: 12px">Người dùng Facebook</span>
        </div>
    </div>
    <button class="search-btn cancel btn-founded" onclick=viewPasswordForgot()>
        xem thông tin
    </button>
  </div>`;
    document.querySelector(".render-founded").innerHTML += template;
  } else {
    errorLog1.style.display = "block";
    errorLog2.style.display = "none";
  }
};

function backToIdentify() {
  document.querySelector(".main").classList.remove("founded");
}

function viewPasswordForgot() {
  alert(
    `Tài khoản: ${userRegistered.username} \n Mật khẩu: ${userRegistered.password}`
  );
}
