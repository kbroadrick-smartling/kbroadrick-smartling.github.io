txt='{"response":{"heading": "Heading text rendered by a Javascript function.", "introductionText": "This text is also rednered by Javascript but the client doesn\'t want this translated so thay must add markup to their HTML to do it. No rules/rewrites work here.", "mainBody": "The is the start paragrapah text ", "spanText": " and this text is wrapped in a span tag which contains ", "linkText": "link text ", "spanTextEnd": " end span tag text.", "spanTextTwo": "and this is text wrapped in a span added to the page after the paragrapah with a ","pText": "Second P tag."}}'
console.log(txt)
var myObj = JSON.parse(txt);
function heading(){
document.getElementById('heading').innerHTML = myObj.response.heading;
}
function introText(){
document.getElementById('intro').innerHTML = myObj.response.introductionText
}
function mBody(){
document.getElementById('main').innerHTML = myObj.response.mainBody
}
function concatString(){
document.getElementById('concat').innerHTML = myObj.response.mainBody + "<span slCompositeString=\"true\" class=\"test_comp\">" + myObj.response.spanText + "<a href=\"www.smartling.com\">" + myObj.response.linkText + "</a>" + myObj.response.spanTextEnd + "</span>"
}
function concatStringAgain(){
document.getElementById('concatagain').innerHTML = myObj.response.mainBody + "<span id=\"span_id\"></span>"
concatStringSpan();
}
function concatStringSpan(){
document.getElementById('span_id').innerHTML = myObj.response.spanTextTwo + "<a href=\"www.smartling.com\">" + myObj.response.linkText + "</a>" + myObj.response.spanTextEnd
}
function concatStringP(){
document.getElementById('p_example').innerHTML = myObj.response.mainBody + "<p slCompositeString=\"true\">" + myObj.response.pText + "</p>"
}
