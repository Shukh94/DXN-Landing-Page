// home-products.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("home-products");

  // প্রথম ৩টি প্রোডাক্ট
  products.slice(0, 3).forEach(prod => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-img" style="background-image: url('${prod.img}');"></div>
      <div class="product-info">
        <span class="product-category">${prod.category}</span>
        <h3>${prod.title}</h3>
        <p>${prod.desc}</p>
        <div class="product-price">${prod.price}</div>
        <div class="product-actions">
          <a href="${prod.wa}" class="btn btn-whatsapp" target="_blank">
            <i class="fab fa-whatsapp"></i> অর্ডার
          </a>
          <a href="${prod.details}" class="btn btn-details">বিস্তারিত</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
});
