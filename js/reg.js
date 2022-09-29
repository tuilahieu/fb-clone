const input = document.querySelectorAll(".form-control");
const submitReg = document.querySelector(".reg-btn");
const genders = document.querySelectorAll('input[type="radio"]');

submitReg.addEventListener("click", function () {
  let genderUser = null;
  let avatarDefault = null;
  const firstName = input[0].value;
  const lastName = input[1].value;
  const username = input[2].value;
  const password = input[3].value;
  genders.forEach((gender) => {
    if (gender.checked) {
      genderUser = gender.value;
      if (gender.value === "Nam")
        avatarDefault =
          "https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg";
      if (gender.value === "Nữ")
        avatarDefault =
          "https://anhdephd.vn/wp-content/uploads/2022/04/hinh-avatar-trang-cho-nu-vien-den.jpg";
    }
  });
  let user = {
    name: `${firstName} ${lastName}`,
    username: username,
    password: password,
    gender: `${genderUser}`,
    avatarUrl: `${avatarDefault}`,
  };
  console.log(user.gender);
  if (firstName && lastName && username && password) {
    localStorage.setItem("user", JSON.stringify(user));
    alert(
      `Đăng kí thành công!! \n Tên người dùng : ${firstName} ${lastName} \n Tài khoản: ${username} \n Mật khẩu: ${password} \n Hãy ghi nhớ tài khoản và mật khẩu để đăng nhập ngay bây giờ.`
    );
    window.location.href = "/";
  } else {
    alert("Bạn chưa điền đủ thông tin.\n Vui lòng điền lại");
  }
});
