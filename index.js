// ---------- INVENTORY (Premium assortment) ----------
const inventory = [
    { id: 1, name: "فستان سهرة أسود ستان", image: "https://placehold.co/600x800/2c2c2c/white?text=RAWAQ+Gown", price: 59.90, cat: "women", desc: "قماش ستان فاخر بقصة أميرة. مناسب للمناسبات الفاخرة." },
    { id: 2, name: "بلوزة صوفية كشميرية - بيج", image: "https://placehold.co/600x800/e0c5a0/2c2c2c?text=Cashmere", price: 42.00, cat: "women", desc: "صوف كشمير ناعم و دافئ، صناعة يدوية." },
    { id: 3, name: "هودي أوفرسايز - كحلي", image: "https://placehold.co/600x800/395b6e/white?text=Oversized+Hoodie", price: 34.50, cat: "men", desc: "قطن عضوي مريح، تصميم عصري." },
    { id: 4, name: "ساعة ذكية Ultra 3", image: "https://placehold.co/600x800/1e2a3a/silver?text=SmartWatch", price: 89.00, cat: "men", desc: "شاشة AMOLED، مقاومة للماء، تتبع رياضي متقدم." },
    { id: 5, name: "طقم أطفال قطني فاخر", image: "https://placehold.co/600x800/e8cfb0/3a2a2a?text=Baby+Set", price: 29.00, cat: "kids", desc: "ناعم 100% قطن، مناسب لبشرة الطفل." },
    { id: 6, name: "حذاء أطفال مضيء - ديناصور", image: "https://placehold.co/600x800/f0bc78/2a2a2a?text=Glow+Shoes", price: 24.90, cat: "kids", desc: "ممتع وآمن، يضيء عند المشي." },
    { id: 7, name: "جاكيت جلد رجالي أنيق", image: "https://placehold.co/600x800/2b2b2b/cccccc?text=Leather+Jacket", price: 129.00, cat: "men", desc: "جلد طبيعي، كلاسيكي بأسلوب عصري." },
    { id: 8, name: "فستان كاجوال صيفي مطبع", image: "https://placehold.co/600x800/f4d8b5/647e6b?text=Summer+Dress", price: 38.00, cat: "women", desc: "خامات باردة، مثالي للصيف الأردني." },
    { id: 9, name: "بدلة رياضية كاجوال", image: "https://placehold.co/600x800/4a627a/f0f0f0?text=Sweatsuit", price: 55.00, cat: "men", desc: "طقم قطني لوك ريحي أنيق." },
    { id: 10, name: "سنيكرز رياضية رجالية", image: "https://placehold.co/600x800/464646/eeeeee?text=Sneakers", price: 48.00, cat: "men", desc: "نعل مريح، تصميم عصري." },
    { id: 11, name: "فستان طفلة تول وردي", image: "https://placehold.co/600x800/f9c9d1/441122?text=Tulle+Dress", price: 32.00, cat: "kids", desc: "مثالي للمناسبات، ناعم وطبقات تول." },
    { id: 12, name: "نظارة شمسية راقية", image: "https://placehold.co/600x800/121212/bbaa88?text=Sunglasses", price: 45.00, cat: "women", desc: "حماية UV400، إطار ذهبي." },
    { id: 13, name: "شنطة يد جلدية", image: "https://placehold.co/600x800/a57c4c/fff6ed?text=Leather+Bag", price: 79.00, cat: "women", desc: "صناعة يدوية، عملية فاخرة." },
    { id: 14, name: "تيشرت أطفال شخصيات", image: "https://placehold.co/600x800/84b3b0/f9f9f9?text=Kids+Tee", price: 15.99, cat: "kids", desc: "قطن ممتاز، مطبوعات آمنة." }
];

let cart = [];

// Helper Functions
function loadProducts(category = 'all') {
    const grid = document.getElementById('main-grid');
    let filtered = [...inventory];
    
    if (category === 'women') filtered = inventory.filter(p => p.cat === 'women');
    else if (category === 'men') filtered = inventory.filter(p => p.cat === 'men');
    else if (category === 'kids') filtered = inventory.filter(p => p.cat === 'kids');
    else if (category === 'sale') filtered = inventory.filter(p => p.price < 40);
    
    document.getElementById('product-details-view').classList.remove('product-page-active');
    document.getElementById('product-details-view').classList.add('product-page-hidden');
    document.getElementById('main-section').style.display = 'block';
    
    renderProductGrid(filtered);
}

function renderProductGrid(productsArray) {
    const grid = document.getElementById('main-grid');
    if(!productsArray.length) {
        grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:60px;">✨ لا توجد منتجات تطابق بحثك ✨</div>';
        return;
    }
    
    grid.innerHTML = productsArray.map(p => `
        <div class="p-card">
            <div class="p-image">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
            </div>
            <div class="p-info-box">
                <h4>${p.name}</h4>
                <div class="p-price">${p.price.toFixed(2)} د.أ</div>
                <button class="add-to-cart-btn" onclick="addToCart(${p.id})">إضافة للسلة 🛍️</button>
                <button class="quick-view" onclick="showProductDetails(${p.id})">معاينة سريعة</button>
            </div>
        </div>
    `).join('');
}

// Search Functionality
document.getElementById('main-search').addEventListener('input', (e) => {
    const term = e.target.value.trim().toLowerCase();
    if(!term) { 
        loadProducts('all'); 
        return; 
    }
    const filtered = inventory.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.desc.toLowerCase().includes(term)
    );
    renderProductGrid(filtered);
});

// Cart Management
function addToCart(id) {
    const product = inventory.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    
    if(existing) {
        existing.qty++;
    } else {
        cart.push({...product, qty: 1});
    }
    updateCartUI();
    openCart();
    showToast("تمت الإضافة إلى السلة");
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
}

function updateCartUI() {
    const cartBody = document.getElementById('cart-items');
    const countSpan = document.getElementById('bag-count');
    const totalSpan = document.getElementById('cart-total');
    const total = cart.reduce((s,i) => s + (i.price * i.qty), 0);
    
    countSpan.innerText = cart.reduce((s,i) => s + i.qty, 0);
    totalSpan.innerText = total.toFixed(2);
    
    if(cart.length === 0) {
        cartBody.innerHTML = '<div style="text-align:center; padding:30px;">سلة التسوق فارغة، أضف ما يعجبك ✨</div>';
        return;
    }
    
    cartBody.innerHTML = cart.map(item => `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 12px;">
            <div>
                <strong>${item.name}</strong><br>
                <small>${item.qty} × ${item.price.toFixed(2)} د.أ</small>
            </div>
            <div>
                <button onclick="removeFromCart(${item.id})" style="background:none; border:none; color:#9e2a2b; cursor:pointer;">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Product Details View
function showProductDetails(id) {
    const product = inventory.find(p => p.id === id);
    const detailsContainer = document.getElementById('product-content');
    document.getElementById('main-section').style.display = 'none';
    const detailsView = document.getElementById('product-details-view');
    detailsView.classList.remove('product-page-hidden');
    detailsView.classList.add('product-page-active');
    
    detailsContainer.innerHTML = `
        <div style="flex:1;">
            <img src="${product.image}" style="width:100%; border-radius:28px;" alt="${product.name}">
        </div>
        <div style="flex:1;">
            <h2>${product.name}</h2>
            <p style="color:#5a6874; margin:20px 0;">${product.desc}</p>
            <div style="font-size:1.8rem; font-weight:800;">${product.price.toFixed(2)} د.أ</div>
            <button class="add-to-cart-btn" style="margin-top:30px; width:auto; padding:12px 40px;" 
                onclick="addToCart(${product.id}); closeDetails();">
                أضف إلى الحقيبة
            </button>
        </div>
    `;
}

function closeDetails() {
    document.getElementById('product-details-view').classList.remove('product-page-active');
    document.getElementById('product-details-view').classList.add('product-page-hidden');
    document.getElementById('main-section').style.display = 'block';
    loadProducts('all');
}

// UI Helpers
function toggleCart() { 
    document.getElementById('cart-drawer').classList.toggle('active'); 
}

function openCart() { 
    document.getElementById('cart-drawer').classList.add('active'); 
}

function openCheckout() { 
    if(cart.length === 0) { 
        alert("سلة المشتريات فارغة"); 
        return; 
    } 
    const total = cart.reduce((s,i) => s + (i.price * i.qty), 0);
    document.getElementById('final-total').innerText = total.toFixed(2);
    document.getElementById('checkout-modal').style.display = 'flex';
}

function closeCheckout() { 
    document.getElementById('checkout-modal').style.display = 'none';
}

function toggleMobileMenu() { 
    document.getElementById('mobileMenu').classList.toggle('active'); 
}

function closeMobileMenu() { 
    document.getElementById('mobileMenu').classList.remove('active'); 
}

function showToast(msg) { 
    let toast = document.createElement('div'); 
    toast.innerText = msg; 
    toast.style.position = 'fixed'; 
    toast.style.bottom = '20px'; 
    toast.style.left = '20px'; 
    toast.style.backgroundColor = '#1e2a3a'; 
    toast.style.color = 'white'; 
    toast.style.padding = '12px 24px'; 
    toast.style.borderRadius = '40px'; 
    toast.style.zIndex = '9999'; 
    toast.style.fontFamily = 'Cairo';
    document.body.appendChild(toast); 
    setTimeout(() => toast.remove(), 2000); 
}

// WhatsApp Order
function sendToWhatsApp() {
    const name = document.getElementById('cust-name').value.trim();
    const phone = document.getElementById('cust-phone').value.trim();
    const city = document.getElementById('cust-city').value;
    const addr = document.getElementById('cust-address').value.trim();
    
    if(!name || !phone || !city || !addr) { 
        alert("يرجى ملء جميع بيانات الشحن"); 
        return; 
    }
    
    let orderMsg = `🛍️ *طلب جديد من RAWAQ* 🛍️\n\n`;
    orderMsg += `👤 الاسم: ${name}\n`;
    orderMsg += `📞 الهاتف: ${phone}\n`;
    orderMsg += `📍 المحافظة: ${city}\n`;
    orderMsg += `🏠 العنوان: ${addr}\n\n`;
    orderMsg += `📦 *المنتجات:*\n`;
    
    cart.forEach(item => { 
        orderMsg += `▫️ ${item.name} (الكمية: ${item.qty}) - ${(item.price * item.qty).toFixed(2)} د.أ\n`; 
    });
    
    const total = cart.reduce((s,i) => s + (i.price * i.qty), 0);
    orderMsg += `\n💰 *المجموع الكلي: ${total.toFixed(2)} د.أ*\n\n`;
    orderMsg += `شكراً لتسوقكم من راواق ✨`;
    
    const adminNumber = "962786610095";
    window.open(`https://wa.me/${adminNumber}?text=${encodeURIComponent(orderMsg)}`, '_blank');
    
    cart = []; 
    updateCartUI(); 
    closeCheckout(); 
    toggleCart(); 
    alert("تم إرسال الطلب، سنتصل بك قريباً لتأكيد الشحن.");
}

// Initialize
window.onload = () => { 
    loadProducts('all'); 
    updateCartUI(); 
};

// Make functions global for HTML onclick
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.toggleCart = toggleCart;
window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.sendToWhatsApp = sendToWhatsApp;
window.toggleMobileMenu = toggleMobileMenu;
window.closeDetails = closeDetails;
window.showProductDetails = showProductDetails;
window.loadProducts = loadProducts;
window.closeMobileMenu = closeMobileMenu;