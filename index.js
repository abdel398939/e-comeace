// ============================================
// 1. INVENTORY (قائمة المنتجات المحسنة)
// ============================================
const inventory = [
    { 
        id: 1, 
        name: "فستان سهرة أسود ستان", 
        image: "https://placehold.co/600x800/2c2c2c/white?text=RAWAQ+Gown", 
        price: 59.90, 
        oldPrice: 89.90,
        cat: "women", 
        desc: "قماش ستان فاخر بقصة أميرة. مناسب للمناسبات الفاخرة والحفلات الراقية.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["أسود", "أحمر", "أزرق"],
        rating: 4.8,
        reviews: 124,
        badge: "sale",
        inStock: true
    },
    { 
        id: 2, 
        name: "بلوزة صوفية كشميرية - بيج", 
        image: "https://placehold.co/600x800/e0c5a0/2c2c2c?text=Cashmere", 
        price: 42.00, 
        oldPrice: null,
        cat: "women", 
        desc: "صوف كشمير ناعم و دافئ، صناعة يدوية بجودة عالية من أجود أنواع الصوف.",
        sizes: ["S", "M", "L"],
        colors: ["بيج", "رمادي", "نبيتي"],
        rating: 4.6,
        reviews: 87,
        badge: "new",
        inStock: true
    },
    { 
        id: 3, 
        name: "هودي أوفرسايز - كحلي", 
        image: "https://placehold.co/600x800/395b6e/white?text=Oversized+Hoodie", 
        price: 34.50, 
        oldPrice: null,
        cat: "men", 
        desc: "قطن عضوي مريح، تصميم عصري مثالي للرجال الذين يبحثون عن الأناقة والراحة.",
        sizes: ["M", "L", "XL", "XXL"],
        colors: ["كحلي", "أسود", "رمادي"],
        rating: 4.7,
        reviews: 156,
        badge: null,
        inStock: true
    },
    { 
        id: 4, 
        name: "ساعة ذكية Ultra 3", 
        image: "https://placehold.co/600x800/1e2a3a/silver?text=SmartWatch", 
        price: 89.00, 
        oldPrice: 129.00,
        cat: "men", 
        desc: "شاشة AMOLED، مقاومة للماء حتى 50 متر، تتبع رياضي متقدم مع مراقبة النوم.",
        sizes: null,
        colors: ["فضي", "أسود", "ذهبي"],
        rating: 4.9,
        reviews: 234,
        badge: "sale",
        inStock: true
    },
    { 
        id: 5, 
        name: "طقم أطفال قطني فاخر", 
        image: "https://placehold.co/600x800/e8cfb0/3a2a2a?text=Baby+Set", 
        price: 29.00, 
        oldPrice: null,
        cat: "kids", 
        desc: "ناعم 100% قطن، مناسب لبشرة الطفل الحساسة مع تصميم مريح وجذاب.",
        sizes: ["0-6 شهر", "6-12 شهر", "12-18 شهر"],
        colors: ["أبيض", "وردي", "أزرق"],
        rating: 4.5,
        reviews: 67,
        badge: "new",
        inStock: true
    },
    { 
        id: 6, 
        name: "حذاء أطفال مضيء - ديناصور", 
        image: "https://placehold.co/600x800/f0bc78/2a2a2a?text=Glow+Shoes", 
        price: 24.90, 
        oldPrice: 34.90,
        cat: "kids", 
        desc: "ممتع وآمن، يضيء عند المشي مع تصميم ديناصور محبوب من الأطفال.",
        sizes: ["22", "23", "24", "25"],
        colors: ["أخضر", "أزرق"],
        rating: 4.8,
        reviews: 89,
        badge: "sale",
        inStock: true
    },
    { 
        id: 7, 
        name: "جاكيت جلد رجالي أنيق", 
        image: "https://placehold.co/600x800/2b2b2b/cccccc?text=Leather+Jacket", 
        price: 129.00, 
        oldPrice: null,
        cat: "men", 
        desc: "جلد طبيعي، كلاسيكي بأسلوب عصري يناسب جميع المناسبات ويضفي لمسة فخامة.",
        sizes: ["M", "L", "XL"],
        colors: ["أسود", "بني", "رمادي"],
        rating: 4.7,
        reviews: 98,
        badge: null,
        inStock: true
    },
    { 
        id: 8, 
        name: "فستان كاجوال صيفي مطبع", 
        image: "https://placehold.co/600x800/f4d8b5/647e6b?text=Summer+Dress", 
        price: 38.00, 
        oldPrice: null,
        cat: "women", 
        desc: "خامات باردة، مثالي للصيف الأردني الحار مع تصميم عصري وأنيق.",
        sizes: ["S", "M", "L"],
        colors: ["أبيض", "أزرق", "وردي"],
        rating: 4.4,
        reviews: 56,
        badge: null,
        inStock: true
    },
    { 
        id: 9, 
        name: "بدلة رياضية كاجوال", 
        image: "https://placehold.co/600x800/4a627a/f0f0f0?text=Sweatsuit", 
        price: 55.00, 
        oldPrice: 75.00,
        cat: "men", 
        desc: "طقم قطني لوك ريحي أنيق، مثالي للتمارين أو الاسترخاء في المنزل.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["كحلي", "رمادي", "أسود"],
        rating: 4.6,
        reviews: 78,
        badge: "sale",
        inStock: true
    },
    { 
        id: 10, 
        name: "سنيكرز رياضية رجالية", 
        image: "https://placehold.co/600x800/464646/eeeeee?text=Sneakers", 
        price: 48.00, 
        oldPrice: null,
        cat: "men", 
        desc: "نعل مريح، تصميم عصري مع تقنية دعم القدم ونظام تهوية متطور.",
        sizes: ["40", "41", "42", "43", "44"],
        colors: ["أبيض", "أسود", "أزرق"],
        rating: 4.7,
        reviews: 134,
        badge: null,
        inStock: true
    },
    { 
        id: 11, 
        name: "فستان طفلة تول وردي", 
        image: "https://placehold.co/600x800/f9c9d1/441122?text=Tulle+Dress", 
        price: 32.00, 
        oldPrice: null,
        cat: "kids", 
        desc: "مثالي للمناسبات، ناعم وطبقات تول متعددة مع لمسات من التطريز اليدوي.",
        sizes: ["3-4 سنوات", "5-6 سنوات", "7-8 سنوات"],
        colors: ["وردي", "أبيض"],
        rating: 4.9,
        reviews: 45,
        badge: "new",
        inStock: true
    },
    { 
        id: 12, 
        name: "نظارة شمسية راقية", 
        image: "https://placehold.co/600x800/121212/bbaa88?text=Sunglasses", 
        price: 45.00, 
        oldPrice: 65.00,
        cat: "women", 
        desc: "حماية UV400، إطار ذهبي مع عدسات مستقطبة تقلل الوهج.",
        sizes: null,
        colors: ["ذهبي", "فضي", "أسود"],
        rating: 4.5,
        reviews: 67,
        badge: "sale",
        inStock: true
    },
    { 
        id: 13, 
        name: "شنطة يد جلدية فاخرة", 
        image: "https://placehold.co/600x800/a57c4c/fff6ed?text=Leather+Bag", 
        price: 79.00, 
        oldPrice: null,
        cat: "women", 
        desc: "صناعة يدوية من أجود أنواع الجلود، عملية وفاخرة تناسب جميع الإطلالات.",
        sizes: null,
        colors: ["بني", "أسود", "بيج"],
        rating: 4.8,
        reviews: 92,
        badge: null,
        inStock: true
    },
    { 
        id: 14, 
        name: "تيشرت أطفال شخصيات كرتونية", 
        image: "https://placehold.co/600x800/84b3b0/f9f9f9?text=Kids+Tee", 
        price: 15.99, 
        oldPrice: null,
        cat: "kids", 
        desc: "قطن ممتاز، مطبوعات آمنة مع شخصيات كرتونية محبوبة من الأطفال.",
        sizes: ["2-3 سنوات", "4-5 سنوات", "6-7 سنوات"],
        colors: ["أزرق", "أحمر", "أصفر"],
        rating: 4.3,
        reviews: 34,
        badge: null,
        inStock: true
    }
];

// ============================================
// 2. STATE MANAGEMENT (إدارة الحالة)
// ============================================
let cart = [];
let wishlist = [];
let currentFilter = 'all';
let currentSearchTerm = '';

// ============================================
// 3. HELPER FUNCTIONS
// ============================================

// تقييمات ونجوم
function getRandomRating() {
    return (3.5 + Math.random() * 1.5).toFixed(1);
}

function renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    let stars = '';
    for(let i = 0; i < full; i++) {
        stars += '<i class="fas fa-star" style="color:#f5a623;"></i>';
    }
    if(half) {
        stars += '<i class="fas fa-star-half-alt" style="color:#f5a623;"></i>';
    }
    const empty = 5 - full - half;
    for(let i = 0; i < empty; i++) {
        stars += '<i class="far fa-star" style="color:#f5a623;"></i>';
    }
    return stars;
}

// ============================================
// 4. PRODUCT RENDERING
// ============================================

function loadProducts(category = 'all') {
    currentFilter = category;
    let filtered = [...inventory];
    
    if(category === 'women') {
        filtered = inventory.filter(p => p.cat === 'women');
    } else if(category === 'men') {
        filtered = inventory.filter(p => p.cat === 'men');
    } else if(category === 'kids') {
        filtered = inventory.filter(p => p.cat === 'kids');
    } else if(category === 'sale') {
        filtered = inventory.filter(p => p.oldPrice !== null);
    } else if(category === 'new') {
        filtered = inventory.filter(p => p.badge === 'new');
    }
    
    // تطبيق البحث إن وجد
    if(currentSearchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(currentSearchTerm) || 
            p.desc.toLowerCase().includes(currentSearchTerm)
        );
    }
    
    // إخفاء صفحة التفاصيل
    document.getElementById('product-details-view').classList.remove('product-page-active');
    document.getElementById('product-details-view').classList.add('product-page-hidden');
    document.getElementById('main-section').style.display = 'block';
    
    renderProductGrid(filtered);
}

function renderProductGrid(productsArray) {
    const grid = document.getElementById('main-grid');
    
    if(!productsArray || productsArray.length === 0) {
        grid.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:60px 20px;">
                <i class="fas fa-search" style="font-size:48px; color:#ddd; margin-bottom:20px;"></i>
                <h3 style="color:#666;">لا توجد منتجات تطابق بحثك</h3>
                <p style="color:#999; font-size:14px;">حاول تغيير كلمات البحث أو التصنيف</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = productsArray.map(p => {
        // تحديد نوع البادج
        let badgeHTML = '';
        if(p.badge === 'sale') {
            badgeHTML = `<span class="p-badge sale">🔥 خصم ${Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)}%</span>`;
        } else if(p.badge === 'new') {
            badgeHTML = `<span class="p-badge new">✨ جديد</span>`;
        }
        
        // تنسيق السعر
        const oldPriceHTML = p.oldPrice ? 
            `<span class="old-price">${p.oldPrice.toFixed(2)} د.أ</span>` : '';
        
        // تقييمات
        const rating = p.rating || getRandomRating();
        const starsHTML = renderStars(rating);
        
        // التحقق من المنتج في السلة
        const inCart = cart.some(item => item.id === p.id);
        const cartBtnText = inCart ? '✅ في السلة' : '🛍️ إضافة للسلة';
        const cartBtnClass = inCart ? 'in-cart' : '';
        
        return `
            <div class="p-card" data-id="${p.id}">
                <div class="p-image" onclick="showProductDetails(${p.id})">
                    <img src="${p.image}" alt="${p.name}" loading="lazy">
                    ${badgeHTML}
                    <button class="wishlist-btn" onclick="toggleWishlist(${p.id}); event.stopPropagation();">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="p-info-box">
                    <h4 onclick="showProductDetails(${p.id})">${p.name}</h4>
                    <div class="p-rating">
                        <span class="stars">${starsHTML}</span>
                        <span class="count">(${p.reviews || Math.floor(Math.random() * 100) + 10})</span>
                    </div>
                    <div class="p-price">
                        ${p.price.toFixed(2)} د.أ
                        ${oldPriceHTML}
                    </div>
                    <button class="add-to-cart-btn ${cartBtnClass}" onclick="addToCart(${p.id})">
                        ${cartBtnText}
                    </button>
                    <button class="quick-view" onclick="showProductDetails(${p.id})">
                        <i class="fas fa-eye"></i> معاينة سريعة
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================
// 5. SEARCH FUNCTIONALITY
// ============================================

const searchInput = document.getElementById('main-search');
let searchTimeout;

searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const term = e.target.value.trim().toLowerCase();
        currentSearchTerm = term;
        
        if(!term) {
            loadProducts(currentFilter);
            return;
        }
        
        const filtered = inventory.filter(p => 
            p.name.toLowerCase().includes(term) || 
            p.desc.toLowerCase().includes(term) ||
            p.cat.includes(term)
        );
        renderProductGrid(filtered);
    }, 300);
});

// ============================================
// 6. CART MANAGEMENT
// ============================================

function addToCart(id) {
    const product = inventory.find(p => p.id === id);
    if(!product) return;
    
    const existing = cart.find(item => item.id === id);
    
    if(existing) {
        existing.qty++;
    } else {
        cart.push({...product, qty: 1});
    }
    
    updateCartUI();
    openCart();
    showToast(`🛍️ تم إضافة "${product.name}" للسلة`);
    trackEvent('add_to_cart', { product_id: id, product_name: product.name, price: product.price });
}

function removeFromCart(id) {
    const product = inventory.find(p => p.id === id);
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
    if(product) {
        showToast(`🗑️ تم إزالة "${product.name}" من السلة`);
    }
}

function updateQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if(item) {
        item.qty += change;
        if(item.qty <= 0) {
            removeFromCart(id);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartBody = document.getElementById('cart-items');
    const countSpan = document.getElementById('bag-count');
    const totalSpan = document.getElementById('cart-total');
    
    const totalItems = cart.reduce((s, i) => s + i.qty, 0);
    const totalPrice = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    
    countSpan.innerText = totalItems;
    totalSpan.innerText = totalPrice.toFixed(2);
    
    if(cart.length === 0) {
        cartBody.innerHTML = `
            <div style="text-align:center; padding:40px 20px; color:#999;">
                <i class="fas fa-shopping-bag" style="font-size:48px; color:#ddd; margin-bottom:15px;"></i>
                <p>سلة التسوق فارغة</p>
                <p style="font-size:13px;">أضف المنتجات التي تعجبك ✨</p>
            </div>
        `;
        return;
    }
    
    cartBody.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="price">${(item.price * item.qty).toFixed(2)} د.أ</div>
            </div>
            <div class="cart-item-actions">
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <span style="min-width:24px; text-align:center; font-weight:700;">${item.qty}</span>
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    // حفظ السلة في localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// ============================================
// 7. WISHLIST (المفضلة)
// ============================================

function toggleWishlist(id) {
    const index = wishlist.indexOf(id);
    if(index > -1) {
        wishlist.splice(index, 1);
        showToast('❤️ تم إزالة من المفضلة');
    } else {
        wishlist.push(id);
        showToast('❤️ تم إضافة إلى المفضلة');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
}

function updateWishlistUI() {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const card = btn.closest('.p-card');
        if(card) {
            const id = parseInt(card.dataset.id);
            const icon = btn.querySelector('i');
            if(wishlist.includes(id)) {
                icon.className = 'fas fa-heart';
                btn.style.color = '#c50613';
            } else {
                icon.className = 'far fa-heart';
                btn.style.color = '#fff';
            }
        }
    });
}

// ============================================
// 8. PRODUCT DETAILS VIEW
// ============================================

function showProductDetails(id) {
    const product = inventory.find(p => p.id === id);
    if(!product) return;
    
    const detailsContainer = document.getElementById('product-content');
    const detailsView = document.getElementById('product-details-view');
    
    document.getElementById('main-section').style.display = 'none';
    detailsView.classList.remove('product-page-hidden');
    detailsView.classList.add('product-page-active');
    window.scrollTo(0, 0);
    
    const rating = product.rating || getRandomRating();
    const starsHTML = renderStars(rating);
    const oldPriceHTML = product.oldPrice ? 
        `<span style="text-decoration:line-through; color:#999; font-size:1.2rem; margin-right:12px;">${product.oldPrice.toFixed(2)} د.أ</span>` : '';
    
    // إنشاء أزرار المقاسات
    let sizeHTML = '';
    if(product.sizes && product.sizes.length > 0) {
        sizeHTML = `
            <div style="margin:20px 0;">
                <label style="font-weight:600; display:block; margin-bottom:8px;">اختر المقاس:</label>
                <div class="size-selector">
                    ${product.sizes.map(size => `
                        <button class="size-btn" onclick="selectSize(this)">${size}</button>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // إنشاء أزرار الألوان
    let colorHTML = '';
    if(product.colors && product.colors.length > 0) {
        colorHTML = `
            <div style="margin:20px 0;">
                <label style="font-weight:600; display:block; margin-bottom:8px;">اختر اللون:</label>
                <div style="display:flex; gap:12px;">
                    ${product.colors.map(color => `
                        <button onclick="selectColor(this)" style="padding:8px 16px; border:2px solid #ddd; border-radius:20px; background:#fff; cursor:pointer; font-family:Cairo;">
                            ${color}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // منتجات مقترحة
    const related = inventory
        .filter(p => p.cat === product.cat && p.id !== product.id)
        .slice(0, 4);
    
    const relatedHTML = related.length > 0 ? `
        <div style="margin-top:40px; border-top:1px solid #eee; padding-top:30px;">
            <h3 style="font-size:20px; margin-bottom:20px;">🛍️ قد يعجبك أيضاً</h3>
            <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px,1fr)); gap:15px;">
                ${related.map(p => `
                    <div style="cursor:pointer; text-align:center;" onclick="showProductDetails(${p.id})">
                        <img src="${p.image}" alt="${p.name}" style="width:100%; border-radius:12px; height:200px; object-fit:cover;">
                        <p style="font-weight:600; margin-top:8px; font-size:14px;">${p.name}</p>
                        <p style="font-weight:700; color:#8B4513;">${p.price.toFixed(2)} د.أ</p>
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';
    
    detailsContainer.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:40px;">
            <div class="details-flex">
                <div class="detail-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="detail-info">
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
                        <span style="background:#f0f0f0; padding:4px 12px; border-radius:20px; font-size:12px; text-transform:capitalize;">
                            ${product.cat === 'women' ? '👩 نساء' : product.cat === 'men' ? '👨 رجال' : '👶 أطفال'}
                        </span>
                        ${product.badge === 'sale' ? '<span style="background:#c50613; color:#fff; padding:4px 12px; border-radius:20px; font-size:12px;">🔥 تخفيض</span>' : ''}
                        ${product.badge === 'new' ? '<span style="background:#8B4513; color:#fff; padding:4px 12px; border-radius:20px; font-size:12px;">✨ جديد</span>' : ''}
                    </div>
                    
                    <h2>${product.name}</h2>
                    
                    <div style="display:flex; align-items:center; gap:12px; margin:12px 0;">
                        <span class="stars">${starsHTML}</span>
                        <span style="color:#999; font-size:14px;">(${product.reviews || Math.floor(Math.random() * 100) + 10} تقييم)</span>
                    </div>
                    
                    <div style="font-size:2rem; font-weight:800; color:#5C2E0A; margin:16px 0;">
                        ${product.price.toFixed(2)} د.أ
                        ${oldPriceHTML}
                    </div>
                    
                    <p style="color:#555; line-height:1.8; font-size:16px;">${product.desc}</p>
                    
                    ${sizeHTML}
                    ${colorHTML}
                    
                    <div style="display:flex; gap:12px; margin-top:30px; flex-wrap:wrap;">
                        <button class="add-to-cart-btn" style="flex:1; min-width:200px;" onclick="addToCart(${product.id}); closeDetails();">
                            🛍️ أضف إلى السلة
                        </button>
                        <button class="add-to-cart-btn" style="flex:0; background:transparent; color:#8B4513; border:2px solid #8B4513;" onclick="toggleWishlist(${product.id})">
                            ❤️
                        </button>
                    </div>
                    
                    <div style="display:flex; gap:20px; margin-top:24px; color:#666; font-size:14px; flex-wrap:wrap;">
                        <span><i class="fas fa-truck" style="color:#8B4513;"></i> توصيل سريع</span>
                        <span><i class="fas fa-shield-alt" style="color:#8B4513;"></i> ضمان استرجاع</span>
                        <span><i class="fas fa-credit-card" style="color:#8B4513;"></i> دفع آمن</span>
                        <span><i class="fas fa-check-circle" style="color:#8B4513;"></i> جودة مضمونة</span>
                    </div>
                </div>
            </div>
            ${relatedHTML}
        </div>
    `;
    
    // تحديث الـ wishlist
    updateWishlistUI();
}

function closeDetails() {
    document.getElementById('product-details-view').classList.remove('product-page-active');
    document.getElementById('product-details-view').classList.add('product-page-hidden');
    document.getElementById('main-section').style.display = 'block';
    loadProducts(currentFilter);
}

function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    showToast(`✅ تم اختيار المقاس ${btn.innerText}`);
}

function selectColor(btn) {
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    showToast(`✅ تم اختيار اللون ${btn.innerText}`);
}

// ============================================
// 9. CART UI TOGGLES
// ============================================

function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    drawer.classList.toggle('active');
    if(drawer.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function openCart() {
    document.getElementById('cart-drawer').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cart-drawer').classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// 10. CHECKOUT MODAL
// ============================================

function openCheckout() {
    if(cart.length === 0) {
        showToast('⚠️ السلة فارغة! أضف منتجات أولاً');
        return;
    }
    const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    document.getElementById('final-total').innerText = total.toFixed(2);
    document.getElementById('checkout-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeCheckout() {
    document.getElementById('checkout-modal').style.display = 'none';
    document.body.style.overflow = '';
}

// ============================================
// 11. WHATSAPP ORDER
// ============================================

function sendToWhatsApp() {
    const name = document.getElementById('cust-name').value.trim();
    const phone = document.getElementById('cust-phone').value.trim();
    const city = document.getElementById('cust-city').value;
    const addr = document.getElementById('cust-address').value.trim();
    
    if(!name || !phone || !city || !addr) {
        showToast('⚠️ يرجى ملء جميع بيانات الشحن');
        return;
    }
    
    if(!phone.match(/^07[0-9]{8}$/)) {
        showToast('⚠️ رقم الهاتف غير صحيح (مثال: 0771234567)');
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
    
    const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    orderMsg += `\n💰 *المجموع الكلي: ${total.toFixed(2)} د.أ*\n\n`;
    orderMsg += `🙏 شكراً لتسوقكم من راواق ✨`;
    
    const adminNumber = "962786610095";
    window.open(`https://wa.me/${adminNumber}?text=${encodeURIComponent(orderMsg)}`, '_blank');
    
    // تفريغ السلة بعد الطلب
    cart = [];
    updateCartUI();
    closeCheckout();
    closeCart();
    showToast('✅ تم إرسال الطلب بنجاح! سنتصل بك قريباً');
    trackEvent('purchase', { value: total, items: cart.length });
}

// ============================================
// 12. TOAST NOTIFICATIONS
// ============================================

function showToast(msg) {
    const existing = document.querySelector('.toast');
    if(existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100px)';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// ============================================
// 13. ANALYTICS (Google Analytics 4)
// ============================================

function trackEvent(eventName, params = {}) {
    if(typeof gtag !== 'undefined') {
        gtag('event', eventName, params);
    }
    console.log(`📊 Track: ${eventName}`, params);
}

// ============================================
// 14. MOBILE MENU
// ============================================

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('active');
}

// ============================================
// 15. LOAD CART FROM LOCAL STORAGE
// ============================================

function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('cart');
        if(savedCart) {
            cart = JSON.parse(savedCart);
            updateCartUI();
        }
        
        const savedWishlist = localStorage.getItem('wishlist');
        if(savedWishlist) {
            wishlist = JSON.parse(savedWishlist);
        }
    } catch(e) {
        console.log('Error loading storage:', e);
    }
}

// ============================================
// 16. TRUST BADGES (شهادات الثقة)
// ============================================

function renderTrustBadges() {
    const mainSection = document.getElementById('main-section');
    const trustHTML = `
        <div class="trust-badges">
            <div class="trust-badge">
                <i class="fas fa-truck"></i>
                <span>توصيل سريع خلال 24-48 ساعة</span>
            </div>
            <div class="trust-badge">
                <i class="fas fa-shield-alt"></i>
                <span>ضمان استرجاع خلال 7 أيام</span>
            </div>
            <div class="trust-badge">
                <i class="fas fa-credit-card"></i>
                <span>دفع آمن عند الاستلام</span>
            </div>
            <div class="trust-badge">
                <i class="fas fa-star"></i>
                <span>منتجات أصلية 100%</span>
            </div>
        </div>
    `;
    mainSection.insertAdjacentHTML('afterbegin', trustHTML);
}

// ============================================
// 17. KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // ESC = إغلاق السلة أو التفاصيل
    if(e.key === 'Escape') {
        if(document.getElementById('cart-drawer').class
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
