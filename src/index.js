import "./styles.css";

document.getElementById("btn").addEventListener("click", function() {
  work();
});

document.getElementById("up").addEventListener("click", function() {
  document.getElementById("up").style.display = "none";
  backUp();
});

function backUp() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function work() {
  document.getElementById("up").style.display = "none";
  document.getElementById("btn").innerHTML = "Count";
  document.getElementById("name").innerHTML = null;

  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;
  var pls = [];
  var second = 0;
  var fbcnt = 0;
  var fcnt = 0;
  var bcnt = 0;
  var i;

  for (i = start; i <= end; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      pls.push("Fizzbuzz");
      fbcnt++;
    } else if (i % 3 === 0) {
      pls.push("Fizz");
      fcnt++;
    } else if (i % 5 === 0) {
      pls.push("Buzz");
      bcnt++;
    } else {
      pls.push(i);
    }
  }

  var o = setInterval(function() {
    document.getElementById("name").innerHTML += pls[second++] + "<br />";
    document.getElementById("fizz-buzz").innerHTML = "Fizzbuzzes: " + fbcnt;
    document.getElementById("fizz").innerHTML = "Fizzes: " + fcnt;
    document.getElementById("buzz").innerHTML = "Buzzes: " + bcnt;
    window.scrollTo({ top: document.body.scrollHeight });

    if (pls[second] == null) {
      document.getElementById("btn").innerHTML = "Redo";
      document.getElementById("up").style.display = "block";
      clearTimeout(o);
    }
  }, 50);
}
