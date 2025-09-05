 // নেভিগেশন স্মুথ স্ক্রোল
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

      // WhatsApp নম্বর আপডেট করার ফাংশন
      function updateWhatsAppNumber() {
        // এখানে আপনি ডায়নামিকভাবে WhatsApp নম্বর সেট করতে পারেন
        const whatsappNumber = "8801707042018"; // আপনার WhatsApp নম্বর দিন
        const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

        whatsappLinks.forEach((link) => {
          link.href = `https://wa.me/${whatsappNumber}?text=আমি%20DXN%20সম্পর্কে%20জানতে%20চাই`;
        });
      }

      // পেজ লোড হলে WhatsApp নম্বর আপডেট করুন
      document.addEventListener("DOMContentLoaded", updateWhatsAppNumber);