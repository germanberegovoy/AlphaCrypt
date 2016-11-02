function myFunction() {
    var str = document.getElementById("iarea").value;
     var txt = str.replace(/a/g, "b");
    document.getElementById("iarea").value = txt;
}
