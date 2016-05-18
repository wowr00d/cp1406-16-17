namex= "no";
donationx = "no"; 
phonex= "no"; 
mobilex= "no"; 
addressx= "no";

function nameEntered(name) {
    if (name.value != "") {
        document.BenefactorForm.nameTick.src = "images/tick.png";
        document.BenefactorForm.nameTick.alt = "tick";
        document.getElementById("nameErrMsg").innerHTML = "Perfect";
        namex = "yes";
        return true;
    }
    else {
        document.BenefactorForm.nameTick.src = "images/cross.png";
        document.BenefactorForm.nameTick.alt = "cross";
        document.getElementById("submit").disabled = true;
        namex = "no";
        return false;
    }
}

function donationEntered(Donation) {
    var inpObj = document.getElementById("Donation");
    if (Donation.value == "" ||  Donation.value == null){
        document.getElementById("DonationMsg").innerHTML = "Please enter your donation amount"
        donationx = "no";
        return false;
    }
    else if (inpObj.checkValidity() == false) {
        document.getElementById("DonationMsg").innerHTML = inpObj.validationMessage;
        donationx = "no";
        return false;
    } else {
        document.getElementById("DonationMsg").innerHTML = "Valid Donation";
        donationx = "yes";
        return true;
    } 
} 

function emailEntered(Email) {
    var x = document.forms["BenefactorForm"]["Email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        document.BenefactorForm.emailTick.src = "images/cross.png";
        document.BenefactorForm.emailTick.alt = "cross";
        document.getElementById("emailErrMsg") = "Not a valid e-mail address"
        emailx = "no";
        return false;
    }
    else{
        document.BenefactorForm.emailTick.src = "images/tick.png";
        document.BenefactorForm.emailTick.alt = "tick";
        document.getElementById("emailErrMsg") = "Perfect"
        emailx = "yes";
        return true;
    }
}

function phoneEntered(Phone) {  
  var phoneno = /^\d{10}$/;
  if(Phone.value.match(phoneno)){  
      document.BenefactorForm.phoneTick.src = "images/tick.png";
      document.BenefactorForm.phoneTick.alt = "tick";
      document.getElementById("phoneErrMsg").innerHTML = "Perfect";
      phonex= "yes";
      return true;
  }  
  else{  
      document.BenefactorForm.phoneTick.src = "images/cross.png";
      document.BenefactorForm.phoneTick.alt = "cross";
      document.getElementById("phoneErrMsg").innerHTML = "Please enter only 10 digits without spacing or other special characters";
     phonex= "no";  
     return false;
  }  
} 

function mobileEntered(Mobile) {  
  var mobileno = /^\d{10}$/;
  if(Mobile.value.match(phoneno)){  
      document.BenefactorForm.mobileTick.src = "images/tick.png";
      document.BenefactorForm.mobileTick.alt = "tick";
      document.getElementById("mobileErrMsg").innerHTML = "Perfect";
      mobilex= "yes";
      return true;
  }  
  else{  
      document.BenefactorForm.mobileTick.src = "images/cross.png";
      document.BenefactorForm.mobileTick.alt = "cross";
      document.getElementById("mobileErrMsg").innerHTML = "Please enter only 10 digits without spacing or other special characters";
     mobilex= "no";  
     return false;
  }  
}   


/*
This isn't really right
function addressEntered(Address){
    var illegalChars = /[,#-\/\s\!\@\$]/gi;
    if (illegalChars.test(Address)){
        alert("Not a valid Address");
    }

}*/

function addressEntered(Address){
  if(Address.value != ""){
    document.BenefactorForm.addressTick.src = "images/tick.png";
    document.BenefactorForm.addressTick.alt = "tick";
    document.getElementById("addressErrMsg").innerHTML = "Perfect";
    addressx= "yes";
    return true;
  }
  else{
    document.BenefactorForm.addressCross.src = "images/cross.png";
    document.BenefactorForm.addressCross.alt = "cross";
    document.getElementById("addressErrMsg").innerHTML = "Please Enter a valid address";
    addressx= "no";
    return false;
  }
}


function anon(anonymous) {
  document.getElementById("recognition").disabled = true;
  recognition.value = null;
}
function anonUnDisable(anonymous) {
  document.getElementById("recognition").disabled = false;
}


function nameEntered(name) {
    if (name.value != "") {
        document.BenefactorForm.nameTick.src = "images/tick.png";
        document.BenefactorForm.nameTick.alt = "tick";
    }
    else {
        document.BenefactorForm.nameTick.src = "images/cross.png";
        document.BenefactorForm.nameTick.alt = "cross";
    }
}

function donationEntered(Donation) {
    var inpObj = document.getElementById("Donation");
    if (Donation.value == "" ||  Donation.value == null){
        document.getElementById("DonationMsg").innerHTML = "Please enter your donation amount"
    }
    else if (inpObj.checkValidity() == false) {
        document.getElementById("DonationMsg").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("DonationMsg").innerHTML = "Valid Donation";
    } 
} 

function emailEntered(Email) {
    var x = document.forms["BenefactorForm"]["Email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}

function phoneEntered(Phone) {  
  var phoneno = /^\d{10}$/;
  if(Phone.value.match(phoneno)){  
      document.BenefactorForm.phoneTick.src = "images/tick.png";
      document.BenefactorForm.phoneTick.alt = "tick";
      document.getElementById("phoneErrMsg").innerHTML = "Perfect";
      return true;
  }  
  else{  
      document.BenefactorForm.phoneTick.src = "images/cross.png";
      document.BenefactorForm.phoneTick.alt = "cross";
      document.getElementById("phoneErrMsg").innerHTML = "Please enter only 10 digits without spacing or other special characters";
     return false;  
  }  
}  

function mobileEntered(Mobile) {  
  var mobileno = /^\d{10}$/;
  if(Mobile.value.match(phoneno)){  
      document.BenefactorForm.mobileTick.src = "images/tick.png";
      document.BenefactorForm.mobileTick.alt = "tick";
      document.getElementById("mobileErrMsg").innerHTML = "Perfect";
      return true
  }  
  else{  
      document.BenefactorForm.mobileTick.src = "images/cross.png";
      document.BenefactorForm.mobileTick.alt = "cross";
      document.getElementById("mobileErrMsg").innerHTML = "Please enter only 10 digits without spacing or other special characters"; 
     return false
  }  
}   


/*
This isn't really right
function addressEntered(Address){
    var illegalChars = /[,#-\/\s\!\@\$]/gi;
    if (illegalChars.test(Address)){
        alert("Not a valid Address");
    }

}*/

function addressEntered(Address){
  if(Address.value != ""){
    document.BenefactorForm.addressTick.src = "images/tick.png";
    document.BenefactorForm.addressTick.alt = "tick";
    document.getElementById("addressErrMsg").innerHTML = "Perfect";
  }
  else{
    document.BenefactorForm. addressCross.src = "images/cross.png";
    document.BenefactorForm.addressCross.alt = "cross";
    document.getElementById("addressErrMsg").innerHTML = "Please Enter a valid address";
  }
}


function anon(anonymous) {
  document.getElementById("recognition").disabled = true;
  recognition.value = null;
}
function anonUnDisable(anonymous) {
  document.getElementById("recognition").disabled = false;
}

/*function continueornot(){
  if namex =="yes" &&  donationx = "yes" && phonex= "yes" && mobilex= "yes" && addressx= "yes"{
    document.getElementById("submit").disabled = false;
  }
  else{
    document.getElementById("submit").disabled= true;
  }
} *///*****************for some reason this function and clearForm are not running properly******************

function clearForm() {
  document.getElementById("nameErrMsg").innerHTML = "";
  document.BenefactorForm.nameTick.src = "images/cross.png";
  document.getElementById("DonationMsg").innerHTML = ""
  document.BenefactorForm.emailTick.src = "images/cross.png";
  document.getElementById("emailErrMsg") = "Not a valid e-mail address"
  document.BenefactorForm.phoneTick.src = "images/cross.png";
  document.getElementById("phoneErrMsg").innerHTML = "";
  document.BenefactorForm.mobileTick.src = "images/cross.png";
  document.getElementById("mobileErrMsg").innerHTML = "";
  document.BenefactorForm.addressCross.src = "images/cross.png";
  document.getElementById("addressErrMsg").innerHTML = "";
  document.getElementById("recognition").disabled = false;
  namex= "no";
  donationx = "no"; 
  phonex= "no"; 
  mobilex= "no"; 
  addressx= "no";
}