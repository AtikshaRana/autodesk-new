function initWistiaPopover(wistiaId) {
  window.wistiaInitQueue = window.wistiaInitQueue || [];
  window.wistiaInitQueue.push((W) => {
    (function loop() {
      const video = W.api(wistiaId);
      if (video) {
        video.play();
      } else {
        setTimeout(loop, 100);
      }
    })();
  });
}

function loadWistiaScript(setState) {
  const script = document.createElement("script");
  script.src = "//fast.wistia.com/assets/external/E-v1.js";
  script.async = true;
  script.onload = () => {
    setState(true);
  };
  document.body.appendChild(script);
}

export { initWistiaPopover, loadWistiaScript };
