
var img = new Array(245);
for (var i = 0; i < 245; i++) {
    img[i] = "img/rainbow/n" + i + ".jpg";
}
function change() {
   
    var num = Math.floor(Math.random() * 245);
    document.getElementById("rainbowimg").src = img[num];
}
