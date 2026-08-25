(function () {
  "use strict";

  const ids = window.ANON_VIDEO_IDS || {};
  const validId = /^[A-Za-z0-9_-]{11}$/;

  document.querySelectorAll("[data-youtube-key]").forEach((frame) => {
    const key = frame.dataset.youtubeKey;
    const id = ids[key];
    if (!validId.test(id || "")) return;

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}`;
    iframe.title = frame.dataset.title || "MemGUI-Agent demonstration";
    iframe.loading = "lazy";
    iframe.allowFullscreen = true;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.replaceChildren(iframe);

    document.querySelectorAll(`[data-youtube-link="${key}"]`).forEach((link) => {
      link.href = `https://www.youtube.com/watch?v=${id}`;
      link.target = "_blank";
      link.rel = "noopener";
    });
  });
})();
