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
    document.BenefactorForm. addressTick.src = "images/tick.png";
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