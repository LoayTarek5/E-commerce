import {headerScroll, HoverMegaMenus, arrowMenuCheck, shoppingCart} from "./header.js"
import {numItemsInCart, cartItemsArr, getItemFromLocal} from "./items.js"

shoppingCart

// To Change header according the scroll window
headerScroll();

// Loop on each arrow and display the selected one
arrowMenuCheck();

HoverMegaMenus();

// Get All Item And Their inforamtion From the Local storage 
getItemFromLocal();

let shoppingCartInfo = document.querySelector(".row-shopping-cart .shopping-cart-info");
let totalItem = document.querySelector(".row-shopping-cart .shopping-cart-receipt .total-items span");
totalItem.innerText = numItemsInCart;

function displayAllItems() {
  cartItemsArr.forEach((item) => {
    let boxItem = document.createElement("div");
    boxItem.classList.add("box");

    let imageCotainer = document.createElement("div");
    imageCotainer.classList.add("image");

    let img = document.createElement("img");
    img.setAttribute("src", item.image_url);
    imageCotainer.appendChild(img);
    
    let textInfoContainer = document.createElement("div");
    textInfoContainer.classList.add("text-info");

    let colOne = document.createElement("div");
    colOne.classList.add("col-1");

    let title = document.createElement("a");
    title.classList.add("title");
    title.innerText = item.title

    let price = document.createElement("p");
    price.classList.add("price");
    price.innerText = item.price

    colOne.appendChild(title);
    colOne.appendChild(price);

    let quantityBox = document.createElement("form");
    quantityBox.classList.add("quantity-box");

    let labelQuantity = document.createElement("form");
    labelQuantity.innerText = "Quantity:"

    let inputQuantity = document.createElement("input");
    inputQuantity.setAttribute("min", "1");
    inputQuantity.setAttribute("type", "number");
    inputQuantity.setAttribute("name", "quantity");
    inputQuantity.setAttribute("value", item.quantity);
    inputQuantity.classList.add("input-quantity");

    quantityBox.appendChild(labelQuantity);
    quantityBox.appendChild(inputQuantity);

    let totalPriceBox = document.createElement("div");
    totalPriceBox.classList.add("total-price");

    let spanTotal  = document.createElement("span");
    let priceItemNum = item.price.split('').filter((ch)=> ch !== "$" && ch !== "." && ch !== ",").join('');
  
    spanTotal.innerText = `$${item.quantity * priceItemNum}`;

    let deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fa-solid", "fa-trash-can", "trash");

    totalPriceBox.appendChild(spanTotal);
    totalPriceBox.appendChild(deleteBtn);

    textInfoContainer.appendChild(colOne);
    textInfoContainer.appendChild(quantityBox);
    textInfoContainer.appendChild(totalPriceBox);

    boxItem.appendChild(imageCotainer);
    boxItem.appendChild(textInfoContainer);

    shoppingCartInfo.appendChild(boxItem);
  });

}

displayAllItems();

let totalPrice = document.querySelector(".row-shopping-cart .shopping-cart-receipt .total-price-receipt span").innerText;

let totStr = totalPrice.split('').filter((ch)=> ch !== "$" && ch !== "." && ch !== ",").join('');
console.log(totStr.split(''));
let last  = "";
totStr.split('').map((n,index) => {
  if((index) % 3 === 0) last +=  n + ',';
  else last += n;
});
console.log(last)