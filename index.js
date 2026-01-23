// مصفوفة المنتجات الضخمة (Inventory) لمتجر رواق
const inventory = [
    // --- قسم النساء (Women) ---
    { id: 2, name: "بلوزة صوفية ناعمة - بيج",image: "images/12.png", price: 18.50, cat: "women", sizes: ['M', 'L', 'XL'], rating: 4.7, reviews: 95, desc: "دافئة ومريحة لفصل الشتاء." },
    { id: 3, name: "حقيبة يد كلاسيكية - جلد",image: "images/10.png", price: 22.00, cat: "women", sizes: ['One Size'], rating: 4.5, reviews: 150, desc: "تضيف لمسة فخامة لإطلالتك اليومية." },
    { id: 4, name: "طقم رياضي نسائي 2 قطعة",image: "images/1.png", price: 27.00, cat: "women", sizes: ['S', 'M', 'L'], rating: 4.8, reviews: 67, desc: "مرونة عالية ومناسب للياقة البدنية." },
    { id: 5, name: "عطر ميس رواق - 100 مل",image: "images/7.png", price: 40.00, cat: "women", sizes: ['100ml'], rating: 5.0, reviews: 300, desc: "رائحة زهرية تدوم طويلاً." },
    { id: 6, name: "نظارة شمسية عين القطة",image: "images/8.png", price: 12.00, cat: "women", sizes: ['One Size'], rating: 4.2, reviews: 45, desc: "تصميم عصري يحمي من الأشعة فوق البنفسجية." },
    { id: 1, name: "فستان سهرة أسود ستان",image: "images/5.png ", price: 35.00, cat: "women", sizes: ['S', 'M', 'L'], rating: 4.9, reviews: 210, desc: "أناقة لا مثيل لها للمناسبات الخاصة." },

    // --- قسم الرجال (Men) ---
    { id: 7, name: "هودي أوفرسايز - كحلي",image: "images/4.png", price: 24.00, cat: "men", sizes: ['L', 'XL', 'XXL'], rating: 4.6, reviews: 112, desc: "إطلالة كاجوال مريحة جداً." },
    { id: 8, name: "ساعة ذكية Ultra Pro",image: "images/2.png", price: 55.00, cat: "men", sizes: ['One Size'], rating: 4.9, reviews: 204, desc: "شاشة AMOLED وتتبع للنشاط البدني." },
    { id: 9, name: "قميص كتان صيفي - أبيض",image: "images/13.png", price: 19.00, cat: "men", sizes: ['M', 'L', 'XL'], rating: 4.4, reviews: 78, desc: "خامة طبيعية باردة على الجسم." },
    { id: 10, name: "بنطال جينز سليم فيت",image: "images/11.png", price: 21.00, cat: "men", sizes: ['30', '32', '34', '36'], rating: 4.3, reviews: 130, desc: "جينز متين وعملي للاستخدام اليومي." },
    { id: 11, name: "حذاء رياضي Air Run",image: "images/15.png", price: 38.00, cat: "men", sizes: ['41', '42', '43', '44'], rating: 4.7, reviews: 88, desc: "خفيف الوزن ومناسب للجري." },
    { id: 12, name: "محفظة جلد طبيعي",image: "images/14.png", price: 14.50, cat: "men", sizes: ['One Size'], rating: 4.8, reviews: 55, desc: "تصميم نحيف يتسع لجميع بطاقاتك." },

    // --- قسم الأطفال (Kids) ---
    { id: 13, name: "طقم أطفال شتوي مبطن",image: "images/16.png", price: 17.00, cat: "kids", sizes: ['2Y', '4Y', '6Y'], rating: 4.7, reviews: 40, desc: "يوفر الدفء التام لطفلك." },
    { id: 14, name: "حذاء أطفال مضيء",image: "images/20.png", price: 15.00, cat: "kids", sizes: ['25', '26', '27', '28'], rating: 4.9, reviews: 120, desc: "تصميم مرح يحبه الأطفال." },
    { id: 15, name: "فستان أطفال منقط", image: "images/30.png",price: 13.00, cat: "kids", sizes: ['3Y', '5Y', '7Y'], rating: 4.5, reviews: 33, desc: "لطيف جداً للمناسبات العائلية." },
    { id: 16, name: "بيجاما قطنية 100%",image: "images/23.png", price: 10.00, cat: "kids", sizes: ['6M', '12M', '18M'], rating: 4.8, reviews: 92, desc: "قطن ناعم لا يسبب الحساسية." }
];

function loadProducts(filter = 'all') {
    const grid = document.getElementById('main-grid');
    const list = filter === 'all' ? inventory : inventory.filter(i => i.cat === filter);
    
    grid.innerHTML = list.map(p => `
        <div class="p-card">
            <div class="p-image" onclick="openProductDetail(${p.id})">
                <img src="${p.image}" alt="${p.name}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div class="p-info-box">
                <h4 onclick="openProductDetail(${p.id})">${p.name}</h4>
                <div class="p-price">${p.price.toFixed(2)} د.أ</div>
                <button class="add-to-cart-btn" onclick="addToCart(${p.id})">
                    <i class="fas fa-plus"></i> إضافة للسلة
                </button>
            </div>
        </div>
    `).join('');
}

 

// فتح تفاصيل المنتج
function openProductDetail(id) {
    const p = inventory.find(x => x.id === id);
    const content = document.getElementById('product-content');
    
    content.innerHTML = `
        <div class="detail-img"></div>
        <div class="detail-info">
            <h1>${p.name}</h1>
            <div class="stars"><i class="fas fa-star" style="color:#f39c12"></i> ${p.rating} (${p.reviews} مراجعة)</div>
            <p class="price-big">${p.price.toFixed(2)} د.أ</p>
            <hr>
            <h4>اختر المقاس:</h4>
            <div class="size-selector">
                ${p.sizes.map(s => `<button class="size-btn" onclick="selectSize(this)">${s}</button>`).join('')}
            </div>
            <h4>الوصف:</h4>
            <p>${p.desc}</p>
            <button class="add-btn" onclick="addToCart(${p.id})">إضافة للحقيبة</button>
            <p style="margin-top:20px;"><i class="fas fa-shield-alt"></i> ضمان استرجاع خلال 14 يوم</p>
        </div>
    `;
    document.getElementById('product-details-view').style.display = 'block';
}

function closeDetails() {
    document.getElementById('product-details-view').style.display = 'none';
}

function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

function toggleCart() {
    document.getElementById('cart-drawer').classList.toggle('active');
}

function addToCart(id) {
    const p = inventory.find(x => x.id === id);
    cart.push(p);
    updateCart();
    alert("تمت الإضافة لحقيبة التسوق!");
}

function updateCart() {
    document.getElementById('bag-count').innerText = cart.length;
    let total = 0;
    document.getElementById('cart-items').innerHTML = cart.map(item => {
        total += item.price;
        return `<div class="cart-item-row">${item.name} - ${item.price} د.أ</div>`;
    }).join('');
    document.getElementById('cart-total').innerText = total.toFixed(2);
}
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}



// إغلاق المنيو عند اختيار قسم
document.querySelectorAll('.mega-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.remove('active');
    });
});


// مصفوفة السلة (تبدأ فارغة)
let cart = [];

// دالة الإضافة للسلة
function addToCart(id) {
    const product = inventory.find(item => item.id === id);
    
    // التحقق إذا كان المنتج موجوداً مسبقاً لزيادة الكمية فقط
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    openCart(); // فتح السلة تلقائياً عند الإضافة
}

// دالة تحديث واجهة السلة
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('bag-count');
    const cartTotal = document.getElementById('cart-total');
    
    // تحديث رقم العداد في الهيدر
    cartCount.innerText = cart.reduce((total, item) => total + item.quantity, 0);
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align:center; padding:20px; color:#999;">العربة فارغة حالياً</p>';
        cartTotal.innerText = '0.00';
        return;
    }

    // بناء قائمة المنتجات داخل السلة
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${item.price.toFixed(2)} د.أ × ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <button onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');

    // حساب المجموع النهائي
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.innerText = total.toFixed(2);
}

// دالة حذف منتج من السلة
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// دوال فتح وإغلاق السلة
function openCart() {
    document.getElementById('cart-drawer').classList.add('active');
}

function toggleCart() {
    document.getElementById('cart-drawer').classList.toggle('active');
}

// فتح نافذة إتمام الطلب
function openCheckout() {
    if (cart.length === 0) {
        alert("العربة فارغة! أضف بعض المنتجات أولاً.");
        return;
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('final-total').innerText = total.toFixed(2);
    document.getElementById('checkout-modal').style.display = 'flex';
}

function closeCheckout() {
    document.getElementById('checkout-modal').style.display = 'none';
}

// الوظيفة الرئيسية لإرسال البيانات لواتساب
function sendToWhatsApp() {
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const city = document.getElementById('cust-city').value;
    const address = document.getElementById('cust-address').value;

    if (!name || !phone || !city || !address) {
        alert("يرجى تعبئة جميع البيانات لإتمام الطلب");
        return;
    }

    // 1. تجهيز قائمة المنتجات
    let productList = "طلب جديد من متجر رواق:\n\n";
    cart.forEach((item, index) => {
        productList += `${index + 1}. ${item.name} (الكمية: ${item.quantity}) - ${item.price} د.أ\n`;
    });

    // 2. حساب المجموع النهائي
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // 3. تنسيق الرسالة الكاملة
    const message = `${productList}\n` +
                    `--------------------------\n` +
                    `💰 الإجمالي: ${total.toFixed(2)} دينار أردني\n\n` +
                    `👤 بيانات العميل:\n` +
                    `- الاسم: ${name}\n` +
                    `- الهاتف: ${phone}\n` +
                    `- المدينة: ${city}\n` +
                    `- العنوان: ${address}\n\n` +
                    `نوع الدفع: عند الاستلام 🚚`;

    // 4. رقم الواتساب الخاص بك (ضع رقمك هنا بالصيغة الدولية)
    const myNumber = "9627XXXXXXXX"; // استبدل X برقمك
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${myNumber}?text=${encodedMessage}`;

    // 5. فتح الواتساب وتفريغ السلة
    window.open(whatsappURL, '_blank');
    cart = [];
    updateCartUI();
    closeCheckout();
    alert("شكراً لطلبك! تم توجيهك الآن للواتساب لتأكيد الطلب.");
}


// دالة لفتح نافذة البيانات
function openCheckout() {
    if (cart.length === 0) {
        alert("العربة فارغة!");
        return;
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('final-total').innerText = total.toFixed(2);
    document.getElementById('checkout-modal').style.display = 'flex';
}

// دالة لإغلاق النافذة
function closeCheckout() {
    document.getElementById('checkout-modal').style.display = 'none';
}

// دالة إرسال الرسالة لواتساب (نفس الكود السابق)
function sendToWhatsApp() {
    // ... كود تجميع الرسالة وفتح الرابط (wa.me) ...
}

function sendToWhatsApp() {
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const city = document.getElementById('cust-city').value;
    const address = document.getElementById('cust-address').value;

    if (!name || !phone || !city || !address) {
        alert("الرجاء تعبئة جميع البيانات");
        return;
    }

    let message = `طلب جديد من: ${name}\nالهاتف: ${phone}\nالمدينة: ${city}\nالعنوان: ${address}\n\nالمنتجات:\n`;
    cart.forEach(item => {
        message += `- ${item.name} (${item.quantity})\n`;
    });
    
    const total = document.getElementById('final-total').innerText;
    message += `\nالمجموع الكلي: ${total} د.أ`;

    const myNumber = "9627XXXXXXXX"; // ضع رقمك هنا بدون أصفار في البداية
    window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

document.getElementById('main-search').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase();
    const grid = document.getElementById('main-grid');
    
    const filtered = inventory.filter(p => 
        p.name.toLowerCase().includes(term)
    );
    
    if (filtered.length > 0) {
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
        grid.innerHTML = '<p style="text-align:center; width:100%; grid-column: 1/-1;">عذراً، لم نجد نتائج تطابق بحثك.</p>';
    }
});
// البدء
window.onload = () => loadProducts('all');