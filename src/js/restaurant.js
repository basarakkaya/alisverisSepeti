function appendDiscounts(discounts){
    let discountsHTML = '<div class="misc-info-child-banner">İndirimler</div><ul>';

    discounts.forEach(discount => {
        let discountTemplate = 
        '<li>' +
            '<div class="discount">'+
                '<div class="discount-promotion-name">' + discount.Name + (discount.IsCampusPromotion ? '  <img class="icon" title="Kampüs İndirimi" src="../img/campus.svg"/>' : '') + '</div>' +
            '</div>' +
        '</li>';

        discountsHTML += discountTemplate;
    });
    
    document.getElementById("restaurant-discounts").innerHTML = discountsHTML + '</ul>';
}

function appendRestaurantCuisines(cuisines){
    let cuisinesHTML = '<div class="misc-info-child-banner">Mutfaklar</div><ul>';

    cuisines.forEach(cuisine => {
        let cuisineTemplate = 
        '<li>' +
            '<div class="cuisine">' +
                '<div class="cuisine-name">' + cuisine.Name + (cuisine.IsMainCuisine ? '  <img class="icon" title="Ana Mutfak" src="../img/main.svg"/>' : '') + (cuisine.IsChainCuisine ? '  <img class="icon" title="Zincir Mağaza" src="../img/franchise.svg"/>' : '') +
                '</div>' +
            '</div>' +
        '</li>';

        cuisinesHTML += cuisineTemplate;
    });

    document.getElementById("restaurant-cuisines").innerHTML = cuisinesHTML + '</ul>';
}

function appendWorkingHours(workingHours){
    let workingHoursHTML = '<div class="misc-info-child-banner">Çalışma Saatleri</div><ul>';

    workingHours.forEach(workingHour => {
        let day = '';
        switch(workingHour.DayOfWeek){
            case 0: day = 'Pazartesi'; break;
            case 1: day = 'Salı'; break;
            case 2: day = 'Çarşamba'; break;
            case 3: day = 'Perşembe'; break;
            case 4: day = 'Cuma'; break;
            case 5: day = 'Cumartesi'; break;
            case 6: day = 'Pazar'; break;
        }

        let workingHourTemplate = 
        '<li>' +
            '<div class="working-hour ' + (workingHour.IsToday ? 'info-active': '') + '">' + 
                '<div class="working-day-of-week">' + day + (workingHour.IsToday ? ' (Bugün)': '') + ': '+ workingHour.WorkingHours + '</div>' +
            '</div>' +
        '</li>';

        workingHoursHTML += workingHourTemplate;
    });

    document.getElementById("restaurant-working-hours").innerHTML = workingHoursHTML + '</ul>';
}

function appendPaymentMethods(payments){
    let paymentMethodsHTML = '<div class="misc-info-child-banner">Ödeme Türleri</div><ul>';

    payments.forEach(payment => {
        let paymentTemplate = 
        '<li>' +
            '<div class="payment-method">' +
                '<div class="payment-name">'+ payment.PaymentMethodName + (payment.isFastPay ? '  <img class="icon" title="Hızlı Ödeme" src="../img/fastpay.svg"/>' : '') + (payment.isOCC ? '  <img class="icon" title="Online Kredi Kartı" src="../img/online-payment.svg"/>' : '') +
                '</div>' +
            '</div>' +
        '</li>';

        paymentMethodsHTML += paymentTemplate;
    });

    document.getElementById("restaurant-payment-methods").innerHTML = paymentMethodsHTML + '</ul>';
}

function appendDeliveryAreas(deliveryAreas){
    let deliveryAreasHTML = '<div class="misc-info-child-banner">Teslimat Bölgeleri</div><ul>';

    deliveryAreas.forEach(deliveryArea => {
        let deliveryAreaTemplate = 
        '<li>' +
            '<div class="delivery-area ' + (deliveryArea.IsSelectedArea ? 'info-active' : '') + '">' +
                '<div class="delivery-areaName">'+ deliveryArea.AreaName + (deliveryArea.IsSelectedArea ? ' (Seçili Bölge)' : '') + (deliveryArea.AreaType === "Campus" ? '  <img class="icon" title="Kampüs Bölgesi" src="../img/campus.svg"/>': '') +'</div>' +
                '<div class="delivery-info">' + 
                    '<div class="delivery-delivery-fee">Gönderim Ücreti: '+ deliveryArea.DeliveryFee +' ₺</div>' + 
                    '<div class="delivery-delivery-time">Teslimat Süresi: '+ deliveryArea.DeliveryTime +' dk.</div>' + 
                    '<div class="delivery-min-price">Min. Paket Tutarı: '+ deliveryArea.MinimumPrice +' ₺</div>' + 
                '</div>' +
            '</div>' +
        '</li>';

        deliveryAreasHTML += deliveryAreaTemplate;
    });

    document.getElementById("restaurant-delivery-areas").innerHTML = deliveryAreasHTML + '</ul>';
}

function initRestaurantInfo(data){
    let restaurantTemplate = 
            '<div class="restaurant-info">' + 
                '<img class="restaurant-logo" onerror="this.src=' + "'../img/yslogo.png'" +';" src="//cdn.yemeksepeti.com' + data.ImagePath + '"/>' +
                '<div class="restaurant-display-name">' + data.DisplayName + '</div>' +
                '<div class="restaurant-address">' + data.AddressText + '</div>' +
                '<div class="restaurant-links">' +
                    '<a href="' + data.FacebookLikeUrl + '" class="link-fb"><img class="icon" src="../img/like.svg"/></a>' +
                    '<a href="' + data.FacebookShareUrl + '" class="link-fb"><img class="icon" src="../img/share.svg"/></a>' +
                '</div>' +
            '</div>' +
            '<div class="restaurant-delivery-info">' +
                '<div class="restaurant-delivery-details">' + 
                    '<div class="restaurant-delivery-fee">Gönderim Ücreti: ' + data.DeliveryFee + ' ₺</div>' +
                    '<div class="restaurant-delivery-fime">Tahmini Gönderim Süresi: ' + data.DeliveryTime + ' dk.</div>' +
                    '<div class="restaurant-support-takeaway">Gel-al Servis: ' + (data.SupportTakeAway ? 'Var' : 'Yok') + '</div>' +
                    '<div class="restaurant-support-delivery">Paket Servis: ' + (data.SupportsDelivery ? 'Var' : 'Yok') + '</div>' +
                '</div>' +
                '<div class="restaurant-points">' +
                    '<div class="restaurant-points-flavour">Lezzet: ' + data.Flavour + '</div>' +
                    '<div class="restaurant-points-serving">Servis: ' + data.Serving + '</div>' +
                    '<div class="restaurant-points-speed">Hız: ' + data.Speed + '</div>' +
                    '<div class="restaurant-points-total">Toplam Puanlama Sayısı: ' + data.TotalPointCount + '</div>' +
                    '</div>' +
            '</div>' +
            '<div class="restaurant-misc-info-accordion">' +
                '<div class="container-banner" onclick="toggleAccordionById('+"'restaurant-misc-info-accordion-container'"+', ' + "'info-acc-toggle-indicator'" + ')">Bilgiler <span id="info-acc-toggle-indicator">+</span></div>' +
                '<div class="restaurant-misc-info-accordion-container accordion-hidden" id="restaurant-misc-info-accordion-container">' +
                    '<div class="restaurant-discounts" id="restaurant-discounts"></div>' +
                    '<div class="restaurant-cuisines" id="restaurant-cuisines"></div>' +
                    '<div class="restaurant-working-hours" id="restaurant-working-hours"></div>' +
                    '<div class="restaurant-payment-methods" id="restaurant-payment-methods"></div>' +
                    '<div class="restaurant-delivery-areas" id="restaurant-delivery-areas"></div>' +
                '</div>' +
            '</div>';
    
    document.getElementById("restaurant").innerHTML = restaurantTemplate;
    appendDiscounts(data.Discounts);
    appendRestaurantCuisines(data.ResturantCuisines);
    appendWorkingHours(data.WorkingHours);
    appendPaymentMethods(data.PaymentMethods);
    appendDeliveryAreas(data.DeliveryAreas);
}