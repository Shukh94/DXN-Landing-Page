// DOM লোড হওয়ার পর
document.addEventListener('DOMContentLoaded', function() {
    // ফর্ম সাবমিশন হ্যান্ডলার
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // ফর্ম ডেটা সংগ্রহ
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // এখানে সাধারণত AJAX request পাঠানো হয় সার্ভারে
            // কিন্তু ডেমোর জন্য আমরা শুধু একটি success message দেখাবো
            alert('ধন্যবাদ! আপনার сообщение সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
            
            // ফর্ম রিসেট
            contactForm.reset();
        });
    }
    
    // FAQ টগল ফাংশন
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle('active');
            
            const icon = question.querySelector('i');
            if (answer.classList.contains('active')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
    
    // WhatsApp নম্বর আপডেট করার ফাংশন
    function updateWhatsAppNumber() {
        const whatsappNumber = "8801707042018";
        const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
        
        whatsappLinks.forEach(link => {
            if (link.href.includes('wa.me')) {
                const currentText = new URL(link.href).searchParams.get('text') || 'আমি%20DXN%20সম্পর্কে%20জানতে%20চাই';
                link.href = `https://wa.me/${whatsappNumber}?text=${currentText}`;
            }
        });
    }
    
    // পেজ লোড হলে WhatsApp নম্বর আপডেট করুন
    updateWhatsAppNumber();
});