//function alertClick() {
  //  alert("Hello, world!");

//}
function biggerText(){
    document.getElementById("text").style.fontSize = "24pt";

}
function smallerText(){
    document.getElementById("text").style.fontSize = "4pt";

}
function boringText(){
    if(document.getElementById("boring").checked == true){
        document.getElementById("text").style.fontSize = "10pt";
        document.getElementById("text").style.textDecoration= "none";
        document.getElementById("text").style.color = "black";
        document.getElementById("boring").checked = false;
    }
}

function fancyText(){
    if(document.getElementById("fancy").checked == true){
        document.getElementById("text").style.textDecoration= "underline";
        document.getElementById("text").style.color = "blue";
        document.getElementById("fancy").checked = false;
    }
}


function Moo(){
    var numberMoo= document.getElementById("text");
    var parts = numberMoo.value.split(" -- ");
    numberMoo.value = numberMoo.value.toUpperCase();
    for (var a=0; a < parts.length; a++){
        parts[a] = parts[a]+ " -Moo" 

    }
        numberMoo.value = parts.join(" -- ")
}
