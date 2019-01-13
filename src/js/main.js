function loadJSON(filePath, success, error){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
	{
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				if (success)
					success(JSON.parse(xhr.responseText));
		} else {
			if (error)
				error(xhr);
			}
		}
	};
	xhr.open("GET", filePath, false); //synchronous http get request
	xhr.send();
}

function hasClass(element, className){
    let classList = element.classList,
    hasClass = false;

    classList.forEach(cls => {
        if (cls === className) {
            hasClass = true; 
            return hasClass;
        }
    });

    return hasClass;
}

function toggleAccordionById(elementID, indicatorID){
    let element = document.getElementById(elementID),
    toggleIndicator = document.getElementById(indicatorID);

    if(hasClass(element, 'accordion-hidden')) {
        element.style.display = "block";
        element.classList.remove("accordion-hidden");
        toggleIndicator.innerText = "-"; 
    } else {
        element.style.display = "none";
        element.classList.add("accordion-hidden");
        toggleIndicator.innerText = "+";
    }
}

window.onload = function(e){
    let restaurantData,
    menuData;

    loadJSON("json/restoranData.json", function(response){
        restaurantData = response.d.ResultSet;
    }, function(e){
        console.log(e);
    });
    loadJSON("json/menuData.json", function(response){
        menuData = response.d.ResultSet;
    }, function(e){
        console.log(e);
    });

    initRestaurantInfo(restaurantData);
    initRestaurantMenu(menuData);
    initCart();
}