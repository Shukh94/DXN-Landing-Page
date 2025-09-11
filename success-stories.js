// DOM লোড হওয়ার পর
document.addEventListener('DOMContentLoaded', function() {

    // ভিডিও কার্ডে ক্লিক ইভেন্ট (মডাল ভিডিও প্লে)
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoId = card.getAttribute('data-video-id'); // ভিডিও ID নিচ্ছে
            if(videoId){
                openModal(videoId);
            } else {
                alert('ভিডিওটি শীঘ্রই যোগ করা হবে। আপনার ধৈর্যের জন্য ধন্যবাদ!');
            }
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

// ভিডিও মডাল ফাংশন
function openModal(videoId) {
    document.getElementById("videoModal").style.display = "block";
    document.getElementById("videoFrame").src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

function closeModal() {
    document.getElementById("videoModal").style.display = "none";
    document.getElementById("videoFrame").src = "";
}
