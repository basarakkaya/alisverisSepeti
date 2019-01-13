function countStorageItemsByPrefix(prefix, prefixStartIndex){
    let itemCount = 0;

    for(var i = localStorage.length-1 ; i >= 0 ; i--) {
        if(localStorage.key(i).substr(prefixStartIndex, prefix.length) === prefix){
            itemCount++;
        }
    }

    return itemCount;
}

function setTotalValues(count, price){
    localStorage.setItem('cart-total-count', count);
    localStorage.setItem('cart-total-price', price);
}

function appendCartInfo(){
    let cartTypeCount = countStorageItemsByPrefix('product-count', 0),
    cartTotalCount = localStorage.getItem('cart-total-count'),
    cartHTML = 
    '<div class="cart-info">' +
        '<div class="cart-count">Sepetinizde ' + (localStorage.getItem('cart-total-price') === "0" ? 'ürün bulunmamaktadır.' : cartTypeCount + ' çeşit üründen toplam ' + cartTotalCount + ' adet bulunmaktadır.') + '</div>'+
        (localStorage.getItem('cart-total-price') === "0" ? '' : '<div class="cart-total-price">Toplam sepet tutarı: ' + localStorage.getItem('cart-total-price') + ' ₺</div>') +
    '</div>' +
    '<button class="approve-cart cart-button" onclick="approveCart()"'+ (localStorage.getItem('cart-total-price') === "0" ? 'disabled' : '') + '>Sepeti Onayla</button>' +
    '<button class="empty-cart cart-button" onclick="emptyCart()"'+ (localStorage.getItem('cart-total-price') === "0" ? 'disabled' : '') + '>Sepeti Sil</button>';

    for(var i = localStorage.length-1 ; i >= 0 ; i--) {
        if(localStorage.key(i).substr(8, 5) === 'count'){
            document.getElementById(localStorage.key(i)).innerText = localStorage.getItem(localStorage.key(i));
        }
    }

    document.getElementById('cart').innerHTML = cartHTML;
}

function changeProductCount(data){
    let splitArray = data.split(','),
    productId = splitArray[0],
    price = parseFloat(splitArray[1]),
    isIncrease = splitArray[2].trim(),
    countStorageId = "product-count-" + productId,
    priceStorageId = "product-total-price-" + productId,
    productCount = localStorage.getItem(countStorageId) ? localStorage.getItem(countStorageId) : 0,
    totalProductPrice = localStorage.getItem(priceStorageId) ? parseFloat(localStorage.getItem(priceStorageId)) : 0,
    totalCartPrice = parseFloat(localStorage.getItem('cart-total-price'));
    totalCartCount = parseInt(localStorage.getItem('cart-total-count'));

    if(isIncrease === "true"){
        productCount++;
        totalCartCount++;
        totalProductPrice += price;
        totalCartPrice += price;
    } else if(isIncrease === "false" && productCount > 0 && totalProductPrice > 0){
        productCount--;
        totalCartCount--;
        totalProductPrice -= price;
        totalCartPrice -= price;
    }

    if(productCount === 0){
        localStorage.removeItem(countStorageId);
        localStorage.removeItem(priceStorageId, totalProductPrice);
    } else {
        localStorage.setItem(countStorageId, productCount);
        localStorage.setItem(priceStorageId, totalProductPrice);
    }

    setTotalValues(totalCartCount, totalCartPrice);
    document.getElementById("product-count-" + productId).innerText = productCount;
    appendCartInfo();
}

function getCartContent(){
    let storage = localStorage,
    cart = [],
    cartApprovalText = '';
    
    for(var i = storage.length-1 ; i >= 0 ; i--) {
        if(localStorage.key(i).substr(8, 5) === 'count'){
            let productId = localStorage.key(i).substr(14, localStorage.key(i).length - 14);
            cartApprovalText += localStorage.getItem("product-count-" + productId) + ' adet ' + productId + ' kodlu ürün: ' + localStorage.getItem("product-total-price-" + productId) + ' ₺\n';
        }
    }

    cartApprovalText += '\nToplam sepet tutarı: ' + localStorage.getItem('cart-total-price') + ' ₺\nTeşekkür Ederiz!';

    return cartApprovalText;
}

function approveCart(){
    let answer = confirm("Sepetinizi onaylamak istediğinize emin misiniz?");
    if(answer){
        alert("Sepetiniz onaylandı. Sepet içeriği: \n" + getCartContent());
        emptyCart();
    }
}

function emptyCart(){
    let storage = localStorage;
    for(var i = storage.length-1 ; i >= 0 ; i--){
        if(storage.key(i).substr(0,8) === "product-"){
            if(storage.key(i).substr(8,5) === "count"){
                document.getElementById(storage.key(i)).innerText = "0";
            }
            localStorage.removeItem(storage.key(i));
        }
    }
    
    setTotalValues(0, 0);
    appendCartInfo();
}

function initCart(){
    let totalCartPrice = localStorage.getItem('cart-total-price') ? localStorage.getItem('cart-total-price') : 0,
    totalCartCount = localStorage.getItem('cart-total-count') ? localStorage.getItem('cart-total-count') : 0;

    setTotalValues(totalCartCount, totalCartPrice);
    appendCartInfo();
}