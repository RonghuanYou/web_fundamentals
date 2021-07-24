
var count = 3

function increaseLikeNum(){
    // increase count every time when we click Like button
    // get object relate to <p> with id "like-text"
    // update the display on the screen
    count ++
    var likesText = document.querySelector("#like-text")
    likesText.innerHTML = `${count} like(s)`
}
