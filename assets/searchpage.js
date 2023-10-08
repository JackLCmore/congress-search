var searchForm = document.querySelector("#form-inline");
var searchData = document.querySelector("#search-data");
var options = document.querySelector("#select");

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
            console.log("here ..." + doResponse);

        })
}


function sendToSearchpage(event) {
    event.preventDefault();
    document.location = "./searchpage.html";
}

searchForm.addEventListener("submit", buildSearchData);