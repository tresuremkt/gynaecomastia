document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector("#hero");
  const scrollCue = document.querySelector(".scroll-cue");

  if (hero && scrollCue && "IntersectionObserver" in window) {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        scrollCue.classList.toggle("is-hidden", !entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    heroObserver.observe(hero);
  }

  const typeGrid = document.querySelector(".type-grid");

  if (typeGrid && "IntersectionObserver" in window) {
    const typeObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          typeGrid.classList.add("is-visible");
          typeObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    typeObserver.observe(typeGrid);
  } else if (typeGrid) {
    typeGrid.classList.add("is-visible");
  }
});
