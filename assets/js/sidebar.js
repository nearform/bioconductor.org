const addedTopBounding = 80;
document.addEventListener("DOMContentLoaded", function () {
  const sidebarContent = document.querySelector(".internal-nav");
  const sidebarToggle = document.querySelector(".left-col");

  const sidebarContentLinks = document.querySelectorAll(".internal-nav a");
  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  const header = document.querySelector("header");
  const headerHeight = header.offsetHeight;

  sidebarToggle.addEventListener("click", () => {
    toggleNavMenu(sidebarToggle);
  });

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
  });
});

function findCurrentHeadingId(headings) {
  for (const heading of headings) {
    const bounding = heading.getBoundingClientRect();
    if (heading.id) {
      if (
        bounding.top >= addedTopBounding &&
        bounding.bottom <= window.innerHeight
      ) {
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

function toggleNavMenu(sidebarContent) {
  sidebarContent.classList.contains("open")
    ? sidebarContent.classList.remove("open")
    : sidebarContent.classList.add("open");
}
