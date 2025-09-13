document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scroll
  document.querySelectorAll("nav a, .btn").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  // WhatsApp নম্বর আপডেট
  const whatsappNumber = "8801707042018";
  document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
    const url = new URL(link.href);
    const text = url.searchParams.get("text") || "আমি DXN সম্পর্কে জানতে চাই";
    link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  });

  // products.html থেকে প্রথম ৩টি প্রোডাক্ট লোড করা
  fetch("products.html")
    .then((res) => res.text())
    .then((data) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");
      const allProducts = doc.querySelectorAll(".product-card");
      const firstThree = Array.from(allProducts).slice(0, 3);

      const container = document.getElementById("home-products");
      firstThree.forEach((prod) => container.appendChild(prod.cloneNode(true)));

      // see-more নিশ্চিতভাবে container পরে DOM এ আছে
      const seeMore = document.querySelector(".see-more");
      if (seeMore && !seeMore.parentNode.contains(seeMore)) {
        container.parentNode.appendChild(seeMore);
      }
    });
});
