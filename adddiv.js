// Anna Markiewicz's div that allows students to write notes while researching inside website
// create new div
var added = document.createElement('div');

// give it an id
added.id = "added";

// add the HTML inside the div
added.innerHTML = 'Hello! I am here to help you write notes! <br> Dont forget to copy these into your papers <br> <textarea id="thisIsTextArea" rows="30" cols="30"> </textarea> <br> <button id="clickToRemove"> Clear Text </button> <button onclick="copy()"> Copy to Clipboard </button>';

// add the div to the page, append it to the body
document.body.appendChild(added);


// clear text inside of the added div
document.getElementById("clickToRemove").onclick = function() {clearText()};

function clearText() {
  document.getElementById("thisIsTextArea").value = " ";
}

// Copy text inside of the textarea to paste somewhere else
function copy() {
  let textarea = document.getElementById("thisIsTextArea");
  textarea.select();
  document.execCommand("copy");
}




// style new div
document.getElementById("added").style.background = "gainsboro";
document.getElementById("added").style.width = 200;
document.getElementById("added").style.position = "fixed";
document.getElementById("added").style.right = "20px";
document.getElementById("added").style.top = "120px";
document.getElementById("added").style.padding = "35px";



