// Smooth Scroll
document.querySelectorAll("nav a, .btn").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      window.scrollTo({ top: targetElement.offsetTop - 70, behavior: "smooth" });
    }
  });
});

// WhatsApp Number Update
function updateWhatsAppNumber() {
  const whatsappNumber = "8801707042018";
  const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
  whatsappLinks.forEach((link) => {
    link.href = `https://wa.me/${whatsappNumber}?text=আমি%20DXN%20সম্পর্কে%20জানতে%20চাই`;
  });
}
document.addEventListener("DOMContentLoaded", updateWhatsAppNumber);

// Load First 3 Products from products.html
fetch("products.html")
  .then((res) => res.text())
  .then((data) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    const allProducts = doc.querySelectorAll(".product-card");
    const firstThree = Array.from(allProducts).slice(0, 3);
    const container = document.getElementById("home-products");
    firstThree.forEach((prod) => container.appendChild(prod.cloneNode(true)));
  })
  .catch((err) => console.error("Products load error:", err));
