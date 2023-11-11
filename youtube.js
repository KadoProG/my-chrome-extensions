"use strict";

// Chromeのストレージを取得
chrome.storage.local.get(["youtube_extension_storage_local"]).then((obj) => {
  const nowDate = new Date().toLocaleDateString("sv-SE");
  let initCount = 0;

  // データのリセット
  if (isEmpty(obj) || obj.youtube_extension_storage_local.date !== nowDate) {
    const setData = { date: nowDate, count: 0 };
    chrome.storage.local.set({
      youtube_extension_storage_local: setData,
    });
  } else {
    initCount = obj.youtube_extension_storage_local.count;
  }

  loopTimer(nowDate, initCount);
  console.log(obj.youtube_extension_storage_local);
});

const loopTimer = (nowDate, initCount) => {
  const setData = { date: nowDate, count: ++initCount };
  chrome.storage.local.set({ youtube_extension_storage_local: setData });
  if (initCount >= 60 * 60) {
    document.body.innerHTML = "";
    setTimeout(() => {
      alert("1時間経過したぞ、寝ろ");
      window.location.href = "https://notion.so/";
    });
  } else {
    if (initCount === 30 * 60) {
      alert("残り30分です");
    }
    setTimeout(() => loopTimer(nowDate, initCount), 1000);
  }
};

const isEmpty = (obj) => {
  return !Object.keys(obj).length;
};
