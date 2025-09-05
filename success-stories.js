// DOM লোড হওয়ার পর
document.addEventListener('DOMContentLoaded', function() {
    // ভিডিও কার্ড ক্লিক ইভেন্ট
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            alert('ভিডিওটি শীঘ্রই যোগ করা হবে। আপনার ধৈর্যের জন্য ধন্যবাদ!');
        });
    });
    
    // WhatsApp নম্বর আপডেট করার ফাংশন
    function updateWhatsAppNumber() {
        const whatsappNumber = "8801707042018";
        const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
        
        whatsappLinks.forEach(link => {
            if (link.href.includes('wa.me')) {
                const currentText = new URL(link.href).searchParams.get('text') || 'আমি%20DXN%20সাফল্যের%20গল্প%20সম্পর্কে%20জানতে%20চাই';
                link.href = `https://wa.me/${whatsappNumber}?text=${currentText}`;
            }
        });
    }
    
    // পেজ লোড হলে WhatsApp নম্বর আপডেট করুন
    updateWhatsAppNumber();
});