"use strict";
const thumbs = document.getElementById("thumbs");
const largeImg = document.getElementById("largeImg");
thumbs.addEventListener("click", (e)=>{
    e.preventDefault();
    const thumbnail = e.target.closest("a");
    if (!thumbnail) return;
    largeImg.src = thumbnail.getAttribute("href");
    largeImg.title = thumbnail.getAttribute("title");
});

//# sourceMappingURL=index.f75de5e1.js.map
