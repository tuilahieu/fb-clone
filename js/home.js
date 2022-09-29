const slickAppend = document.querySelector(".slick-slider");
const userInfo = JSON.parse(localStorage.getItem("user"));
const avatar1 = document.querySelector(".nav__item .circle img");
const name1 = document.querySelector(".nav__item span");
const name2 = document.querySelector(".role__action input");
const avatar2 = document.querySelector(".header__right img");
const avatar3 = document.querySelector(".role__action img");
const avatar4 = document.querySelector(
  ".role__header-items.add-story .your-img"
);
avatar1.src = userInfo.avatarUrl;
avatar2.src = userInfo.avatarUrl;
avatar3.src = userInfo.avatarUrl;
avatar4.src = userInfo.avatarUrl;
name1.textContent = userInfo.name;
name2.setAttribute("placeholder", `${userInfo.name} ơi, bạn đang nghĩ gì vậy?`);
function renderStory(num) {
  let templateStory;
  for (let i = 0; i < num; i++) {
    templateStory = `
    <div class="role__header-items position-relative mx-2">
    <img src="../img/gender/nam.jpg" alt="" width="100%" />
    <div class="text">
    <span>tin số ${num}</span>
    </div>
    </div>`;
    slickAppend.innerHTML += templateStory;
  }
}

renderStory(10);

// tempalte

const templatePost = `
<div class="single__post">
              <div class="post__header d-flex justify-content-between">
                <div class="post__header-1 d-flex">
                  <img src="../img/gender/nam.jpg" alt="" height="100%" />
                  <p style="line-height: 50px; font-weight: 600">
                    Tran Hieu
                    <i
                      style="
                        border-radius: 50%;
                        padding: 3px 4px;
                        background-color: #1b74e4;
                        color: #fff;
                        font-size: 10px;
                        margin-left: 2px;
                      "
                      class="fa-solid fa-check"
                    ></i>
                  </div>
                  <div class="post__header-2 flex-grow-1 text-end">
                    <button class="btn btn-danger">xóa</button>
                  </div>
                  </p>
              </div>
              <div class="post__content"> 
                <p>Hehehe rảnh mình sẽ update thêm chức năng post bài</p>
                  <img src="../img/post.png" width="100%" class="post__img" style="border:1px solid #ccc">
              </div>
              <div class="post__status d-flex align-items-center justify-content-between py-2">
                <div class="post__emote">
                  <i style="background-color: #1877F2;" class="fa-solid fa-thumbs-up"></i>
                  <i style="background-color: #FA383E;" class="fa-solid fa-heart"></i>
                  <i style="background-color: #F5C33B;" class="fa-solid fa-face-laugh-squint"></i>
                  <span>1,234</span>
                </div>
                <div >
                  <span>1,8K bình luận</span>
                  <span style="margin-left: 6px">1,8K chia sẻ</span>
                </div>
              </div>
              <div class="post__action d-flex">
                  <div class="btn btn-light flex-grow-1">
                    <i style="color: #000;" class="fa-solid fa-thumbs-up"></i>
                    <span>Thích</span>
                  </div>
                  <div class="btn btn-light flex-grow-1">
                    <i style="color: #000;" class="fa-solid fa-comment"></i>
                    <span>Bình luận</span>
                  </div>
                  <div class="btn btn-light flex-grow-1">
                    <i style="color: #000;" class="fa-solid fa-share"></i>
                    <span>Chia sẻ</span>
                  </div>
              </div>
              <div class="comment-view view d-flex align-items-center my-2">
                <img src="../img/gender/nam.jpg" alt="" height="40px" style="border-radius: 50%;border: 1px solid #ccc;margin-right: 5px"/>
                  <div class="comment-block rounded-3 p-2">
                    <div class="comments">
                      <span style="line-height: 40px; font-weight: 600">
                        Tran Hieu
                        <i
                          style="
                            border-radius: 50%;
                            padding: 3px 4px;
                            background-color: #1b74e4;
                            color: #fff;
                            font-size: 10px;
                            margin-left: 2px;
                          "
                          class="fa-solid fa-check"
                        ></i>
                      </span>
                      <br>
                      <span>Cho mình xin nhận xét với nha =)))</span>
                    </div>
                  </div>
              </div>
              <div class="status-comment text-center">Bài viết đã bị tắt bình luận.</div>
            </div>
`;
