const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const avatar = document.querySelector(".avatar");

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
