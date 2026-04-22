const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const avatar = document.querySelector(".avatar");
const revealItems = document.querySelectorAll(".reveal-item");

if (menuButton && header) {
  menuButton.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

if (avatar) {
  avatar.addEventListener(
    "error",
    () => {
      avatar.src = "https://avatars.githubusercontent.com/u/98426812?v=4";
    },
    { once: true },
  );
}

if (revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else if (entry.boundingClientRect.top > window.innerHeight * 0.9) {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 40, 220)}ms`;
    observer.observe(item);
  });
}
