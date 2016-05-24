
function nameEntered(name) {
    if (name.value != "") {
        document.BenefactorForm.nameTick.src = "images/tick.png";
        document.BenefactorForm.nameTick.alt = "tick";
        document.getElementById("nameErrMsg").innerHTML = "Perfect";
        namex = true;
         
    }
    else {
        document.BenefactorForm.nameTick.src = "images/cross.png";
        document.BenefactorForm.nameTick.alt = "cross";
        namex = false;
        return;
    }
}

function donationEntered(Donation) {
    var inpObj = document.getElementById("Donation");
    if (Donation.value == "" ||  Donation.value == null){
        document.getElementById("DonationMsg").innerHTML = "Please enter your donation amount"
        donationx = false;
        return;
    }
    else if (inpObj.checkValidity() == false) {
        document.getElementById("DonationMsg").innerHTML = inpObj.validationMessage;
        donationx = false;
        return;
    } else {
        document.getElementById("DonationMsg").innerHTML = "Valid Donation";
        donationx = true;
        return;
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
        emailx = false;
        return;
    }
    else{
        document.BenefactorForm.emailTick.src = "images/tick.png";
        document.BenefactorForm.emailTick.alt = "tick";
        document.getElementById("emailErrMsg") = "Perfect"
        emailx = true;
         
    }
}

function phoneEntered(Phone) {  
  var phoneno = /^\d{10}$/;
  if(Phone.value.match(phoneno)){  
      document.BenefactorForm.phoneTick.src = "images/tick.png";
      document.BenefactorForm.phoneTick.alt = "tick";
      document.getElementById("phoneErrMsg").innerHTML = "Perfect";
      phonex= true;
       
  }  
  else{  
      document.BenefactorForm.phoneTick.src = "images/cross.png";
      document.BenefactorForm.phoneTick.alt = "cross";
      document.getElementById("phoneErrMsg").innerHTML = "Please enter only 10 digits without spacing or other special characters";
     phonex= false;  
     return;
  }  
} 

function mobileEntered(mobile) {  
  var mobileno = /^\d{10}$/;
  if(Mobile.value.match(phoneno)){  
      document.BenefactorForm.mobileTick.src = "images/tick.png";
      document.BenefactorForm.mobileTick.alt = "tick";
      document.getElementById("mobileErrMsg").innerHTML = "Perfect";
      mobilex= true;
       
  }  
  else{  
      document.BenefactorForm.mobileTick.src = "images/cross.png";
      document.BenefactorForm.mobileTick.alt = "cross";
      document.getElementById("mobileErrMsg").innerHTML = "Please enter only 10 digits without spacing or other special characters";
     mobilex= false;  
     return;
  }  
}   


function anon(anonymous) {
  document.getElementById("recognition").disabled = true;
  recognition.value = null;
}
function anonUnDisable(anonymous) {
  document.getElementById("recognition").disabled = false;
}

function validate(){
  if(BenefactorForm.name.value == ''){
            return
        }
  if(BenefactorForm.Donation.value ==''){
    return
  }
  if(isNaN(BenefactorForm.Donation.value)){
    return
  }
  if(BenefactorForm.Email.value=''){
    return
  }
  if(BenefactorForm.Phone.value=''){
    return
  }
  if(isNaN(BenefactorForm.Phone.value)){
    return
  }
  if(BenefactorForm.Phone.length!= 10){
    return
  }
   if(BenefactorForm.mobile.value=''){
    return
  }
  if(isNaN(BenefactorForm.mobile.value)){
    return
  }
  if(BenefactorForm.mobile.length!=10){
    return
  }
  BenefactorForm.submit()
}

function reset(){
  BenefactorForm.reset()
}

