function validatePrice(price){
    let validPrice = price.replace(",", ".");
    validPrice = parseFloat(validPrice);

    return validPrice;
}

function appendProductsToCategory(products){
    let productsHTML = '';

    products.forEach(product => {
        let productCount = localStorage.getItem("count-" + product.ProductId) ? localStorage.getItem("count-" + product.ProductId) : 0,
        productTemplate = 
        '<div id="product-'+ product.ProductId +'" class="product">' +
            '<div class="product-info">' +
                '<div class="product-counter">' +
                    '<button class="product-increase-count" onclick="changeProductCount('+ "'" + product.ProductId + ", " + validatePrice(product.ExtendedPrice) + ", true'" +')" ' + (product.ProductIsOpen === 'Kapali' ? 'disabled' : '') + '>' + '+' + '</button>' +
                    '<div class="product-count-input" id="product-count-' + product.ProductId + '">' + productCount + '</div>' +
                    '<button class="product-decrease-count" onclick="changeProductCount('+ "'" + product.ProductId + ", " + validatePrice(product.ExtendedPrice) + ", false'" +')" ' + (product.ProductIsOpen === 'Kapali' ? 'disabled' : '') + '>' + '-' + '</button>' +
                '</div>' +
                '<div class="product-label">' +
                    '<div class="product-display-name">' + product.DisplayName + (product.ProductIsOpen === 'Kapali' ? ' <span class="product-closed">(Tükendi)</span>' : '') +  '</div>' +
                    '<div class="product-description">' + product.Description + '</div>' +
                '</div>' +
                '<div class="product-price">' + 
                    ((product.ListPrice === product.ExtendedPrice) ? '' : '<div class="product-list-price">' + product.ListPrice + '</div>') +
                    '<div class="product-extended-price">' + product.ExtendedPrice + '</div>' +
                '</div>' +
            '</div>' +
        '</div>';

        productsHTML += productTemplate;
    });

    return productsHTML;
}

function initRestaurantMenu(categorisedData){
    let menuHTML = '<div class="container-banner">Menü</div>';

    categorisedData.forEach(category => {
        let categoryTemplate = 
        '<div id="category-'+ category.CategoryName +'" class="category">' +
            '<div class="category-display-name">' + category.DisplayName + '</div>' +
            appendProductsToCategory(category.Products) +
        '</div>';

        menuHTML += categoryTemplate;
    });

    document.getElementById("menu").innerHTML = menuHTML;
}