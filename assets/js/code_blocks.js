document.addEventListener("DOMContentLoaded", () => {
  Array.from(document.getElementsByTagName("code")).forEach((block) => {
    block.innerHTML = block.innerHTML.trim();
  });

  hljs.highlightAll();
});
