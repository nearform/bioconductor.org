const topOffsetToRemove = 150;

document.addEventListener("DOMContentLoaded", function () {
  const internalNavLinks = document.querySelectorAll(".internal-nav a");
  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

  internalNavLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      internalNavLinks.forEach((link) => link.classList.remove("selected-nav"));

      this.classList.add("selected-nav");

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offsetTop = target.offsetTop - topOffsetToRemove;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  window.addEventListener("scroll", () => {
    setCurrentHeading(internalNavLinks, findCurrentHeadingId(headings));
    checkScrollPosition();
  });
});

function checkScrollPosition() {
  const internalNav = document.querySelector(".internal-nav");
  const sidebarBox = document.querySelector(".sidebar-box");
  const scrollPosition = window.scrollY;

  if (
    scrollPosition >=
      document.querySelector(".left-col").offsetTop - topOffsetToRemove &&
    scrollPosition <=
      document.querySelector(".left-col").offsetHeight -
        document.querySelector("footer").offsetHeight -
        320
  ) {
    internalNav.style.position = "fixed";

    sidebarBox.style.position = "fixed";
    sidebarBox.style.top = "558px"; // Adjust this value as needed
  } else {
    internalNav.style.position = "static";
    internalNav.style.top = "auto";

    sidebarBox.style.position = "static";
    sidebarBox.style.top = "auto";
  }
}

function findCurrentHeadingId(headings) {
  for (const heading of headings) {
    const bounding = heading.getBoundingClientRect();
    if (heading.id) {
      if (
        bounding.top > 27 &&
        bounding.top < 180 &&
        bounding.bottom <= window.innerHeight
      ) {
        console.log(bounding.top, heading.id);
        console.log("bottom", bounding.bottom, heading.id);
        return heading.id;
      }
    }
  }
}

function setCurrentHeading(internalNavlinks, activeHeading) {
  internalNavlinks.forEach((link) => {
    const linkHeading = link.getAttribute("href").slice(1);
    activeHeading === linkHeading
      ? link.classList.add("selected-nav")
      : link.classList.remove("selected-nav");
  });
}
