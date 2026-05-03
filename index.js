const inventory = [
    { id: 1, name: "فستان سهرة أسود ستان", image: "5.png", price: 35.00, cat: "women", desc: "أناقة لا مثيل لها للمناسبات الخاصة." },
    { id: 2, name: "بلوزة صوفية ناعمة - بيج", image: "12.png", price: 18.50, cat: "women", desc: "دافئة ومريحة لفصل الشتاء." },
    { id: 7, name: "هودي أوفرسايز - كحلي", image: "4.png", price: 24.00, cat: "men", desc: "إطلالة كاجوال مريحة جداً." },
    { id: 8, name: "ساعة ذكية Ultra Pro", image: "2.png", price: 55.00, cat: "men", desc: "شاشة AMOLED وتتبع للنشاط البدني." },
    { id: 13, name: "طقم أطفال شتوي مبطن", image: "16.png", price: 17.00, cat: "kids", desc: "يوفر الدفء التام لطفلك." },
    { id: 14, name: "حذاء أطفال مضيء", image: "20.png", price: 15.00, cat: "kids", desc: "تصميم مرح يحبه الأطفال." },
    // أضف باقي المنتجات هنا بنفس التنسيق
];

let cart = [];

// تحميل المنتجات
function loadProducts(category = 'all') {
    const grid = document.getElementById('main-grid');
    const filtered = category === 'all' ? inventory : inventory.filter(p => p.cat === category);
    
    grid.innerHTML = filtered.map(p => `
        <div class="p-card">
            <div class="p-image">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <div class="p-info-box">
                <h4>${p.name}</h4>
                <div class="p-price">${p.price.toFixed(2)} د.أ</div>
                <button class="add-to-cart-btn" onclick="addToCart(${p.id})">إضافة للسلة</button>
            </div>
        </div>
    `).join('');
}

// البحث
document.getElementById('main-search').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = inventory.filter(p => p.name.toLowerCase().includes(term));
    const grid = document.getElementById('main-grid');
    
    if(filtered.length > 0) {
        grid.innerHTML = filtered.map(p => `
            <div class="p-card">
                <div class="p-image"><img src="${p.image}"></div>
                <div class="p-info-box">
                    <h4>${p.name}</h4>
                    <div class="p-price">${p.price.toFixed(2)} د.أ</div>
                    <button class="add-to-cart-btn" onclick="addToCart(${p.id})">إضافة للسلة</button>
                </div>
            </div>
        `).join('');
    } else {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center;">لا توجد نتائج مطابقة.</p>';
    }
});

// إدارة السلة
function addToCart(id) {
    const product = inventory.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    
    if(existing) {
        existing.qty++;
    } else {
        cart.push({...product, qty: 1});
    }
    updateUI();
    openCart();
}

function updateUI() {
    const cartBody = document.getElementById('cart-items');
    const count = document.getElementById('bag-count');
    const totalDisp = document.getElementById('cart-total');
    
    count.innerText = cart.reduce((s, i) => s + i.qty, 0);
    
    cartBody.innerHTML = cart.map(item => `
        <div style="display:flex; justify-content:space-between; margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
            <div>
                <h5 style="margin:0; font-size:14px;">${item.name}</h5>
                <small>${item.qty} × ${item.price.toFixed(2)} د.أ</small>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background:none; border:none; color:red; cursor:pointer;"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');
    
    const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    totalDisp.innerText = total.toFixed(2);
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateUI();
}

function toggleCart() { document.getElementById('cart-drawer').classList.toggle('active'); }
function openCart() { document.getElementById('cart-drawer').classList.add('active'); }

function openCheckout() {
    if(cart.length === 0) return alert("السلة فارغة!");
    const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    document.getElementById('final-total').innerText = total.toFixed(2);
    document.getElementById('checkout-modal').style.display = 'flex';
}

function closeCheckout() { document.getElementById('checkout-modal').style.display = 'none'; }

function toggleMobileMenu() { document.getElementById('mobileMenu').classList.toggle('active'); }

// إرسال للواتساب
function sendToWhatsApp() {
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const city = document.getElementById('cust-city').value;
    const addr = document.getElementById('cust-address').value;

    if(!name || !phone || !city || !addr) return alert("يرجى إكمال البيانات");

    let msg = `طلب جديد من: ${name}\nالهاتف: ${phone}\nالمدينة: ${city}\nالعنوان: ${addr}\n\nالمنتجات:\n`;
    cart.forEach(i => msg += `- ${i.name} (الكمية: ${i.qty})\n`);
    msg += `\nالإجمالي: ${cart.reduce((s, i) => s + (i.price * i.qty), 0).toFixed(2)} د.أ`;

    const myNum = "962786610095"; 
    window.open(`https://wa.me/${myNum}?text=${encodeURIComponent(msg)}`, '_blank');
    
    cart = [];
    updateUI();
    closeCheckout();
}

window.onload = () => loadProducts('all');
