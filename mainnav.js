includeHTML();

function includeHTML() {
  var z, i, a, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    if (z[i].getAttribute("mainnav")) {
      a = z[i].cloneNode(false);
      file = z[i].getAttribute("mainnav");
      var xhttp = new XMLHttpRequest();
      
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          a.removeAttribute("mainnav");
          a.innerHTML = xhttp.responseText;
          z[i].parentNode.replaceChild(a, z[i]);
          includeHTML();
        }
      };
      xhttp.open("GET", file, true); 
      xhttp.send();
      return;
    }
  }
}
