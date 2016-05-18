/*make a progress bar for completion*/



function nameEntered(name) {
  var regexName = /^[a-zA-Z]+$/;
   if(name.value.match(regexName)){
        document.memberForm.nameTick.src = "images/cross.png";
        document.memberForm.nameTick.alt = "cross";
        return false
    }
    else if (name.value != "") {
        document.memberForm.nameTick.src = "images/tick.png";
        document.memberForm.nameTick.alt = "tick";
        document.getElementById("nameErrMsg").innerHTML = "Perfect";
        return true
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
        return false
    }
    else{
        document.memberForm.emailTick.src = "images/tick.png";
        document.memberForm.emailTick.alt = "tick";
        document.getElementById("emailErrMsg") = "Perfect"
        return true
    }
}

function phoneEntered(Phone) {  
  var phoneno = /^\d{10}$/;
  if(Phone.value.match(phoneno)){  
      document.memberForm.phoneTick.src = "images/tick.png";
      document.memberForm.phoneTick.alt = "tick";
      document.getElementById("phoneErrMsg").innerHTML = "Perfect";
      return true
  }  
  else{  
      document.memberForm.phoneTick.src = "images/cross.png";
      document.memberForm.phoneTick.alt = "cross";
      document.getElementById("phoneErrMsg").innerHTML = "Please enter only 10 digits without spacing or other special characters"; 
     return false
  }  
} 

function mobileEntered(Mobile) {  
  var mobileno = /^\d{10}$/;
  if(Mobile.value.match(phoneno)){  
      document.memberForm.mobileTick.src = "images/tick.png";
      document.memberForm.mobileTick.alt = "tick";
      document.getElementById("mobileErrMsg").innerHTML = "Perfect";
      return true
  }  
  else{  
      document.memberForm.mobileTick.src = "images/cross.png";
      document.memberForm.mobileTick.alt = "cross";
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
    document.memberForm. addressTick.src = "images/tick.png";
    document.memberForm.addressTick.alt = "tick";
    document.getElementById("addressErrMsg").innerHTML = "Perfect";
    return true
  }
  else{
    document.memberForm. addressCross.src = "images/cross.png";
    document.memberForm.addressCross.alt = "cross";
    document.getElementById("addressErrMsg").innerHTML = "Please Enter a valid address";
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
function instrumentEntered(instrument) {
    if (instrument.value != "") {
        document.memberForm.instrumentTick.src = "images/tick.png";
        document.memberForm.instrumentTick.alt = "tick";
        document.getElementById("instrumentErrMsg").innerHTML = "Perfect";
        return true
    }
    else{
        document.memberForm.instrumentTick.src = "images/cross.png";
        document.memberForm.instrumentTick.alt = "cross";
        return false
    }
   
}
function qualificationEntered(qualification) {
   if (qualification.value != "") {
        document.memberForm.qualificationTick.src = "images/tick.png";
        document.memberForm.qualificationTick.alt = "tick";
        document.getElementById("qualificationErrMsg").innerHTML = "Perfect";
        return true
    }
    else{
        document.memberForm.qualificationTick.src = "images/cross.png";
        document.memberForm.qualificationTick.alt = "cross";
        return false
    }
   
}
function experienceEntered(experience) {
   if (experience.value != "") {
        document.memberForm.experienceTick.src = "images/tick.png";
        document.memberForm.experienceTick.alt = "tick";
        document.getElementById("experienceErrMsg").innerHTML = "Perfect";
        return true
    }
    else{
        document.memberForm.experienceTick.src = "images/cross.png";
        document.memberForm.experienceTick.alt = "cross";
        return false
    }
   
}
//i need to add a function to enable submit button when data is valid

function clearForm() {
document.getElementById("nameErrMsg").innerHTML = "";
document.memberForm.nameTick.src = "images/cross.png";
document.getElementById("DonationMsg").innerHTML = "";
document.memberForm.emailTick.src = "images/cross.png";
document.getElementById("emailErrMsg") = ""
document.memberForm.phoneTick.src = "images/cross.png";
document.getElementById("phoneErrMsg").innerHTML = "";
document.memberForm.mobileTick.src = "images/cross.png";
document.getElementById("mobileErrMsg").innerHTML = ""; 
document.memberForm. addressCross.src = "images/cross.png";
document.getElementById("addressErrMsg").innerHTML = ""; 
}