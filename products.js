document.addEventListener('DOMContentLoaded', function() {
    // =========================
    // ১. প্রোডাক্ট ফিল্টারিং
    // =========================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (filterButtons.length > 0 && productCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // সক্রিয় বাটন আপডেট
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                productCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'flex';
                    } else {
                        const cardCategory = card.getAttribute('data-category');
                        card.style.display = (cardCategory === filterValue) ? 'flex' : 'none';
                    }
                });
            });
        });
    }

    // =========================
    // ২. WhatsApp লিংক আপডেট
    // =========================
    function updateWhatsAppNumber() {
        const whatsappNumber = "8801707042018";
        const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

        whatsappLinks.forEach(link => {
            if (link.href.includes('wa.me')) {
                const url = new URL(link.href);
                const currentText = url.searchParams.get('text') || "Hello, I am interested in your product.";
                link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(currentText)}`;
            }
        });
    }
    updateWhatsAppNumber();

    // =========================
    // ৩. হোম পেইজে প্রথম ৩ প্রোডাক্ট লোড
    // =========================
    const homeProductsContainer = document.getElementById('home-products');
    if (homeProductsContainer) {
        fetch('products.html')
            .then(res => res.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const allProducts = doc.querySelectorAll('.product-card');

                const firstThree = Array.from(allProducts).slice(0, 3);
                firstThree.forEach(prod => homeProductsContainer.appendChild(prod.cloneNode(true)));
            })
            .catch(err => console.error('Products লোড করতে সমস্যা:', err));
    }
});
