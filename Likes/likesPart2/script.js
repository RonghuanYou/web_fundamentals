// likeNumArray = [Neil's like num, Nichole's like num, Jim's like num]
var likeNumArray = [9, 12, 9]


function increaseNeilLike(){
    likeNumArray[0]++;
    var likeText = document.querySelector("#Neil-like-text")
    likeText.innerHTML = `${likeNumArray[0]} likes(s)`
}

function increaseLikeNichole(){
    likeNumArray[1]++;
    var likeText = document.querySelector("#Nichole-like-text")
    likeText.innerHTML = `${likeNumArray[1]} likes(s)`
}

function increaseJimLike(){
    likeNumArray[2]++;
    var likeText = document.querySelector("#Jim-like-text")
    likeText.innerHTML = `${likeNumArray[2]} likes(s)`
}