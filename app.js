let ape =0
function mOver(data) {
    data.innerHTML = "Trykk Meg";
}
function mOut(data) {
    data.innerHTML = `${data.id}`;
}
if(ape == 0) {
    function mOut(this) {
        document.getElementById("Knapp2").innerHTML = "Dra meg";
    }
else if(ape ==1){
        function mOutk2() {
            document.getElementById("Knapp2").innerHTML = "Trykk meg";
        }
}
}

// Knapp 1
function trykk1() {
    document.getElementById("mc2a").innerHTML = "WOW! prøv knapp 2";
    document.getElementById("mc2b").innerHTML = "";
    let img = document.createElement("img"); 
 
    img.src = "monkey.jpg"; 
    let src = document.getElementById("mc2b"); 
 
    src.appendChild(img); 
    document.getElementById("mc2b").style = `max-width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 10px;
    position: absolute;`
    document.getElementById("Knapp2").innerHTML = "Dra meg";
}
// function apeSjekk() {
// if (ape == 1) {
//     alert("hallo")
//     }
//     else {
//         alert("gikk ikke")
//     }
// }

// Knapp 2

