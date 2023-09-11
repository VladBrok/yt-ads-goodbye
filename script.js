setInterval(function () {
  if (
    document.getElementsByClassName("video-stream html5-main-video")[0] !==
    undefined
  ) {
    let ad = document.getElementsByClassName("video-ads ytp-ad-module")[0];
    let vid = document.getElementsByClassName(
      "video-stream html5-main-video"
    )[0];
    let closeAble = document.getElementsByClassName(
      "ytp-ad-overlay-close-button"
    );
    for (let i = 0; i < closeAble.length; i++) {
      closeAble[i].click();
    }
    if (
      document.getElementsByClassName(
        "style-scope ytd-watch-next-secondary-results-renderer sparkles-light-cta GoogleActiveViewElement"
      )[0] !== undefined
    ) {
      let sideAd = document.getElementsByClassName(
        "style-scope ytd-watch-next-secondary-results-renderer sparkles-light-cta GoogleActiveViewElement"
      )[0];
      sideAd.style.display = "none";
    }
    if (
      document.getElementsByClassName(
        "style-scope ytd-item-section-renderer sparkles-light-cta"
      )[0] !== undefined
    ) {
      let sideAd_ = document.getElementsByClassName(
        "style-scope ytd-item-section-renderer sparkles-light-cta"
      )[0];
      sideAd_.style.display = "none";
    }
    if (
      document.getElementsByClassName(
        "ytp-ad-text ytp-ad-skip-button-text"
      )[0] !== undefined
    ) {
      let skipBtn = document.getElementsByClassName(
        "ytp-ad-text ytp-ad-skip-button-text"
      )[0];
      skipBtn.click();
    }
    if (
      document.getElementsByClassName("ytp-ad-message-container")[0] !==
      undefined
    ) {
      let incomingAd = document.getElementsByClassName(
        "ytp-ad-message-container"
      )[0];
      incomingAd.style.display = "none";
    }
    if (
      document.getElementsByClassName(
        "style-scope ytd-companion-slot-renderer"
      )[0] !== undefined
    ) {
      document
        .getElementsByClassName("style-scope ytd-companion-slot-renderer")[0]
        .remove();
    }
    if (
      ad !== undefined &&
      ad.children.length > 0 &&
      document.getElementsByClassName("ytp-ad-text ytp-ad-preview-text")[0] !==
        undefined
    ) {
      {
        vid.playbackRate = 16;
      }
    }
  }
}, 500);
