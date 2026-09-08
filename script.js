// MOBILE MENU




function toggleMenu() {
    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("active");
}


// CART

let cartCount = 0;
let cartTotal = 0;

function addToCart(item, price) {

    cartCount++;
    cartTotal += price;

    document.getElementById("cart-count").textContent = cartCount;
    document.getElementById("cart-total").textContent = cartTotal;

    alert(item + " added to your cart! ☕");
}


// CLOSE MOBILE MENU WHEN LINK IS CLICKED

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navbar").classList.remove("active");

    });

});
let selectedItem = "";
let selectedPrice = 0;
let selectedImage = "";
let selectedQuantity = 1;


function showItem(name, description, price, image) {

    selectedItem = name;
    selectedPrice = price;
    selectedImage = image;
    selectedQuantity = 1;

    document.getElementById("itemName").textContent = name;

    document.getElementById("itemDescription").textContent =
        description;

    document.getElementById("itemPrice").textContent =
        "₹" + price;

    document.getElementById("itemImage").src =
        image;

    document.getElementById("itemQuantity").textContent =
        selectedQuantity;

    document.getElementById("itemTotal").textContent =
        selectedPrice;

    document.getElementById("itemModal").style.display =
        "block";
}


function increaseQuantity() {

    selectedQuantity++;

    document.getElementById("itemQuantity").textContent =
        selectedQuantity;

    document.getElementById("itemTotal").textContent =
        selectedPrice * selectedQuantity;
}


function decreaseQuantity() {

    if (selectedQuantity > 1) {

        selectedQuantity--;

        document.getElementById("itemQuantity").textContent =
            selectedQuantity;

        document.getElementById("itemTotal").textContent =
            selectedPrice * selectedQuantity;
    }
}


function closeItem() {

    document.getElementById("itemModal").style.display =
        "none";
}


function addSelectedItem() {

    for (let i = 0; i < selectedQuantity; i++) {
        addToCart(selectedItem, selectedPrice);
    }

    closeItem();
}