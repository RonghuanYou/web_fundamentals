function displayMessage(){
    // clicking on the cart icon will triger this alert message
    alert("Your cart is empty")
}

function changeImage(element){
    // hovering over the img will change the img
    element.src = "img/succulents-2.jpg"
}

function changeBackImg(element){
    // leaving mouse will change the img back
    element.src = "img/succulents-1.jpg"
}

function dismissCookie(){
    // Clicking "I accept" will make the alert box disappear
    var cookieContainerTag = document.querySelector(".cookie-container")
    cookieContainerTag.remove()
}


