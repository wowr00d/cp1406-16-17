
function nameEntered(name) {
    if (name.value != "") {
        document.BenefactorForm.nameTick.src = "images/tick.png";
        document.BenefactorForm.nameTick.alt = "tick";
        document.getElementById("nameErrMsg").innerHTML = "Perfect";
         
    }
    else {
        document.BenefactorForm.nameTick.src = "images/cross.png";
        document.BenefactorForm.nameTick.alt = "cross";
        return;
    }
}

function donationEntered(Donation) {
    var inpObj = document.getElementById("Donation");
    if (Donation.value == "" ||  Donation.value == null){
        document.getElementById("DonationMsg").innerHTML = "Please enter your donation amount"
        return;
    }
    else if (inpObj.checkValidity() == false) {
        document.getElementById("DonationMsg").innerHTML = inpObj.validationMessage;
        return;
    } else {
        document.getElementById("DonationMsg").innerHTML = "Valid Donation";
        return;
    } 
} 

function emailEntered(Email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(Email.value.match(mailformat)){
      document.BenefactorForm.emailTick.src = "images/tick.png";
      document.BenefactorForm.emailTick.alt = "tick";
      document.getElementById("emailErrMsg").innerHTML = "Perfect"  
      return;
    }
    else{
      document.BenefactorForm.emailTick.src = "images/cross.png";
      document.BenefactorForm.emailTick.alt = "cross";
      document.getElementById("emailErrMsg").innerHTML = "Not a valid e-mail address"
         
    }
}

function phoneEntered(Phone) {  
  var phoneno = /^\d{10}$/;
  if(Phone.value.match(phoneno)){  
      document.BenefactorForm.phoneTick.src = "images/tick.png";
      document.BenefactorForm.phoneTick.alt = "tick";
      document.getElementById("phoneErrMsg").innerHTML = "Perfect";
       
  }  
  else{  
      document.BenefactorForm.phoneTick.src = "images/cross.png";
      document.BenefactorForm.phoneTick.alt = "cross";
      document.getElementById("phoneErrMsg").innerHTML = "Please enter only 10 digits without spacing or other special characters"; 
     return;
  }  
} 

function mobileEntered(mobile) {  
  var mobileno = /^\d{10}$/;
  if(mobile.value.match(mobileno)){  
      document.BenefactorForm.mobileTick.src = "images/tick.png";
      document.BenefactorForm.mobileTick.alt = "tick";
      document.getElementById("mobileErrMsg").innerHTML = "Perfect";       
  }  
  else{  
      document.BenefactorForm.mobileTick.src = "images/cross.png";
      document.BenefactorForm.mobileTick.alt = "cross";
      document.getElementById("mobileErrMsg").innerHTML = "Please enter only 10 digits without spacing or other special characters";
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
  if(BenefactorForm.Cash.checked == false && BenefactorForm.Eftpos.checked == false && BenefactorForm.Cheque.checked == false){
    return
  }
  BenefactorForm.submit()
}

function reset(){
  BenefactorForm.reset()
  document.getElementById("nameErrMsg").innerHTML = "";
  document.getElementById("DonationMsg").innerHTML = "";
  document.getElementById("emailErrMsg").innerHTML = "";
  document.getElementById("phoneErrMsg").innerHTML = "";
  document.getElementById("mobileErrMsg").innerHTML = ""; 
  document.getElementById("recognition").disabled = false; 
}

