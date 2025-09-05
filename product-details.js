// প্রোডাক্ট ডেটা
const products = {
    "ganoderma-capsule": {
        name: "গ্যানোডার্মা ক্যাপসুল",
        category: "হেলথ প্রোডাক্ট",
        price: "৳ ১,২০০",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "গ্যানোডার্মা ক্যাপসুল DXN-এর একটি প্রিমিয়াম হেলথ সাপ্লিমেন্ট যা ইমিউনিটি সিস্টেম শক্তিশালী করে এবং শরীরের এনার্জি লেভেল বাড়ায়। এটি প্রাকৃতিক গ্যানোডার্মা মাশরুম থেকে তৈরি, যা এর অ্যান্টিঅক্সিডেন্ট বৈশিষ্ট্যের জন্য পরিচিত।",
        features: [
            "ইমিউন সিস্টেম শক্তিশালী করে",
            "শরীরের এনার্জি লেভেল বাড়ায়",
            "অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ",
            "প্রাকৃতিক উপাদানে তৈরি",
            "কোনো কৃত্রিম রাসায়নিক নেই"
        ],
        usage: "প্রতিদিন ১-২ ক্যাপসুল খাবারের পর পানি দিয়ে সেবন করুন। চিকিৎসকের পরামর্শ অনুযায়ী ডোজ调整 করুন।",
        related: ["ganoderma-coffee", "cordyceps-capsule", "spirulina-tablets"]
    },
    "ganoderma-coffee": {
        name: "গ্যানোডার্মা ইনস্ট্যান্ট কফি",
        category: "বেভারেজ",
        price: "৳ ৮৫০",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "গ্যানোডার্মা ইনস্ট্যান্ট কফি হল একটি অনন্য মিশ্রণ যা উচ্চমানের কফি বীজ এবং প্রাকৃতিক গ্যানোডার্মা এক্সট্র্যাক্ট সমন্বয়ে তৈরি। এটি একটি সুস্বাদু এবং স্বাস্থ্যকর বিকল্প যা আপনার দিন শুরু করতে সাহায্য করে।",
        features: [
            "প্রাকৃতিক গ্যানোডার্মা এক্সট্র্যাক্ট সমৃদ্ধ",
            "সুস্বাদু এবং আরামদায়ক",
            "শরীরের এনার্জি বাড়ায়",
            "ক্লান্তি দূর করে",
            "স্ট্রেস কমাতে সাহায্য করে"
        ],
        usage: "১ চা চামচ গ্যানোডার্মা কফি ১৫০ মিলি গরম পানিতে মিশিয়ে নিন। চিনি বা দুধ according to your preference যোগ করুন।",
        related: ["ganoderma-capsule", "ganoderma-tea", "ganoderma-toothpaste"]
    },
    "ganoderma-cleanser": {
        name: "গ্যানোডার্মা ফেসিয়াল ক্লিনজার",
        category: "স্কিন কেয়ার",
        price: "৳ ১,৫০০",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "গ্যানোডার্মা ফেসিয়াল ক্লিনজার প্রাকৃতিক উপাদানে তৈরি একটি মৃদু ক্লিনজার যা ত্বককে গভীরভাবে পরিষ্কার করে এবং উজ্জ্বলতা বাড়ায়। এটি ত্বকের ময়লা, তেল এবং অশুধ্যতা দূর করে ত্বককে সতেজ ও স্বাস্থ্যকর রাখে।",
        features: [
            "ত্বক গভীরভাবে পরিষ্কার করে",
            "প্রাকৃতিক উপাদানে তৈরি",
            "ত্বকের উজ্জ্বলতা বাড়ায়",
            "ময়লা এবং তেল দূর করে",
            "সব ধরণের ত্বকের জন্য উপযুক্ত"
        ],
        usage: "ভেজা ত্বকে适量 পরিমাণ ক্লিনজার apply করুন এবং gently massage করুন।其后 পরিষ্কার পানি দিয়ে ধুয়ে ফেলুন। দিনে দুইবার ব্যবহার করুন।",
        related: ["ganoderma-moisturizer", "ganoderma-toothpaste", "ganoderma-capsule"]
    },
    "ganoderma-toothpaste": {
        name: "গ্যানোডার্মা টুথপেস্ট",
        category: "পারসোনাল কেয়ার",
        price: "৳ ৩২০",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "গ্যানোডার্মা টুথপেস্ট প্রাকৃতিক অ্যান্টিব্যাকটেরিয়াল উপাদানে তৈরি যা দাঁত ও মাড়ির স্বাস্থ্য রক্ষা করে। এটি দাঁতের হলুদভাব দূর করে সাদা করে এবং মুখের দুর্গন্ধ দূর করে।",
        features: [
            "প্রাকৃতিক অ্যান্টিব্যাকটেরিয়াল",
            "দাঁত সাদা করে",
            "মাড়ির রোগ প্রতিরোধ করে",
            "মুখের দুর্গন্ধ দূর করে",
            "ফ্লোরাইড মুক্ত"
        ],
        usage: "টুথব্রাশ上适量 টুথপেস্ট নিয়ে দাঁত ব্রাশ করুন। দিনে最少 দুইবার ব্যবহার করুন।",
        related: ["ganoderma-cleanser", "ganoderma-coffee", "spirulina-tablets"]
    },
    "spirulina-tablets": {
        name: "স্পিরুলিনা ট্যাবলেট",
        category: "সাপ্লিমেন্ট",
        price: "৳ ৯০০",
        image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "স্পিরুলিনা ট্যাবলেট পুষ্টিগুণে ভরপুর একটি সুপারফুড যা শরীরের প্রোটিনের চাহিদা পূরণ করে। এটি ভিটামিন, মিনারেল এবং অ্যান্টিঅক্সিডেন্টের excellent উৎস।",
        features: [
            "উচ্চ প্রোটিন সমৃদ্ধ",
            "ভিটামিন এবং মিনারেলের excellent উৎস",
            "শরীরের detoxification এ সাহায্য করে",
            "ওজন management এ সহায়ক",
            "শক্তির levels বাড়ায়"
        ],
        usage: "প্রতিদিন ২-৪ ট্যাবলেট খাবারের পর পানি দিয়ে সেবন করুন। চিকিৎসকের পরামর্শ অনুযায়ী ডোজ调整 করুন।",
        related: ["ganoderma-capsule", "cordyceps-capsule", "ganoderma-tea"]
    },
    "ganoderma-tea": {
        name: "গ্যানোডার্মা চা",
        category: "বেভারেজ",
        price: "৳ ৭৫০",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "গ্যানোডার্মা চা একটি সুগন্ধী ভেষজ চা যা স্ট্রেস কমায়, হজমশক্তি বাড়ায় এবং শরীর থেকে টক্সিন দূর করে। এটি প্রাকৃতিক গ্যানোডার্মা এক্সট্র্যাক্ট থেকে তৈরি যা শরীরের ইমিউন সিস্টেম strengthen করে।",
        features: [
            "স্ট্রেস কমায়",
            "হজমশক্তি বাড়ায়",
            "শরীর থেকে টক্সিন দূর করে",
            "ইমিউন সিস্টেম শক্তিশালী করে",
            "প্রাকৃতিক ভেষজ উপাদানে তৈরি"
        ],
        usage: "১ চা ব্যাগ গরম পানিতে ৩-৫ মিনিট ডুবিয়ে রাখুন। according to your preference চিনি বা মধু যোগ করুন। দিনে ১-২ বার পান করুন।",
        related: ["ganoderma-coffee", "spirulina-tablets", "ganoderma-capsule"]
    },
    "cordyceps-capsule": {
        name: "কর্ডিসেপস ক্যাপসুল",
        category: "হেলথ প্রোডাক্ট",
        price: "৳ ১,৮০০",
        image: "https://images.unsplash.com/photo-1585435557343-3b092031d5b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "কর্ডিসেপস ক্যাপসুল একটি traditional চinese herb থেকে তৈরি যা শরীরের স্ট্যামিনা এবং শক্তি বৃদ্ধি করে, ক্লান্তি দূর করে। এটি athletic performance improve করতে এবং respiratory health উন্নত করতে সাহায্য করে।",
        features: [
            "শরীরের স্ট্যামিনা এবং শক্তি বৃদ্ধি করে",
            "ক্লান্তি দূর করে",
            "Athletic performance improve করে",
            "Respiratory health উন্নত করে",
            "প্রাকৃতিক herbal উপাদানে তৈরি"
        ],
        usage: "প্রতিদিন ১-২ ক্যাপসুল খাবারের পর পানি দিয়ে সেবন করুন। চিকিৎসকের পরামর্শ অনুযায়ী ডোজ调整 করুন।",
        related: ["ganoderma-capsule", "spirulina-tablets", "ganoderma-tea"]
    },
    "ganoderma-moisturizer": {
        name: "গ্যানোডার্মা ময়েশ্চারাইজার",
        category: "স্কিন কেয়ার",
        price: "৳ ১,২০০",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "গ্যানোডার্মা ময়েশ্চারাইজার ত্বককে কোমল ও hydrated রাখে, প্রাকৃতিক উপাদানে তৈরি। এটি ত্বকের dryness দূর করে এবং ত্বককে soft ও supple রাখে।",
        features: [
            "ত্বক কোমল ও hydrated রাখে",
            "ত্বকের dryness দূর করে",
            "প্রাকৃতিক উপাদানে তৈরি",
            "ত্বক soft ও supple রাখে",
            "সব ধরণের ত্বকের জন্য উপযুক্ত"
        ],
        usage: "পরিষ্কার ত্বকে适量 পরিমাণ ময়েশ্চারাইজার apply করুন এবং gently massage করুন直到 শুষে যায়। দিনে最少 একবার ব্যবহার করুন।",
        related: ["ganoderma-cleanser", "ganoderma-capsule", "ganoderma-toothpaste"]
    }
};

// DOM লোড হওয়ার পর
document.addEventListener('DOMContentLoaded', function() {
    // URL থেকে প্রোডাক্ট ID পড়ুন
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId && products[productId]) {
        // প্রোডাক্ট ডিটেইল লোড করুন
        loadProductDetail(productId);
        
        // সম্পর্কিত প্রোডাক্টস লোড করুন
        loadRelatedProducts(productId);
    } else {
        // যদি প্রোডাক্ট ID না থাকে বা invalid হয়
        window.location.href = 'products.html';
    }
    
    // WhatsApp নম্বর আপডেট করার ফাংশন
    function updateWhatsAppNumber() {
        const whatsappNumber = "8801707042018";
        const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
        
        whatsappLinks.forEach(link => {
            if (link.href.includes('wa.me')) {
                const currentText = new URL(link.href).searchParams.get('text') || 'আমি%20DXN%20প্রোডাক্ট%20সম্পর্কে%20জানতে%20চাই';
                link.href = `https://wa.me/${whatsappNumber}?text=${currentText}`;
            }
        });
    }
    
    // পেজ লোড হলে WhatsApp নম্বর আপডেট করুন
    updateWhatsAppNumber();
});

// প্রোডাক্ট ডিটেইল লোড করার ফাংশন
function loadProductDetail(productId) {
    const product = products[productId];
    
    // ডেটা পপুলেট করুন
    document.getElementById('detail-img').src = product.image;
    document.getElementById('detail-title').textContent = product.name;
    document.getElementById('detail-category').textContent = product.category;
    document.getElementById('detail-price').textContent = product.price;
    document.getElementById('detail-description').textContent = product.description;
    document.getElementById('usage-text').textContent = product.usage;
    
    // বৈশিষ্ট্য পপুলেট করুন
    const featuresList = document.getElementById('detail-features');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // WhatsApp লিংক আপডেট করুন
    const detailWhatsapp = document.getElementById('detail-whatsapp');
    detailWhatsapp.href = `https://wa.me/8801707042018?text=আমি%20${encodeURIComponent(product.name)}%20সম্পর্কে%20জানতে%20চাই`;
}

// সম্পর্কিত প্রোডাক্টস লোড করার ফাংশন
function loadRelatedProducts(productId) {
    const product = products[productId];
    const relatedContainer = document.getElementById('related-products');
    
    if (!product.related || product.related.length === 0) {
        relatedContainer.innerHTML = '<p>কোন সম্পর্কিত প্রোডাক্ট পাওয়া যায়নি</p>';
        return;
    }
    
    relatedContainer.innerHTML = '';
    
    // শুধুমাত্র প্রথম 3টি সম্পর্কিত প্রোডাক্ট দেখান
    const relatedToShow = product.related.slice(0, 3);
    
    relatedToShow.forEach(relatedId => {
        if (products[relatedId]) {
            const relatedProduct = products[relatedId];
            const productCard = document.createElement('div');
            productCard.className = 'related-product-card';
            productCard.innerHTML = `
                <div class="related-product-img" style="background-image: url('${relatedProduct.image}')"></div>
                <div class="related-product-info">
                    <span class="related-product-category">${relatedProduct.category}</span>
                    <h3>${relatedProduct.name}</h3>
                    <p>${relatedProduct.description.substring(0, 80)}...</p>
                    <div class="related-product-price">${relatedProduct.price}</div>
                    <div class="related-product-actions">
                        <a href="https://wa.me/8801707042018?text=আমি%20${encodeURIComponent(relatedProduct.name)}%20সম্পর্কে%20জানতে%20চাই" class="btn btn-whatsapp" target="_blank">
                            <i class="fab fa-whatsapp"></i> অর্ডার
                        </a>
                        <a href="product-details.html?id=${relatedId}" class="btn btn-details">বিস্তারিত</a>
                    </div>
                </div>
            `;
            relatedContainer.appendChild(productCard);
        }
    });
}