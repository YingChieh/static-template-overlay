//Mask
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}
//Mask

//Show overlay with the category selection
function popupDiv(div_id) {
    showOriginal();

    on();
    var div_obj = $("#" + div_id);      
    var posLeft = ($(window).width() - div_obj.width()) / 2;      
    var posTop = ($(window).height() - div_obj.height()) / 2;            
    div_obj.css({
        "top": posTop,
        "left": posLeft
    }).fadeIn();    
}

//Hide overlay with the category selection(Clicked on the "×" symbol closes the overlay)
function hideDiv(div_id) { 
    off();      
    $("#" + div_id).fadeOut();    
}

//Contents of each category(JSON)
var content = {
    "Info_Head": [{
        "title": "Please select a category or text type.",
        "content": ""
    }],
    "CLOTHING": [{
        "title": "CLOTHING",
        "content": "Accessories, Activewear, Coats, Dresses, Intimates, Jeans, Jewelry, Kids' Clothes, Luggage & Travel Gear, Pants, Shirts, Shoes, Shorts, Skirts, Sleep & Lounge, Suits, Sweaters, Sweatshirts & Hoodies, Swim, T-Shirts, Underwear"
            }],
    "COMPUTERS": [{
        "title": "COMPUTERS",
        "content": "Apple Computers, Barebones PCs, Computer Accessories, Computer Services, Desktops, iPad & Tablet, Laptops, Networking, Peripherals, Servers, Software, Storage, Upgrades / Components"
            }],
    "DEALNEWS_BLOG": [{
        "title": "DEALNEWS BLOG",
        "content": "Buying Guides, Consumer News, Price Trends, Product Reviews, Roundups, Rumors, Tech News"
            }],
    "ELECTRONICS": [{
        "title": "ELECTRONICS",
        "content": "Audio Components, Batteries, Camcorders, Cameras, Digital Picture Frames, Ebook Readers, FRS 2-Way Radios, Gadgets, iPods, MP3 Players, Phones & Cell Phones, Portable Speakers, Power Management, Smart Home, Streaming Media Players, TVs, Universal Remote Controls, Video & Audio Cables, Video Components, Wearable Technology"
            }],
    "GAMINGnTOYS": [{
        "title": "GAMING & TOYS",
        "content": "Card And Board Games, Computer Games, Toys & Hobbies, Video Games"
            }],
    "HOMEnGARDEN": [{
        "title": "HOME & GARDEN",
        "content": "Appliances, Babies & Kids Items, Bed & Bath, Cleaning Supplies, Crafts, Decor, Food & Drink, Garden, Home Furniture, Home Improvement, Home Security, Kitchen, Laundry Supplies, Light Bulbs, Party Supplies, Pets, Seasonal/Holidays, Tools & Hardware"
            }],
    "MOVIES": [{
        "title": "MOVIES, MUSIC, BOOKS",
        "content": "Books & Magazines, Movies, TV Shows & Videos, Music, Video Downloads"
            }],
    "SPORTSnFITNESS": [{
        "title": "SPORTS & FITNESS",
        "content": "Bicycling, Camping & Outdoors, Exercise Equipment, Golf Items, Running"
            }],
    "STORE_EVENTS": [{
        "title": "STORE EVENTS",
        "content": "4th of July, After Christmas Sales, Amazon Prime Day, Back to School, Black Friday, Cyber Monday, Father's Day Gifts, Graduation Gifts, Green Monday, Halloween Items, Labor Day, Macworld Expo, Memorial Day Sales, Mother's Day Gifts, Presidents' Day Sales, Shipping, Spring Break, Tax Day Sales, Valentine's Day"
            }],
    "TRAVEL_ENTERTAINMENT": [{
        "title": "TRAVEL & ENTERTAINMENT",
        "content": "Airfare, Car Rentals, Cruises, Hotels, Movie Tickets, Things to Do, Vacations"
            }]
}

//Display the responding text in the large box on the right side
function ShowContent(id) {
    $(".pop-box-button").css("background-color", "white").css("color", "#0196CE");
    $("#" + id).css("background-color", "#0196CE").css("color", "white");
    $("#pop_header").text("Details");
    $("#Info_Head").text(content[id][0].title);
    $("#Info_Content").text(content[id][0].content);
}

//Click the blue button with the caption "All Categories" would initialize the category selection and the text in the large box
function showOriginal() {
    $(".pop-box-button").css("background-color", "white").css("color", "#0196CE");

    $("#pop_header").text("All Categories");
    $("#Info_Head").text(content.Info_Head[0].title);
    $("#Info_Content").text("");
}
