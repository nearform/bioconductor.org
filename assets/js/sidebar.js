const addedTopBounding = 80;
document.addEventListener("DOMContentLoaded", function () {
  const sidebarContentLinks = document.querySelectorAll(".internal-nav a");
  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  const header = document.querySelector("header");
  const headerHeight = header.offsetHeight;

  sidebarContentLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offsetTop = target.offsetTop - headerHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  window.addEventListener("scroll", () => {
    setCurrentHeading(sidebarContentLinks, findCurrentHeadingId(headings));
    checkScrollPosition();
  });
});

function checkScrollPosition() {
  const leftCol = document.querySelector(".left-col");
  const sidebarContent = document.querySelector(".left-col-inner");
  const footer = document.querySelector("footer");
  const header = document.querySelector("header");
  const headerHeight = header.offsetHeight;
  const footerOffsetTop = footer.offsetTop;
  const footerHeight = footer.offsetHeight;
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  if (
    scrollPosition >= leftCol.offsetTop - headerHeight &&
    scrollPosition <= leftCol.offsetHeight - footerHeight
  ) {
    sidebarContent.style.position = "fixed";

    if (scrollPosition + windowHeight >= footerOffsetTop) {
      leftCol.style.justifyContent = "flex-end";
      sidebarContent.style.position = "static";
      sidebarContent.style.top = "auto";
    } else {
      leftCol.style.justifyContent = "flex-start";
    }
  } else {
    sidebarContent.style.position = "static";
    sidebarContent.style.top = "auto";
  }
}

function findCurrentHeadingId(headings) {
  for (const heading of headings) {
    const bounding = heading.getBoundingClientRect();
    if (heading.id) {
      if (
        bounding.top >= addedTopBounding &&
        bounding.bottom <= window.innerHeight
      ) {
        console.log(heading.id, bounding.top);
        return heading.id;
      }
    }
  }
}

function setCurrentHeading(sidebarContentlinks, activeHeading) {
  sidebarContentlinks.forEach((link) => {
    const linkHeading = link.getAttribute("href").slice(1);
    activeHeading === linkHeading
      ? link.classList.add("selected-nav")
      : link.classList.remove("selected-nav");
  });
}
