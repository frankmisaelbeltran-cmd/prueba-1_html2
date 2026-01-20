const container = document.getElementById("scroll-container");
const scene = document.getElementById("scene");
const clouds = document.querySelectorAll(".cloud");

let currentScroll = 0;

function animate() {
  const maxScroll = container.scrollWidth - container.clientWidth;
  const progress = Math.min(currentScroll / maxScroll, 1);

  /* 🎨 DÍA → NOCHE (AZUL REAL, NO VERDE) */
  const topColor = [
    135 - progress * 90,
    206 - progress * 120,
    235 - progress * 180
  ];

  const bottomColor = [
    234 - progress * 200,
    246 - progress * 200,
    255 - progress * 255
  ];

  scene.style.background = `
    linear-gradient(
      rgb(${topColor.join(",")}),
      rgb(${bottomColor.join(",")})
    )
  `;

  /* ☁️ PARALLAX */
  clouds.forEach((cloud, i) => {
    const speed = (i + 1) * 0.15;
    cloud.style.transform = `translateX(${-currentScroll * speed}px)`;
  });

  requestAnimationFrame(animate);
}

container.addEventListener("scroll", () => {
  currentScroll = container.scrollLeft;
});

animate();
