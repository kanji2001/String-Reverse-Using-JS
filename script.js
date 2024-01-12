function reverse() {
    let String = document.getElementById("Reverse").value;
    let newString = '';

    for(var i = String.length-1; i >= 0; i--) {
        newString += String[i];
    }

    document.getElementById("res").innerText = "Reversed String :" +  newString;
}