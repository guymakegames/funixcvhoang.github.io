// Kinh nghiem -------------------------------------------------------------------------------------------------------//
function hideshow() {
  var x = document.getElementById("job-content");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("button-email").innerHTML = "VIEW LESS";
  } else {
    x.style.display = "none";
    document.getElementById("button-email").innerHTML = "VIEW MORE";
  }
}

function hideshow1() {
  var x = document.getElementById("job-content2");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("button-email1").innerHTML = "VIEW LESS";
  } else {
    x.style.display = "none";
    document.getElementById("button-email1").innerHTML = "VIEW MORE";
  }
}

function hideshow2() {
  var x = document.getElementById("job-content3");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("button-email2").innerHTML = "VIEW LESS";
  } else {
    x.style.display = "none";
    document.getElementById("button-email2").innerHTML = "VIEW MORE";
  }
}

function hideshow3() {
  var x = document.getElementById("job-content1");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("button-email3").innerHTML = "VIEW LESS";
  } else {
    x.style.display = "none";
    document.getElementById("button-email3").innerHTML = "VIEW MORE";
  }
}

function hideshow4() {
  var x = document.getElementById("job-content4");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("button-email4").innerHTML = "VIEW LESS";
  } else {
    x.style.display = "none";
    document.getElementById("button-email4").innerHTML = "VIEW MORE";
  }
}

function hideshow5() {
  var x = document.getElementById("job-content5");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("button-email5").innerHTML = "VIEW LESS";
  } else {
    x.style.display = "none";
    document.getElementById("button-email5").innerHTML = "VIEW MORE";
  }
}

//Check Mail ----------------------------------------------------------------------------------------------//
function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    document.getElementById("mail").style.display = "none";
    document.getElementById("ttcn").style.display = "block";
  } else {
    alert("Invalid email address!");
    document.form1.text1.focus();
    return false;
  }
}
