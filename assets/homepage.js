var searchBtn = document.getElementById("btn");

function sendToSearchpage(event){
    event.preventDefault();
    document.location ="./searchpage.html";
}

searchBtn.addEventListener("click",sendToSearchpage);