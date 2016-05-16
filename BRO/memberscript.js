/*make a progress bar for completion*/
/*disable option for things which are relevant*/


function nameEntered(name) {
    if (name.value != "") {
        document.memberForm.nameTick.src = "images/tick.png";
        document.memberForm.nameTick.alt = "tick";
        document.getElementById("nameErrMsg").innerHTML = "Perfect";
        namex = true;
        return true
    }
    else {
        document.memberForm.nameTick.src = "images/cross.png";
        document.memberForm.nameTick.alt = "cross";
        document.getElementById("submit").disabled = true;
        namex = false;
        return false
    }
}

function donationEntered(Donation) {
    var inpObj = document.getElementById("Donation");
    if (Donation.value == "" ||  Donation.value == null){
        document.getElementById("DonationMsg").innerHTML = "Please enter your donation amount"
        donationx = false;
        return false
    }
    else if (inpObj.checkValidity() == false) {
        document.getElementById("DonationMsg").innerHTML = inpObj.validationMessage;
        donationx = false;
        return false
    } else {
        document.getElementById("DonationMsg").innerHTML = "Valid Donation";
        donationx = true;
        return false
    } 
} 

function emailEntered(Email) {
    var x = document.forms["memberForm"]["Email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        document.memberForm.emailTick.src = "images/cross.png";
        document.memberForm.emailTick.alt = "cross";
        document.getElementById("emailErrMsg") = "Not a valid e-mail address"
        emailx = false;
        return false
    }
    else{
        document.memberForm.emailTick.src = "images/tick.png";
        document.memberForm.emailTick.alt = "tick";
        document.getElementById("emailErrMsg") = "Perfect"
        emailx = true;
        return true
    }
}

function phoneEntered(Phone) {  
  var phoneno = /^\d{10}$/;
  if(Phone.value.match(phoneno)){  
      document.memberForm.phoneTick.src = "images/tick.png";
      document.memberForm.phoneTick.alt = "tick";
      document.getElementById("phoneErrMsg").innerHTML = "Perfect";
      phonex= true;
      return true
  }  
  else{  
      document.memberForm.phoneTick.src = "images/cross.png";
      document.memberForm.phoneTick.alt = "cross";
      document.getElementById("phoneErrMsg").innerHTML = "Please enter only 10 digits without spacing or other special characters";
     phonex= false;  
     return false
  }  
} 

function mobileEntered(Mobile) {  
  var mobileno = /^\d{10}$/;
  if(Mobile.value.match(phoneno)){  
      document.memberForm.mobileTick.src = "images/tick.png";
      document.memberForm.mobileTick.alt = "tick";
      document.getElementById("mobileErrMsg").innerHTML = "Perfect";
      mobilex= true;
      return true
  }  
  else{  
      document.memberForm.mobileTick.src = "images/cross.png";
      document.memberForm.mobileTick.alt = "cross";
      document.getElementById("mobileErrMsg").innerHTML = "Please enter only 10 digits without spacing or other special characters";
     mobilex= false;  
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
    document.memberForm. addressTick.src = "images/tick.png";
    document.memberForm.addressTick.alt = "tick";
    document.getElementById("addressErrMsg").innerHTML = "Perfect";
    addressx= true;
    return true
  }
  else{
    document.memberForm. addressCross.src = "images/cross.png";
    document.memberForm.addressCross.alt = "cross";
    document.getElementById("addressErrMsg").innerHTML = "Please Enter a valid address";
    addressx= false;
    return false
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
  if namex ==true &&  donationx = true   emailx = true     phonex= true  mobilex= true addressx= true{
    document.getElementById("submit").disabled = false;
  }
  else{
    document.getElementById("submit").disabled= true;
  }
}*/

function nameEntered(name) {
    if (name.value != "") {
        document.memberForm.nameTick.src = "images/tick.png";
        document.memberForm.nameTick.alt = "tick";
    }
    else {
        document.memberForm.nameTick.src = "images/cross.png";
        document.memberForm.nameTick.alt = "cross";
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
    var x = document.forms["memberForm"]["Email"].value;
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
      document.memberForm.phoneTick.src = "images/tick.png";
      document.memberForm.phoneTick.alt = "tick";
      document.getElementById("phoneErrMsg").innerHTML = "Perfect";
      return true;
  }  
  else{  
      document.memberForm.phoneTick.src = "images/cross.png";
      document.memberForm.phoneTick.alt = "cross";
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
    document.memberForm. addressTick.src = "images/tick.png";
    document.memberForm.addressTick.alt = "tick";
    document.getElementById("addressErrMsg").innerHTML = "Perfect";
  }
  else{
    document.memberForm. addressCross.src = "images/cross.png";
    document.memberForm.addressCross.alt = "cross";
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

function familyTicket(){
  document.getElementById("type").disabled =true;
}
function notfamily(){
  document.getElementById("kidname1").disabled =true;
  document.getElementById("kidname2").disabled =true;
  document.getElementById("kidname3").disabled =true;
  document.getElementById("kidDate1").disabled=true;
  document.getElementById("kidDate2").disabled=true;
  document.getElementById("kidDate3").disabled=true;
  document.getElementById("kidname1").innerHTML ="";
  document.getElementById("kidname2").innerHTML ="";
  document.getElementById("kidname3").innerHTML ="";
  document.getElementById("kidDate1").innerHTML="";
  document.getElementById("kidDate2").innerHTML="";
  document.getElementById("kidDate3").innerHTML="";
}
function disablePlayReg(){
  document.getElementById("instrument").disabled=true;
  document.getElementById("qualification").disabled=true;
  document.getElementById("experience").disabled=true;

}