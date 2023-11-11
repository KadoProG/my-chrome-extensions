"use strict";

const sideDeleteEvent = () => {
  if (window.innerWidth < 988) {
    return;
  }

  const base = document.getElementById("react-root");
  const base_2 =
    base.firstElementChild.firstElementChild.lastElementChild.lastElementChild
      .firstElementChild.firstElementChild.firstElementChild.lastElementChild;

  if (!base_2) return;
  // console.log(base_2);
  base_2.style.display = "none";
  if (!base_2.previousElementSibling) return;
  base_2.previousElementSibling.style.maxWidth = "none";
  base_2.previousElementSibling.firstElementChild.lastElementChild.style.maxWidth =
    "none";
};

const loadFireEvent = () => {
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      sideDeleteEvent();
    }, i * 20);
  }
};

window.addEventListener("resize", () => sideDeleteEvent());
window.addEventListener("hashchange", () => loadFireEvent());

loadFireEvent();

const observer = new MutationObserver(function () {
  // 処理
  loadFireEvent();
});
observer.observe(document, { childList: true, subtree: true });

const imgSizeControl = () => {
  const imgDataAll = document.querySelectorAll("img");
  imgDataAll.forEach((imgData) => {
    if (imgData.clientHeight > 200) {
      const imgElm_p = imgData.parentElement;
      if (imgElm_p) {
        const imgElm_p_p = imgElm_p.parentElement;
        if (imgElm_p_p) {
          const imgElm_p_p_p = imgElm_p_p.parentElement;
          if (imgElm_p_p_p) {
            const imgElm_p_p_p_p = imgElm_p_p_p.parentElement;
            if (imgElm_p_p_p_p) {
              const imgElm_p_p_p_p_p = imgElm_p_p_p_p.parentElement;
              if (imgElm_p_p_p_p_p) {
                const imgElm_p_p_p_p_p_p = imgElm_p_p_p_p_p.parentElement;
                if (imgElm_p_p_p_p_p_p) {
                  const imgElm_p_p_p_p_p_p_p = imgElm_p_p_p_p_p_p.parentElement;
                  if (imgElm_p_p_p_p_p_p_p) {
                    const imgElm_p_p_p_p_p_p_p_p =
                      imgElm_p_p_p_p_p_p_p.parentElement;
                    if (imgElm_p_p_p_p_p_p_p_p) {
                      const imgElm_p_p_p_p_p_p_p_p_p =
                        imgElm_p_p_p_p_p_p_p_p.parentElement;
                      if (imgElm_p_p_p_p_p_p_p_p_p) {
                        const imgElm_p_p_p_p_p_p_p_p_p_p =
                          imgElm_p_p_p_p_p_p_p_p_p.parentElement;
                        if (imgElm_p_p_p_p_p_p_p_p_p_p) {
                          const imgElm_p_p_p_p_p_p_p_p_p_p_p =
                            imgElm_p_p_p_p_p_p_p_p_p_p.parentElement;
                          if (imgElm_p_p_p_p_p_p_p_p_p_p_p) {
                            console.log(imgElm_p_p_p_p_p_p_p_p_p_p_p);
                            console.log("これが元");
                            imgElm_p_p_p_p_p_p_p_p_p_p_p.style.height =
                              "300px !important";
                            imgElm_p_p_p_p_p_p_p_p_p_p_p.style.height = "200px"; // ほとんどの画像に対しての処理
                            imgElm_p_p_p_p_p_p_p_p_p_p_p.style.width = `${
                              imgData.clientWidth / (imgData.clientHeight / 200)
                            }px`;
                            const imgElm_p_p_p_p_p_p_p_p_p_ppp =
                              imgElm_p_p_p_p_p_p_p_p_p_p_p.parentElement
                                .parentElement.parentElement.parentElement
                                .parentElement;
                            if (imgElm_p_p_p_p_p_p_p_p_p_ppp) {
                              console.log(imgElm_p_p_p_p_p_p_p_p_p_ppp);
                            }
                            //   const imgElm_p_p_p_p_p_p_p_p_p_p_p_p =
                            //     imgElm_p_p_p_p_p_p_p_p_p_p_p.parentElement;
                            //   console.log(imgElm_p_p_p_p_p_p_p_p_p_p_p_p);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      // console.log(imgData.parentElement);
      // imgData.style.maxHeight = "300px !important";
      // if (imgData.parentElement)
      //   imgData.parentElement.style.maxHeight = "300px !important";
    }
  });
};

window.addEventListener("scroll", imgSizeControl);
