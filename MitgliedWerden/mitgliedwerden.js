function myFunction() {

  document.getElementById("personalienId").style.display = "none";
  document.getElementById("buttonWeiter").style.display = "none";
  document.getElementById("manschaftBemerkung").style.display = "block";
  
  
}


function checkInput() {
  console.log("Handball")
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (document.getElementById('vorname').value == "") {
    alert("Vorname muss ausgefüllt werden!");
    document.getElementById('vorname').focus();
  } else if (document.getElementById('nachname').value == "") {
    alert("Nachname muss ausgefüllt werden!");
    document.getElementById('nachname').focus();
  } else if (!document.getElementById('email').value.match(mailformat)) {
    document.getElementById('email').focus();
    alert("korrekte emailadresse bitte!");
  } else if (document.getElementById('adresse').value == "") {
    alert("Adresse muss ausgefüllt werden!");
    document.getElementById('adresse').focus();
  } else if (document.getElementById('wohnort').value == "") {
    alert("Wohnort muss ausgefüllt werden!");
    document.getElementById('wohnort').focus();
  } else if (!document.getElementById('telefonnummer').value.match(phoneno)) {
    alert("bitte geben sie eine richtige Telefonnummer ein");
    document.getElementById('telefonnummer').focus();
  }  
  else {
    myFunction()
  }
}
