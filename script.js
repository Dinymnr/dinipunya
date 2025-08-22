// Animasi masuk
document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product");
  products.forEach((p, i) => {
    setTimeout(() => {
      p.style.opacity = "1";
      p.style.transform = "translateY(0)";
    }, i * 200);
  });
});
