// <div data-cy="navbar-post-button"></div>の要素を取得
const navbarPostButton = document.querySelector(
  '[data-cy="navbar-post-button"]'
);

window.addEventListener("keydown", (e) => {
  if (e.key === "n") {
    // 新規作成
    navbarPostButton?.click();
  }
});
