// প্রোডাক্ট ফিল্টারিং সিস্টেম
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (filterButtons.length > 0 && productCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // সক্রিয় বাটন আপডেট করুন
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // ফিল্টার মান পান
                const filterValue = button.getAttribute('data-filter');

                // প্রোডাক্ট কার্ড ফিল্টার করুন
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

    // WhatsApp নম্বর আপডেট করার ফাংশন
    function updateWhatsAppNumber() {
        const whatsappNumber = "8801707042018"; // আপনার WhatsApp নম্বর
        const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

        whatsappLinks.forEach(link => {
            if (link.href.includes('wa.me')) {
                // কুয়েরি স্ট্রিং থেকে text প্যারামিটার বের করুন (না থাকলে ডিফল্ট দিন)
                const url = new URL(link.href);
                const currentText = url.searchParams.get('text') || "Hello, I am interested in your product.";
                link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(currentText)}`;
            }
        });
    }

    // পেজ লোড হলে WhatsApp নম্বর আপডেট করুন
    updateWhatsAppNumber();
});
