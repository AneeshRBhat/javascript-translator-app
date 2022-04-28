var inputText = document.querySelector("#input-text")
var btnTranslate = document.querySelector("#btn-translate")
var outputArea = document.querySelector("#output-area")

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json"
function makeTranslationURL(textInput) {
    return serverURL + "?text=" + textInput
}

function errorHandler(error) {
    console.log("error:" + error)
    alert("An error has occured with the API, please try again after some time")
}

function clickHandler() {
    var textInput = inputText.value 

    fetch(makeTranslationURL(textInput))
        .then(response => response.json())
        .then(json => {
                        var outputText = json.contents.translated
                        outputArea.innerText = outputText
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)