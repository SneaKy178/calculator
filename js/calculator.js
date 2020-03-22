function insert(num) {
  document.getElementById("bar").value =
    document.getElementById("bar").value + num;
}

function equal() {
  var num = document.getElementById("bar").value;
  if (num) {
    document.getElementById("bar").value = eval(num);
  }
}

function del() {
  var num = document.getElementById("bar").value;
  document.getElementById("bar").value = num.substring(0, num.length - 1);
}

function clean() {
  document.getElementById("bar").value = "";
}
