function clean() {
  document.getElementById("view").value = "";
}

function del() {
  var num = document.getElementById("view").value;
  document.getElementById("view").value = num.substring(0, num.length - 1);
}

function insert(num) {
  document.getElementById("view").value =
    document.getElementById("view").value + num;
}

function equal() {
  var num = document.getElementById("view").value;
  if (num) {
    document.getElementById("view").value = eval(num);
  }
}
