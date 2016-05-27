
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
    var BenefactorForm = document.getElementById('BenefactorForm');
    var PhoneCheck = document.getElementById('Phone');
    var PhoneLength = PhoneCheck.toString('PhoneCheck');
    var MobileCheck = document.getElementById('mobile');
    var MobileLength = MobileCheck.toString('MobileCheck');
    if(BenefactorForm.name.value == ""){
        alert('Please Enter Your Name');
        return;
    }
    else if(BenefactorForm.Donation.value ==""){
      alert('Please Enter a Donation Amount');
      return;
    }
    else if(isNaN(BenefactorForm.Donation.value)){
      alert('Please Enter a Numerical Donation');
      return;
    }
    else if(PhoneCheck.value != "" && isNaN(PhoneCheck.value)){ //doesnt validate for 0 digits, since its not a required field. only validates if there is somethign in there incorrect.
      alert('Please enter only digits in your phone number');
      return
    }
    else if(PhoneLength.length >= 1 && PhoneLength.length < 10){
      alert('Make Sure Your Phone is Ten Digits');
      return
    }
    else if(MobileCheck.value != "" && isNaN(MobileCheck.value)){ //doesnt validate for 0 digits, since its not a required field. only validates if there is somethign in there incorrect.
      alert('Please enter only digits in your mobile number.');
      return
    }
    else if(MobileLength.length >= 1 && MobileLength.length < 10){
      alert('Make Sure Your Mobile is Ten Digits');
      return
    }
    else if(BenefactorForm.cash.checked == false && BenefactorForm.eftpos.checked == false && BenefactorForm.cheque.checked == false){
      alert('Please Select a Payment Type');
      return;
    }
    else{
        BenefactorForm.submit();
    }
}

function reset(){
  document.getElementById('BenefactorForm').reset()
  document.getElementById("nameErrMsg").innerHTML = "";
  document.getElementById("DonationMsg").innerHTML = "";
  document.getElementById("emailErrMsg").innerHTML = "";
  document.getElementById("phoneErrMsg").innerHTML = "";
  document.getElementById("mobileErrMsg").innerHTML = ""; 
  document.getElementById("recognition").disabled = false; 
  document.BenefactorForm.nameTick.src = "images/cross.png";
  document.BenefactorForm.nameTick.alt = "cross";
  document.BenefactorForm.emailTick.src = "images/cross.png";
  document.BenefactorForm.emailTick.alt = "cross";
  document.BenefactorForm.phoneTick.src = "images/cross.png";
  document.BenefactorForm.phoneTick.alt = "cross";
  document.BenefactorForm.mobileTick.src = "images/cross.png";
  document.BenefactorForm.mobileTick.alt = "cross";
}

