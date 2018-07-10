document.addEventListener("DOMContentLoaded",
function() {

    //alert("hello world!")

    function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

    function changeColor() {
        let differentColor = document.getElementById("name")
        differentColor.addEventListener("click", function(){
            differentColor.color = "red"
        })
        //style.color = "red"

        //document.getElementByTagName('h1').style.color= 'red'
    }
}) //END OF DOM CONTENT LOADED
