var searchForm = document.querySelector("#form-inline");
var searchData = document.querySelector("#search-data");
var options = document.querySelector("#select");
var putOutput = document.querySelector(".all-output")

function spitItOut(resultsObject){

    var divE1 = document.createElement("div");
    var h3E1 = document.createElement("h3");
    var aE1 = document.createElement("a");
    var pE1 = document.createElement("p");
 
    h3E1.textContent = resultsObject.title;
    aE1.textContent = resultsObject.url;
    pE1.textContent = resultsObject.description;

    putOutput.append(divE1, h3E1, pE1, aE1);
}

var buildSearchData = function (event) {
    event.preventDefault();

    var searchableData = searchData.value.trim();
    var optionSelection = options.value;
    console.log("searchabledata " + searchData + "optionsselection" + optionSelection)

    if (searchableData === null || searchData === null) {
        alert('Please enter either a search item, or at least an option.')
    } else {
        getSearchResults(searchableData, optionSelection)
    }

};

var getSearchResults = function (searchdata, options) {
    if (options === null || options === '') {
        var apiUrl = 'https://www.loc.gov/search/?q=' + searchdata + '&fo=json'

    } else {
        var apiUrl = 'https://www.loc.gov/' + options + '/?q=' + searchdata + '&fo=json'

    }

    console.log("The parameter is: " + apiUrl)

    fetch(apiUrl)
        .then(function (response) {
            if (!response.ok) {
                response.json();
            }

            return response.json();
        })

        .then(function (doResponse) {

            console.log("do response length number is " + doResponse.results.length)
            for (var i = 0; i < doResponse.results.length; i++) {
                // console.log("num " + i)
                // console.log(doResponse);
                spitItOut(doResponse.results[i])
                // console.log("Description" + doResponse.results[0].description);




                // var divE1 = document.createElement(div);
                // divE1.style.textAlign = "center";
                // divE1.style.fontWeight = "bold";
                // divE1.style.fontSize = "smaller";
                // divE1.style.paddingTop = "15px";

                // // Add a paragraph
                // var paragraph = document.createElement("p");
                // var text = document.createTextNode(doResponse.results[i].description)
                // paragraph.appendChild(text)
                // divE1.appendChild(paragraph)

                // div.innerHTML = "<p>" doResponse.results[i].description "</p>";
                // div.innerHTML = "<p>" doResponse.results[i].title "</p>";
                // div.innerHTML = "href="doResponse.results[i].url;
                // div.innerHTML = "href="doResponse.results[i].image_url;

                // div.setAttribute('class', 'adddiv');
                // document.body.appendChild(div);
                // document.getElementsByTagName("body")[0].appendchild(divE1);

                
            }





        })
}


function sendToSearchpage(event) {
    event.preventDefault();
    document.location = "./searchpage.html";
}

searchForm.addEventListener("submit", buildSearchData);